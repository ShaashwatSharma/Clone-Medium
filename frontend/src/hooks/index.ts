import axios from "axios";
import { useEffect, useState } from "react"
import { DATABASE_URL } from "../config";
export interface Blogstype{
    content:string,
    title:string,
    id:string,
    author:{
        name:string
    }
}
export const useBlog=({ id }:{ id : string })=>{
    const[loding,setloding]=useState(true);
    const [blog,setblog]=useState<Blogstype>();

    useEffect(() => {
        axios.get(`${DATABASE_URL}/api/v1/blog/${id}`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
            .then(response=>{
                setblog(response.data.blog);
                setloding(false);
            })
    }, [id])
    
    return {
        loding,blog
    }
}


export const useBlogs=()=>{
    const[loding,setloding]=useState(true);
    const [blogs,setblogs]=useState<Blogstype[]>([]);

    useEffect(() => {
        axios.get(`${DATABASE_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
            .then(response=>{
                setblogs(response.data.blogs);
                setloding(false);
            })
    }, [])
    
    return {
        loding,blogs
    }

}