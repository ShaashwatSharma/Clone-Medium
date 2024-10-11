import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signinInput, SigninInput,signupInput,SignupInput } from "@shaashwat/medium-common";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_PASSWORD: string;
      };
}>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    // const prisma = c.get("prisma");
    const body = await c.req.json();
    const {success}= signupInput.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({Msg:"Inputs are not correct "})
    }
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });
    if (!user) {
      c.status(404);
      return c.json({ msg: "User not created" });
    }
    const token = await sign({ id: user.id }, c.env.JWT_PASSWORD);
    c.status(200);
    return c.json({ jwt: token });
  } catch (e) {
    c.status(404);
    return c.json({ msg: "Error while signup" });
  }
});


userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    // const prisma = c.get("prisma");
    const body = await c.req.json();
    const {success}=signinInput.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({Msg:"Inputs are not correct "})
    }
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });
    if (!user) {
      c.status(404);
      return c.json({ msg: "No user found" });
    }
    const token = await sign({ id: user.id }, c.env.JWT_PASSWORD);
    c.status(200);
    return c.json({ jwt: token });
  } catch (e) {
    c.status(404);
    return c.json({ msg: "Error while signing up" });
  }
});
