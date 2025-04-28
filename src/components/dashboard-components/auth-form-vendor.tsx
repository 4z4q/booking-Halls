"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { ZodType } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { FIELD_NAMES_VENDOR, FIELD_TYPES_VENDOR } from "@/constants";

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  type: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues>({
  type,
  schema,
  defaultValues,
  onSubmit,
}: Props<T>) => {
  const isSignIn = type === "SIGN_IN";
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    setIsLoading(true);
    const result = await onSubmit(data);
    try {
      if (result?.success) {
        toast.success("تم بنجاح", {
          description: isSignIn ? "مرحباً بعودتك!" : "تم إنشاء الحساب بنجاح",
        });
        router.push("/");
      } else {
        toast.error("حدث خطأ", {
          description: result?.error ?? "يرجى المحاولة لاحقاً",
        });
      }
      return result;
    } catch {
      toast.error("حدث خطاء", {
        description: "يرجى المحاولة لاحقاً",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <div className="w-full max-w-md rounded-[40px] p-12">
          <div className="max-w-sm mx-auto">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-6 w-full"
              >
                {Object.keys(defaultValues)
                  .filter((field) => field !== "universityId")
                  .map((field) => {
                    return (
                      <FormField
                        key={field.toString()}
                        control={form.control}
                        name={field as Path<T>}
                        render={({ field }) => (
                          <FormItem className="grid gap-2">
                            <FormLabel className="capitalize ">
                              {FIELD_NAMES_VENDOR[
                                field.name as keyof typeof FIELD_NAMES_VENDOR
                              ] || field.name}
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="text-balance text-sm text-muted-foreground placeholder:text-gray-400"
                                type={
                                  FIELD_TYPES_VENDOR[
                                    field.name as keyof typeof FIELD_TYPES_VENDOR
                                  ]
                                }
                                placeholder={
                                  field.name === "password"
                                    ? "********"
                                    : `${
                                        FIELD_NAMES_VENDOR[
                                          field.name as keyof typeof FIELD_NAMES_VENDOR
                                        ]
                                      }`
                                }
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    );
                  })}

                <Button type="submit" className="w-full  " disabled={isLoading}>
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <span>جاري التحميل</span>
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </div>
                  ) : isSignIn ? (
                    "دخول"
                  ) : (
                    "إنشاء الحساب"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
