import axios from "axios";
import { Appbar } from "../components/Appbar";
import { DATABASE_URL } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const[title,settitle]=useState("");
    const[content,setcontent]=useState("");

    const navigate=useNavigate();

  return (
    <div>
      <div>
        <Appbar pub="false" />
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-screen-lg pt-10">
          <div className="w-full max-w-screen-lg pt-10">
            <label className="block mb-2 text-4xl font-medium text-gray-900 font-serif">
              Title here..{" "}
            </label>
            <textarea
              onChange={(e)=>{
                settitle(e.target.value)
              }}
              className="focus:outline-none  block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-slate-500 focus:border-slate-500 font-serif "
              placeholder="Write your Title here..."
            ></textarea>
          </div>
          <div className="w-full max-w-screen-lg pt-10">
            <label className="block mb-2 text-4xl font-medium text-gray-900  font-serif">
              Content here..{" "}
            </label>
            <textarea
              onChange={(e)=>{
                setcontent(e.target.value)
              }}
              rows={12}
              className="focus:outline-none  block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-slate-500 focus:border-slate-500 font-mono"
              placeholder="Write your Content here..."
            ></textarea>
          </div>
          <div className="flex justify-end m-10">
            <button 
              onClick={async()=>{
                if(title=="" || content==""){
                    alert('Please provide your Title/Content before posting a blog')
                }
                else{const res= await axios.post(`${DATABASE_URL}/api/v1/blog`,{
                        title,
                        content
                    },{
                            headers:{ 
                                Authorization: localStorage.getItem("token")
                            }
                        }
                )
                navigate(`/blog/${res.data.id}`)}
              }}
              className="text-white bg-gradient-to-br from-green-500 to-green-700  hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-light rounded-lg text-sm px-20 py-2 text-center mr-4  ">
              Publish Now
            </button>
            {/*  */}
        
{/* <button disabled type="button" className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700   inline-flex items-center">
<svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
</svg>
Loading...
</button> */}
              {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};
