"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultValues, FieldValues, useForm } from "react-hook-form";
import { ZodType } from "zod";
import { Trash2, Upload, Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

// تعريف النصوص القابلة للتخصيص
interface ServiceFormTexts {
  formTitle: string;
  submitButton: {
    create: string;
    edit: string;
    submitting: string;
  };
  deleteButton: {
    label: string;
    confirming: string;
  };
  sections: {
    serviceInfo: string;
    pricing: string;
    location: string;
    images: string;
    settings: string;
  };
  fields: {
    title: {
      label: string;
      placeholder: string;
      description?: string;
    };
    description: {
      label: string;
      placeholder: string;
      description: string;
    };
    category: {
      label: string;
      placeholder: string;
    };
    price: {
      label: string;
    };
    pricingType: {
      label: string;
      placeholder: string;
      options: {
        fixed: string;
        hour: string;
        day: string;
      };
    };
    city: {
      label: string;
      placeholder: string;
    };
    address: {
      label: string;
      placeholder: string;
    };
    status: {
      label: string;
      options: {
        active: string;
        pending: string;
        draft: string;
      };
    };
    images: {
      uploadText: string;
      uploadHint: string;
    };
  };
  previewButton: string;
  successMessages: {
    create: string;
    edit: string;
    delete: string;
  };
  errorMessages: {
    create: string;
    edit: string;
    delete: string;
  };
}

const defaultTexts: ServiceFormTexts = {
  formTitle: "نموذج الخدمة",
  submitButton: {
    create: "إنشاء الخدمة",
    edit: "حفظ التغييرات",
    submitting: "جاري المعالجة...",
  },
  deleteButton: {
    label: "حذف الخدمة",
    confirming: "جاري الحذف...",
  },
  sections: {
    serviceInfo: "معلومات الخدمة",
    pricing: "التسعير",
    location: "الموقع",
    images: "الصور",
    settings: "الإعدادات",
  },
  fields: {
    title: {
      label: "عنوان الخدمة",
      placeholder: "أدخل عنوان الخدمة",
      description: "عنوان جذاب يصف الخدمة بشكل مختصر",
    },
    description: {
      label: "الوصف",
      placeholder: "قدّم وصفًا تفصيليًا للخدمة",
      description:
        "قدم شرحًا مفصلًا لما تقدمه، خبراتك، وما يمكن أن يتوقعه العملاء.",
    },
    category: {
      label: "الفئة",
      placeholder: "اختر فئة",
    },
    price: {
      label: "السعر",
    },
    pricingType: {
      label: "نوع التسعير",
      placeholder: "اختر نوع التسعير",
      options: {
        fixed: "سعر ثابت",
        hour: "بالساعة",
        day: "باليوم",
      },
    },
    city: {
      label: "المدينة",
      placeholder: "اختر مدينة",
    },
    address: {
      label: "العنوان",
      placeholder: "أدخل العنوان",
    },
    status: {
      label: "الحالة",
      options: {
        active: "نشطة (مرئية للعملاء)",
        pending: "قيد المراجعة",
        draft: "مسودة (غير مرئية)",
      },
    },
    images: {
      uploadText: "انقر لتحميل صور جديدة",
      uploadHint: "PNG, JPG, GIF بحد أقصى 5MB",
    },
  },
  previewButton: "معاينة الخدمة",
  successMessages: {
    create: "تم إنشاء الخدمة بنجاح",
    edit: "تم تحديث الخدمة بنجاح",
    delete: "تم حذف الخدمة بنجاح",
  },
  errorMessages: {
    create: "حدث خطأ أثناء إنشاء الخدمة",
    edit: "حدث خطأ أثناء تحديث الخدمة",
    delete: "حدث خطأ أثناء حذف الخدمة",
  },
};

interface ServiceFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: Partial<T>;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  type: "CREATE" | "EDIT";
}

