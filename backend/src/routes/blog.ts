import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import {
  createBlogInput,
  updateBlogInput,
} from "@nagavarshini/medium-commonnew";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

//middleware has to chrck the user has logged in .
//pass it down to the route handler.

blogRouter.use("/*", async (c, next) => {
  const jwt = c.req.header("Authorization");

  try {
    if (!jwt) {
      c.status(401);
      return c.json({
        error: "Unauthorized",
      });
    }

    const token = jwt.split(" ")[1];
    const response = await verify(token, c.env.JWT_SECRET);

    if (response.id) {
      c.set("userId", response.id);
      await next();
    } else {
      c.status(403);
      return c.json({ error: "Unauthorized" });
    }
  } catch (e) {
    c.status(403);
    return c.json({
      error: "unauthorised",
    });
  }
});

blogRouter.post("/blog", async (c) => {
  const body = await c.req.json();
  const { success } = createBlogInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      message: "Invalid inputs",
    });
  }

  const authorId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const newBlog = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        author: {
          connect: {
            id: body.author, // This should be the ID of the existing user
          },
        },
      },
    });
    return c.json({
      id: newBlog.id,
    });
  } catch (e) {
    c.status(411);
    return c.json({
      message: "unable to post",
    });
  }
});

blogRouter.put("/updateblog", async (c) => {
  const body = await c.req.json();

  const { success } = updateBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Invalid inputs",
    });
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.blog.update({
      where: {
        id: body.id,
      },

      data: {
        title: body.title,
        content: body.content,
      },
    });

    return c.json({
      id: blog.id,
    });
  } catch (e) {
    c.status(411);
    return c.json({
      message: "unable to update",
    });
  }
});

blogRouter.get("/getblog", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.blog.findFirst({
      where: {
        id: body.id,
      },
    });

    return c.json({
      blog,
    });
  } catch (e) {
    c.status(411);
    return c.json({
      message: "Error while fetching data",
    });
  }
});

blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blogs = await prisma.blog.findMany(
    {
      select:{
        content:true,
        title:true,
        id:true,
        author:{
          select:{
            name:true
          }
        }
      }
    }
  );
  return c.json({
    blogs,
  });
});
