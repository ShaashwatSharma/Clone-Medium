import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { Fullblog } from "../components/FullBlog";
import { FullBlogSkeleton } from "../components/FullBlogSkelton";
import { Appbar } from "../components/Appbar";


export const Blog=()=>{
    const {id}=useParams();
    const {blog,loding }=useBlog({
        id:id||""
    });

    if(loding ||!blog ){
        return <div>
                <Appbar pub="true"/>
            <div>
                <FullBlogSkeleton/>
            </div>
        </div>
    }

    return <div>
            <Fullblog blog={blog} />
    </div>
}