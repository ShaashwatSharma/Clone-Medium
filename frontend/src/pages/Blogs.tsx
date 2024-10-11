import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
    const {loding,blogs}=useBlogs();

    if(loding){
        return <div>
            <div>
                <Appbar pub="true"/>
            </div>
            <div>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            </div>
        </div>
    }
  return (
    <div>
        <div>
        <Appbar pub='true'/>
        </div>
    <div className="flex justify-center pt-1">
      <div className="">
        {blogs.map(blog=><BlogCard
            id={blog.id}
          authorname={blog.author.name || "Anonamus"}
          title={blog.title}
          content={blog.content}
          publishedDate={"03 May 24"}
        /> )}
        
      </div>
    </div>
    </div>
  );
};
