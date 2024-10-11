import { Link } from "react-router-dom";
import { Avatarcomp } from "./BlogCard";

export const Appbar = ({pub}:{pub:string}) => {
  return (
    <div className="border-b flex justify-between px-10 py-4 ">
      <Link to={"/blogs"}>
        <div className="flex justify-center flex-col cursor-pointer text-stone-900 font-mono text-lg font-semibold">
          Medium
        </div>
      </Link>
      <div className="flex ">
        {pub==='true'?<div className="flex justify-center flex-col ">
          <Link to={"/publish"}>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-blue-400 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-light rounded-lg text-sm px-3 py-1.5 text-center mr-4 ">
            Publish New Blog
          </button>
          </Link>
        </div>:<div/>}
        <div className="flex justify-center flex-col ">
          <Avatarcomp name={"User"} />
        </div>
      </div>
    </div>
  );
};
