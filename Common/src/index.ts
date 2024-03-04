import z from "zod";

export const signupInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

export const signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  author: z.string(),
});

export const updateBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  id: z.string(),
});
export type signupInput = z.infer<typeof signupInput>;
export type signinInput = z.infer<typeof signinInput>;
export type createBlogInputInput = z.infer<typeof createBlogInput>;
export type updateBlogInputInput = z.infer<typeof updateBlogInput>;
