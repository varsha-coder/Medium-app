interface BlogCardProps{
    authorName:string,
    title:string,
    content:string,
    publishedDate:string
}

export const BlogCard=({
    authorName,
    title,
    content,
    publishedDate

}:BlogCardProps)=>{
    return <div className="p-4 border-b border-slate-200 pb-4">
               
               <div className="flex ">
               <div className="flex  "> <Avatar  size="small" name={authorName}/>  </div>
               <div className="font-light pl-2 text-sm justify-center flex-col">   {authorName}</div> 
               <div className="flex justify-center items-center pl-2  justify-center flex-col ">
                    <Circle></Circle>
               </div>
                    <div className="pl-2 font-thin text-sm text-slate-400 justify-center flex-col">{publishedDate}</div>
               </div>
               <div className="text-xl font-semibold pt-2">
                    {title}
               </div>
               <div className="text-md font-thin ">
                    {content.slice(0,50)}+"...."
               </div>
               <div className="text-slate-400 font-thin text-sm pt-1">
                    {`${Math.ceil(content.length/100)} minutes `}
               </div>
               {/* <div className=" border-b-2 pt-4">

               </div> */}
      
        </div>

}

 function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-300">

    </div>
 }

  export function Avatar({name,size}:{name:string, size:"small"|'big'}){
    return <div className={`relative inline-flex items-center justify-center ${size=="small"?"h-6 w-6":"h-10 w-10"} rounded-full border-2 border-slate-500 bg-slate-500`}   >
                <span className={` ${size=="small" ? "text-xs":"test-md"} font-thin text-white `}>{name[0]}</span>
           </div>
 }