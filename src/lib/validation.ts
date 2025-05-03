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

export const paymentSchema = z.object({
  customer: z.string(),
  service: z.string(),
  eventDate: z.date(),
  id: z.string(),
  amount: z.number(),
  paymentMethod: z.string(),
  status: z.enum(["pending", "processing", "confirmed", "cancelled"]),
  email: z.string().email(),
});

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = z.infer<typeof paymentSchema>;

export const formSchema = z.object({
  customer: z.string().min(1, "Customer name is required."),
  service: z.string().min(1, "Service is required."),
  eventDate: z.date({
    required_error: "Event date is required.",
    invalid_type_error: "Invalid date.",
  }),
  id: z.string().uuid("Invalid ID format."),
  amount: z.number().min(0, "Amount must be a positive number."),
  paymentMethod: z.string().min(1, "Payment method is required."),
  status: z.enum(["pending", "processing", "confirmed", "cancelled"], {
    required_error: "Status is required.",
  }),
  email: z.string().email("Invalid email address."),
});

export type FormType = z.infer<typeof formSchema>;