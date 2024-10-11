import z from "zod";

// This is what backend will need 
export const signupInput= z.object({
    email:z.string().email(),
    password:z.string().min(8),
    name:z.string().optional()
})

export const signinInput=z.object({
    email:z.string().email(),
    password:z.string().min(8)
})

export const createblogInputs=z.object({
    title:z.string(),
    content:z.string()
})

export const updateblogInputs = z.object({
    title:z.string(),
    content:z.string(),
    id:z.string()
})

// This is what frontend will need 
export type SignupInput=z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type CreateblogInputs=z.infer<typeof createblogInputs>
export type UpdateblogInputs=z.infer<typeof updateblogInputs>