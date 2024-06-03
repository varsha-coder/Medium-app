import { Avatar } from "./BlogCard"

export const Appbar=()=>{
    return <div className="border-b py-4  flex  justify-between px-10">
                  <div className="flex flex-col justify-center">
                    Medium
                  </div>
                  <div>
                      <div>
                          <Avatar size="big" name='Varsha'></Avatar>
                       </div>
                  </div>
            
            </div>
}