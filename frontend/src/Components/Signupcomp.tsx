import { ChangeEvent } from "react";
import { Link } from "react-router-dom"

export const Signupcomp=()=>{
    return <div className=" h-screen flex justify-center flex-col">
       <div className="flex justify-center flex-col items-center">
       <div className="text-3xl font-extrabold text-black">
        Create an account
       </div>
       <div className="text-md text-slate-400">
        Already have an account?
        <Link to={"/signin"}>Login</Link>
       </div>
       <div className="text-md">
        Username
       </div>
       <div className="text-md">
        Email
       </div>
       <div className="text-md">
        Password
       </div>
     <div className="p-2">
     <button className="bg-black text-white p-3 rounded">Sign up</button>
     </div>
       </div>
    </div>
}


interface LabelledInputType{
    label:string;
    placeholder:string;
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void

}
 function LabelledInput({label,placeholder,onChange}:LabelledInputType){
    return <div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input 
            onChange={onChange} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
             focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>
    </div>
 }