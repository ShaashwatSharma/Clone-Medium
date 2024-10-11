import { Hono } from "hono";
import { Prisma, PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, verify, sign } from "hono/jwt";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";
import { cors } from "hono/cors";
// const token=Hono.jwt.sign(body.email,JWT_PASSWORD)
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_PASSWORD: string;
  };
  // Variables: {
    //   prisma: any;
    // };
  }>();
  app.use("/*",cors());

//For future use cases->
    // app.use("*", async (c, next) => {
    //   const prisma = new PrismaClient({
    //     datasourceUrl: c.env.DATABASE_URL,
    //   }).$extends(withAccelerate());

    //   c.set("prisma", prisma);
    //   next();
    // });
app.route('api/v1/user',userRouter )
app.route('api/v1/blog',blogRouter)
 

export default app;
