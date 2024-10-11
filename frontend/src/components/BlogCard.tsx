import { Link } from "react-router-dom";

interface Blogcardprops{
    authorname:string;
    title:string;
    content:string;
    publishedDate:string;
    id:string;
}

export const BlogCard=({
    id,
    authorname,
    title,
    content,
    publishedDate
}:Blogcardprops)=>{
    return <Link to={`/blog/${id}`}>
    <div className="p-4 m-1 ml-2 border-b border-gray-200 w-screen max-w-screen-sm cursor-pointer">
        <div className=" flex " >
            <div className="flex justify-center flex-col">
          <Avatarcomp name={authorname}/> 
            </div>
          <div className="font-light pl-2 text-sm flex justify-center flex-col">
            {authorname}
            </div> 
            <div className=" pl-2 flex justify-center flex-col"><span>&#183;</span></div>
           <div className="pl-2 font-thin text-slate-500 test-sm flex justify-center flex-col">
          {publishedDate}
           </div>
        </div>
        <div className="text-2xl font-semibold pt-2 font-serif ">
            {title}
        </div>
        <div className="text-md font-thin text-slate-700">
            {content.slice(0,100)+ "...."}
        </div>
        <div className="  text-slate-500 font-thin text-xs pt-4">
            {`${Math.ceil(content.length/100)} Min(s) read`}
        </div>
    </div>
    
    </Link>
}


export function Avatarcomp({name}:{name:string}){
    return <>
    <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-200 rounded-full">
        <span className="text-base text-gray-800 ">{name[0]}</span>
    </div>
    </>    
}