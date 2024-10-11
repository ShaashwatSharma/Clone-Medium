import { Blogstype } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatarcomp } from "./BlogCard";

export const Fullblog = ({ blog }: { blog: Blogstype }) => {
  return (
    <div>
      <div>
        <Appbar pub="true" />
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-12 w-full px-10 pt-20 max-w-screen-xl ">
          <div className="col-span-8 ">
            <div className="text-5xl font-extrabold font-serif">{blog.title}</div>
            <div className="text-sm font-thin text-slate-700 pt-4 px-1">
              Posted on 2nd Oct 2024
            </div>
            <div className="text-xl pt-4 text-gray-500 font-mono">{blog.content}</div>
          </div>
          <div className="col-span-4  ">
            <div className=" text-gray-400">Author</div>
            <div className="flex ">
                <div className="flex justify-center flex-col pr-3">
              <Avatarcomp name={blog.author.name || "A"} />
                </div>
              <div>
                <div className="text-xl font-bold pt-2 font-serif">
                  {blog.author.name || "Ananamos"}
                </div>
                <div className="text-sm text-slate-500 pt-1">
                  Random catch phrase about the author's ability to catch the
                  attention of the reader
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
