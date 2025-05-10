import { serviceSchema } from "@/lib/validation";

/**
 * Constant options used for select-type fields in service forms.
 */
export const FIELD_OPTIONS = {
  category: [
    { value: "wedding-hall", label: "قاعة أفراح" },
    { value: "photography", label: "تصوير" },
    { value: "decoration", label: "ديكور" },
    { value: "catering", label: "تجهيزات طعام" },
  ],
  pricingType: [
    { value: "fixed", label: "سعر ثابت" },
    { value: "hour", label: "حسب الساعة" },
    { value: "day", label: "حسب اليوم" },
  ],
  status: [
    { value: "active", label: "نشط" },
    { value: "pending", label: "قيد المراجعة" },
    { value: "draft", label: "غير نشط" },
  ],
} as const;

/**
 * Field groups used for organizing form sections in UI.
 * Each group has a title and an array of associated field keys.
 */
export const FIELD_GROUPS = {
  serviceInfo: {
    title: "معلومات الخدمة",
    fields: ["name", "description", "category"],
  },
  pricing: {
    title: "السعر",
    fields: ["price", "pricingType"],
  },
  location: {
    title: "موقع الخدمة",
    fields: ["city", "address", "location"],
  },
  statusInfo: {
    title: "الحالة والتصنيف",
    fields: ["status", "capacity"],
  },
  media: {
    title: "الوسائط",
    fields: ["gallery"],
  },
  other: {
    title: "معلومات إضافية",
    fields: ["availability", "amenities", "reviews"],
  },
} as const;

/**
 * Mapping of field keys to input types (used to render dynamic form components).
 */
export const FIELD_TYPES: Record<keyof typeof serviceSchema.shape, string> = {
  name: "text",
  description: "textarea",
  category: "select",
  price: "number",
  pricingType: "select",
  city: "text",
  address: "text",
  status: "select",
  location: "text",
  capacity: "number",
  amenities: "tags",
  gallery: "gallery",
  availability: "datetime",
};

/**
 * Mapping of field keys to human-readable Arabic labels.
 */
export const FIELD_LABELS: Record<keyof typeof serviceSchema.shape, string> = {
  name: "اسم الخدمة",
  description: "تفاصيل الخدمة",
  category: "تصنيف الخدمة",
  price: "السعر الأساسي",
  pricingType: "نوع التسعير",
  city: "المدينة",
  address: "العنوان التفصيلي",
  status: "حالة الخدمة",
  location: "الموقع الجغرافي",
  capacity: "السعة الاستيعابية",
  amenities: "المرافق والخدمات",
  gallery: "معرض الوسائط",
  availability: "أوقات التوفر",
};

/**
 * All field keys derived from the service schema for iteration or validation.
 */
export const FIELD_KEYS = Object.keys(
  serviceSchema.shape
) as (keyof typeof serviceSchema.shape)[];

/**
 * Utility function to get metadata (label, type, options, placeholder)
 * for a given form field key.
 *
 * @param key - The field key from the service schema
 * @returns Metadata object for building dynamic form fields
 */
export const getFieldMeta = (key: keyof typeof serviceSchema.shape) => ({
  label: FIELD_LABELS[key],
  type: FIELD_TYPES[key],
  options: FIELD_OPTIONS[key] ?? [],
  placeholder: FIELD_LABELS[key],
});