export default function ServiceForm<T extends FieldValues>({
  type,
  schema,
  defaultValues,
  onSubmit,
}: ServiceFormProps<T>) {
  const router = useRouter();
  const [images, setImages] = useState<string[]>(defaultValues.images || []);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // دمج النصوص المخصصة مع النصوص الافتراضية
  const texts: ServiceFormTexts = {
    ...defaultTexts,
    ...customTexts,
    fields: {
      ...defaultTexts.fields,
      ...customTexts?.fields,
    },
  };

  const form = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  async function handleSubmit(values: T) {
    setIsSubmitting(true);

    try {
      const result = await onSubmit({ ...values, images });

      if (result.success) {
        toast.success(
          type === "CREATE"
            ? texts.successMessages.create
            : texts.successMessages.edit
        );
        router.push("/services");
      } else {
        toast.error(
          type === "CREATE"
            ? texts.errorMessages.create
            : texts.errorMessages.edit,
          { description: result.error }
        );
      }
    } catch (error) {
      toast.error(
        type === "CREATE"
          ? texts.errorMessages.create
          : texts.errorMessages.edit,
        { description: "حدث خطأ غير متوقع" }
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleDelete() {
    if (!onDelete) return;

    const confirmationMessage =
      type === "CREATE"
        ? "هل أنت متأكد أنك تريد إلغاء إنشاء هذه الخدمة؟"
        : "هل أنت متأكد أنك تريد حذف هذه الخدمة؟ لا يمكن التراجع عن هذا الإجراء.";

    if (!confirm(confirmationMessage)) {
      return;
    }

    setIsDeleting(true);

    try {
      const result = await onDelete();

      if (result.success) {
        toast.success(texts.successMessages.delete);
        router.push("/services");
      } else {
        toast.error(texts.errorMessages.delete, { description: result.error });
      }
    } catch (error) {
      toast.error(texts.errorMessages.delete, {
        description: "حدث خطأ غير متوقع",
      });
    } finally {
      setIsDeleting(false);
    }
  }

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setImages([...images, ...newImages]);
  }

  function removeImage(index: number) {
    setImages(images.filter((_, i) => i !== index));
  }

  function handlePreview() {
    toast("معاينة الخدمة", {
      description: "هذه معاينة للخدمة كما ستظهر للعملاء.",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <h1 className="text-2xl font-bold">{texts.formTitle}</h1>

        {/* قسم معلومات الخدمة */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">
            {texts.sections.serviceInfo}
          </h2>

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>{texts.fields.title.label}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={texts.fields.title.placeholder}
                    {...field}
                  />
                </FormControl>
                {texts.fields.title.description && (
                  <FormDescription>
                    {texts.fields.title.description}
                  </FormDescription>
                )}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>{texts.fields.description.label}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={texts.fields.description.placeholder}
                    className="min-h-32"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {texts.fields.description.description}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{texts.fields.category.label}</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value as string}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue
                        placeholder={texts.fields.category.placeholder}
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </Card>

        {/* قسم التسعير */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">
            {texts.sections.pricing}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{texts.fields.price.label}</FormLabel>
                  <FormControl>
                    <Input type="number" min="0" step="0.01" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pricingType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{texts.fields.pricingType.label}</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue
                          placeholder={texts.fields.pricingType.placeholder}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="fixed">
                        {texts.fields.pricingType.options.fixed}
                      </SelectItem>
                      <SelectItem value="hour">
                        {texts.fields.pricingType.options.hour}
                      </SelectItem>
                      <SelectItem value="day">
                        {texts.fields.pricingType.options.day}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Card>

        {/* قسم الموقع */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">
            {texts.sections.location}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{texts.fields.city.label}</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue
                          placeholder={texts.fields.city.placeholder}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city.value} value={city.value}>
                          {city.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{texts.fields.address.label}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={texts.fields.address.placeholder}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Card>

        {/* قسم الصور */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">
            {texts.sections.images}
          </h2>

          <div className="mb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              {images.map((image, index) => (
                <div key={index} className="relative group">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`صورة الخدمة ${index + 1}`}
                    width={300}
                    height={200}
                    className="rounded-md object-cover w-full h-40"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="حذف الصورة"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <label htmlFor="image-upload" className="cursor-pointer">
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
                  <Upload className="h-8 w-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">
                    {texts.fields.images.uploadText}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {texts.fields.images.uploadHint}
                  </p>
                </div>
                <input
                  id="image-upload"
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>
        </Card>

        {/* قسم الإعدادات */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">
            {texts.sections.settings}
          </h2>

          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{texts.fields.status.label}</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                    dir="rtl"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="active" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {texts.fields.status.options.active}
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="pending" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {texts.fields.status.options.pending}
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="draft" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {texts.fields.status.options.draft}
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Card>

        {/* أزرار الإجراءات */}
        <div className="flex flex-wrap gap-4 justify-between">
          <div className="flex flex-wrap gap-4">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting
                ? texts.submitButton.submitting
                : type === "CREATE"
                ? texts.submitButton.create
                : texts.submitButton.edit}
            </Button>
            <Button type="button" variant="outline" onClick={handlePreview}>
              <Eye className="mr-2 h-4 w-4" />
              {texts.previewButton}
            </Button>
          </div>
          {onDelete && (
            <Button
              type="button"
              variant="destructive"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting
                ? texts.deleteButton.confirming
                : texts.deleteButton.label}
            </Button>
          )}
        </div>
      </form>
   </Form>
  );
}
