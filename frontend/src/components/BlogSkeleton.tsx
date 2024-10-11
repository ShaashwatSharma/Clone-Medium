export const BlogSkeleton=()=>{
   return <div className="flex justify-center pt-4 ">
    <div className="p-4 m-1 ml-2 border-b border-gray-200 w-screen max-w-screen-sm ">
        <div className=" flex " >
            <div className="flex justify-center flex-col">
          {/* <Avatarcomp name={authorname}/>  */}
          <svg className="w-10 h-10 me-3 text-gray-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>
            </div>
          <div className="font-light pl-2 text-sm flex justify-center flex-col">
          <div className="h-2.5 bg-gray-200 rounded-full  w-20 mb-2"></div>
            </div> 
            <div className=" pl-2 flex justify-center flex-col"><span>&#183;</span></div>
           <div className="pl-2 font-thin text-slate-500 test-sm flex justify-center flex-col">
           <div className="h-2.5 bg-gray-200 rounded-full  w-10 mb-2"></div>
           </div>
        </div>
        <div className="text-2xl font-semibold pt-2 font-serif ">
        <div className="h-2.5 bg-gray-200 rounded-full  w-40 mb-4"></div>
        </div>
        <div className="text-md font-thin text-slate-700">
        <div className="h-2.5 bg-gray-200 rounded-full  w-65 mb-4"></div>
        <div className="h-2.5 bg-gray-200 rounded-full  w-65 mb-4"></div>
        </div>
        <div className="  text-slate-500 font-thin text-xs pt-4">
        <div className="h-2.5 bg-gray-200 rounded-full  w-32 mb-2"></div>
        </div>
    </div>
   </div>
    
    }