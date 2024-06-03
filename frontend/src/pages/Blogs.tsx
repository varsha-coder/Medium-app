import { Appbar } from "../Components/Appbar"
import { BlogCard } from "../Components/BlogCard"
import {useBlogs} from '../hooks/index'
export const Blogs=()=>{
      
    const {loading,blogs}=useBlogs();
    if(loading){
        return <div>
            loading.....
        </div>
    }


return <div >
        <Appbar/>
        <div className="flex justify-center">
        <div className=" max-w-xl">
         
        <BlogCard 
        authorName={"Nagavarshini"}
        title={"How an ugly single page website makes 500 dollars a month wiyhout affiliate marketing"}
        content={"How an ugly single page website makes 500 dollars a month wiyhout affiliate marketingHow an ugly single page website makes 500 dollars a month wiyhout affiliate marketing"}
        publishedDate="2nd feb 2024"
        ></BlogCard>
       
        </div>
        </div>
        </div>

}