import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { createblogInputs,updateblogInputs } from "@shaashwat/medium-common";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_PASSWORD: string;
  },
  Variables:{
    authorId:string;
  }
}>();

// good practive to add pagination

blogRouter.use("/*", async (c, next) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    // const prisma = c.get("prisma");
    const header = c.req.header("authorization") || "";
    const token = header.split(" ")[1];
    const user = await verify(token, c.env.JWT_PASSWORD);
    if (!user) {
      c.status(403);
      return c.json({ error: "Unauthourized" });
    }
    const userId: string = user.id as string;
    c.set("authorId", userId);

    // for some reason this gives a ts error so use the above two line of code 
    // c.set("authorId",user.id);

    await next();
  } catch (e) {
    c.status(404);
    return c.json({ msg: "Error while Authenticating" });
  }
});
blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
try{
  const blogs= await prisma.post.findMany({
    select:{
      content:true,
      title:true,
      id:true,
      author:{
        select:{
          name:true,
        }
      }
    }
  })
  c.status(200)
  return c.json({blogs})
}catch(e){
  c.status(411)
  return c.json({msg:"Error while fetching all blogs "})
}
});

// Add a new blog post ->
blogRouter.post("/",async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
try{
  const body=await c.req.json();
  const {success}=createblogInputs.safeParse(body);
  if(!success){
    c.status(411)
    return c.json({Msg:"Invalid Blog Inputs "})
  }
    const blog=await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:c.get('authorId')
            // authorId:"1"
        }
    })

    c.status(200)
    return c.json({id:blog.id})
}catch(e){
    c.status(411)
    return c.json({msg:"Error while creating blog"})
}
});



// Upate the blog post->
blogRouter.put("/", async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());

try{
  const body=await c.req.json();
  const {success}=updateblogInputs.safeParse(body);
  if(!success){
    c.status(411)
    return c.json({Msg:"Wrong Input values of blogs"})
  }
    await prisma.post.update({
        where:{
            id:body.id
        },
        data:{
            title:body.title,
            content:body.content
        }
    })
    c.status(200)
    return c.json({msg:"Your blog has been upadated"})
}catch(e){
    c.status(411)
    return c.json({msg:"Error whie updating your blog"})
}
});


// get a specific blog based on the blog id (without :)->
blogRouter.get("/:id", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
try{
  const blogid=  c.req.param('id');
    const blog= await prisma.post.findUnique({
        where:{
            id:blogid
        },
        select:{
          id:true,
          title:true,
          content:true,
          author:{
            select:{
              name:true
            }
          }
        }
    })
    c.status(200)
    return c.json({blog})
}catch(e){
    c.status(411)
    return c.json({msg:"Error while fetchng the blog"})
}
});


