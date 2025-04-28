import { z } from "zod";

export const signUpSchema = z.object(
  {
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
    role: z.enum(["client", "vendor", "admin"]),
    // createdAt: z.date(),
  },
  {
    required_error: "All fields are required",
  }
);

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const vendorProfileSchema = z.object({
  businessName: z.string().min(3),
  phoneNumber: z.string().min(8),
  location: z.string().min(3),
  serviceType: z.string().min(3),
  documentUrl: z.string().optional(),
  status: z.enum(["pending", "approved", "rejected"]).default("pending"),
});
