import { z } from "zod";

export const signUpSchema = z.object(
  {
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
    role: z.enum(["client", "vendor", "admin"]),
  },
  {
    required_error: "All fields are required",
  }
);

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

