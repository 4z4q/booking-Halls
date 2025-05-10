"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultValues, FieldValues, Path, useForm } from "react-hook-form";
import { ZodType } from "zod";
import { ArrowLeftIcon, Trash2, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
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
import { toast } from "sonner";
import { FIELD_GROUPS, getFieldMeta } from "@/constants/serviceFields";
import { serviceSchema } from "@/lib/validation";

interface ServiceFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  onDelete?: () => Promise<{ success: boolean; error?: string }>; // تمت إضافة onDelete كاختياري
  type: "CREATE" | "EDIT";
}

export default function ServiceForm<T extends FieldValues>({
  type,
  schema,
  defaultValues,
  onSubmit,
  onDelete,
}: ServiceFormProps<T>) {
  const isEdit = type === "EDIT";
  const router = useRouter();
  const [images, setImages] = useState<string[]>(defaultValues.images || []);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

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
        toast.success("تم حذف الخدمة بنجاح");
        router.push("/services");
      } else {
        toast.error("حدث خطأ أثناء إنشاء الخدمة", {
          description: result.error,
        });
      }
    } catch (error) {
      toast.error("حدث خطأ أثناء إنشاء الخدمة", {
        description: "حدث خطأ غير متوقع",
      });
    } finally {
      setIsDeleting(false);
    }
  }

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    const MAX_SIZE_MB = 3;
    if (!files || files.length === 0) return;

    const isValid = Array.from(files).every(
      (file) => file.size < MAX_SIZE_MB * 1024 * 1024
    );

    if (!isValid) {
      toast.error("يجب ألا يتجاوز حجم الصور 5MB");
      return;
    }

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
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-8 container"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold ">
            {isEdit ? "تعديل الخدمة" : "إنشاء الخدمة"}
          </h1>
          <Button
            variant="ghost"
            className="space-x-1 text-gray-600 transition-all duration-300 font-bold"
            onClick={() => router.back()}
          >
            الرجوع <ArrowLeftIcon className="w-4 h-4" />
          </Button>
        </div>

        {Object.entries(FIELD_GROUPS).map(([groupKey, group]) => (
          <Card key={groupKey} className="p-6 space-y-4">
            <h2 className="text-xl font-semibold mb-4">{group.title}</h2>

            {group.fields.map((fieldName) => (
              <FormField
                key={fieldName}
                control={form.control}
                name={fieldName as Path<T>}
                render={({ field }) => {
                  const meta = getFieldMeta(
                    field.name as keyof typeof serviceSchema.shape
                  );

                  if (meta.type === "gallery") {
                    return (
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
                          <label
                            htmlFor="image-upload"
                            className="cursor-pointer"
                          >
                            <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
                              <Upload className="h-8 w-8 text-gray-400 mb-2" />
                              <p className="text-sm text-gray-500">
                                انقر لتحميل صور جديدة
                              </p>
                              <p className="text-xs text-gray-400 mt-1">
                                PNG, JPG, GIF بحد أقصى 5MB
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
                    );
                  }

                  return (
                    <FormItem className="mb-4">
                      <FormLabel>{meta.label}</FormLabel>
                      <FormControl>
                        {meta.type === "textarea" ? (
                          <Textarea {...field} placeholder={meta.placeholder} />
                        ) : meta.type === "select" ? (
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder={meta.placeholder} />
                            </SelectTrigger>
                            <SelectContent>
                              {meta.options.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        ) : (
                          <Input
                            {...field}
                            placeholder={meta.placeholder}
                            type={meta.type}
                          />
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            ))}
          </Card>
        ))}

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Button type="button" variant="outline" onClick={handlePreview}>
              معاينة
            </Button>
            <Button type="submit">{isEdit ? "تحديث" : "حفظ"}</Button>
          </div>

          <Button
            type="button"
            variant="destructive"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? "جاري الحذف..." : "حذف الخدمة"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
