import { SignupInput } from "@shaashwat/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios  from "axios";
import {DATABASE_URL} from"../config"
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate=useNavigate();
    const [postInputs, setpostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: "",
      });

    async function sendRequest(){
        try{

            const response= await axios.post(`${DATABASE_URL}/api/v1/user/${type==="signup"?"signup":"signin"}`,postInputs);
            const token=response.data.jwt;
            localStorage.setItem("token",`Bearer ${token}`);
            navigate("/blogs");
        }catch(e){
            // alert the user that the request failed
            alert('Warning: Something went wrong please try again ');
        }
    }


  return (
    <>
      <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
          <div >
            <div>
              <div className="px-10 ">
                <div className=" text-4xl font-extrabold ">
                  Create an Account
                </div>
                <div className="text-slate-400 text-sm flex justify-center">
                  {type==="signup"?"Already have an account ?":"Don't have an account ?"}
                  <Link className="pl-2 underline" to={type==="signin"?"/signup":"/signin"}>
                   {type==="signin"?"Signup":"Signin"}
                  </Link>
                </div>
              </div>
              <div className="pt-8">
               {type==="signup"? <LabelledInput
                  label="Name"
                  placeholder="Shaashwat Sharma..."
                  onchange={(e) => {
                    setpostInputs({
                      ...postInputs,
                      name: e.target.value,
                    });
                  }}
                />:null}
                <LabelledInput
                  label="Email"
                  placeholder="shaashwat@gmail.com"
                  onchange={(e) => {
                    setpostInputs({
                      ...postInputs,
                      email: e.target.value,
                    });
                  }}
                />
                <LabelledInput
                  label="Password"
                  type={"password"}
                  placeholder="Password01"
                  onchange={(e) => {
                    setpostInputs({
                      ...postInputs,
                      password: e.target.value,
                    });
                  }}
                />
                <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">{type==="signup"?"Sign up":"Sign in"}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

interface InputlableType {
  label: string;
  placeholder: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({ label, placeholder, onchange, type }: InputlableType) {
  return (
    <>
      <div>
        <label className="block mb-2 text-sm font-semibold text-black pt-4">
          {label}
        </label>
        <input
          onChange={onchange}
          type={type || "text"}
          id="first_name"
          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={placeholder}
          required
        />
      </div>
    </>
  );
}




// function PasswordInput({onchange}:any){
//     return <>
//     <div className="max-w-sm">
//   <label className="block text-sm mb-2 dark:text-white">Password</label>
//   <div className="relative">
//     <input onChange={onchange} id="hs-toggle-password" type="password" className="py-3 ps-4 pe-10 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter password" >
//     <button type="button" data-hs-toggle-password='{
//         "target": "#hs-toggle-password"
//       }' className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500">
//       <svg className="shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//         <path className="hs-password-active:hidden" d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
//         <path className="hs-password-active:hidden" d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
//         <path className="hs-password-active:hidden" d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
//         <line className="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22"></line>
//         <path className="hidden hs-password-active:block" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
//         <circle className="hidden hs-password-active:block" cx="12" cy="12" r="3"></circle>
//       </svg>
//     </button>
//     </input>
//   </div>
// </div>
//     </>
// }
