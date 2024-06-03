import { signupInput } from "@nagavarshini/medium-commonnew";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom" ;
import axios from "axios";
import { BACKEND_URL } from "../config";
export const Signupcomp=({type}:{type:"signup"| "signin"})=>{
     const navigate=useNavigate();
     const [postInputs,setPostInputs]=useState<signupInput>({
        name:"",
        email:"",
        password:""
     })
     async function sendRequest(){
      try{
         const response=await axios.post(`${BACKEND_URL}/api/v1/user/${type==='signup'?'signup':'signin'}`,
            postInputs
         );
         const jwt=response.data.jwt;
         localStorage.setItem("token",jwt);
         navigate("/blogs");
      }
       catch(e){
       alert("error while signing")
       }

      }

    return <div className=" h-screen flex justify-center flex-col ">
     
       <div className="flex justify-center flex-col items-center px-5">
            <div className="">
            <div className="text-3xl font-extrabold text-black">
                          Create an account
             </div>
            <div className="text-md text-slate-400">
               {type==="signup" ? "Don't have an account?":" Already have an account?"}
                     
                    <Link className="pl-2 underline" to={type==="signin"? "/signup" :"/signin"}>
                     {type==="signin"?"Signin":"Signup"}
                     </Link>
             </div>
            </div>
      <div className="pt-7 ">
      {type==="signup"?  <LabelledInput label="Name"  placeholder="Enter your Name" onChange={(e)=>{
             setPostInputs({
                ...postInputs,
                name:e.target.value
             })
        }}></LabelledInput>:null}
     
        <LabelledInput label="Username"  placeholder="Varshini@gmail.com" onChange={(e)=>{
             setPostInputs({
                ...postInputs,
                email:e.target.value
             })
        }}></LabelledInput>
     
        <LabelledInput label="Password" type="password"  placeholder="*******" onChange={(e)=>{
             setPostInputs({
                ...postInputs,
                password:e.target.value
             })
        }}></LabelledInput>
      </div>
     <div className="pt-3 ">
     <button onClick={sendRequest} className="bg-black text-white  p-3 rounded">{type=== "signin" ?"Sign in":"Sign up"}</button>
     </div>
       </div>
    </div>
}


interface LabelledInputType{
    label:string;
    placeholder:string;
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void
    type?:string

}
 function LabelledInput({label,placeholder,onChange,type}:LabelledInputType){
    return <div>
        <div>
         <div className="block mb-2 text-md font-medium text-gray-900 dark:text-black">{label}</div>
            {/* <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label> */}
            <input 
            onChange={onChange} type={type||"text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
             focus:border-blue-500 block w-full p-2.5 
            " placeholder={placeholder} required />
        </div>
    </div>
 }