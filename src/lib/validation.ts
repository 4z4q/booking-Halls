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
  customer: z.string().min(1, "اسم العميل مطلوب."),
  service: z.string().min(1, "اسم الخدمة مطلوب."),
  eventDate: z.date({
    required_error: "تاريخ المناسبة مطلوب.",
    invalid_type_error: "التاريخ غير صالح.",
  }),
  id: z.string().uuid("معرّف غير صالح."),
  amount: z.number().min(0, "يجب أن يكون المبلغ رقمًا موجبًا."),
  paymentMethod: z.string().min(1, "طريقة الدفع مطلوبة."),
  status: z.enum(["pending", "processing", "confirmed", "cancelled"], {
    required_error: "حالة الدفع مطلوبة.",
  }),
  email: z.string().email("عنوان البريد الإلكتروني غير صالح."),
});

export type FormType = z.infer<typeof formSchema>;

export const serviceSchema = z.object({
  name: z.string().min(5, {
    message: "عنوان الخدمة يجب أن يتكون من 5 أحرف على الأقل.",
  }),
  description: z.string().min(20, {
    message: "الوصف يجب أن يحتوي على 20 حرفًا على الأقل.",
  }),
  category: z.string({
    required_error: "يرجى اختيار التصنيف.",
  }),
  price: z.coerce.number().positive({
    message: "يجب أن يكون السعر رقمًا موجبًا.",
  }),
  pricingType: z.enum(["fixed", "hour", "day"], {
    required_error: "يرجى اختيار نوع التسعير.",
  }),
  city: z.string({
    required_error: "يرجى اختيار المدينة.",
  }),
  address: z.string().min(5, {
    message: "العنوان يجب أن يتكون من 5 أحرف على الأقل.",
  }),
  status: z.enum(["active", "pending", "draft"], {
    required_error: "يرجى اختيار حالة الخدمة.",
  }),
  location: z.string().optional(),
  capacity: z.coerce.number().min(0).optional(),
  amenities: z.array(z.string()).optional(),
  gallery: z.array(z.string()).optional(),
  availability: z.string().optional(),
});

export type ServiceFormValues = z.infer<typeof serviceSchema>;
