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
// import { cn } from "@/lib/utils";
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
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { FIELD_NAMES, FIELD_TYPES } from "@/constants";
import { useState } from "react";
import { Loader2 } from "lucide-react";

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
            <div className="flex flex-col items-center gap-2 text-center mb-8">
              <h1 className="text-2xl font-bold">
                {isSignIn ? "مرحبًا بعودتك!" : "إنشاء حساب جديد"}
              </h1>
              <p className="text-balance text-sm text-muted-foreground">
                {isSignIn
                  ? "سجّل دخولك لمتابعة الحجز"
                  : "املأ المعلومات التالية لإنشاء حسابك والبدء بالحجز."}
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-6 w-full"
              >
                {Object.keys(defaultValues)
                  .filter((field) => field !== "universityId")
                  .map((field) => (
                    <FormField
                      key={field.toString()}
                      control={form.control}
                      name={field as Path<T>}
                      render={({ field }) => (
                        <FormItem className="grid gap-2">
                          <FormLabel className="capitalize ">
                            {FIELD_NAMES[
                              field.name as keyof typeof FIELD_NAMES
                            ] || field.name}
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="text-balance text-sm text-muted-foreground placeholder:text-gray-400"
                              type={
                                FIELD_TYPES[
                                  field.name as keyof typeof FIELD_TYPES
                                ]
                              }
                              placeholder={
                                field.name === "password"
                                  ? "********"
                                  : `${
                                      FIELD_NAMES[
                                        field.name as keyof typeof FIELD_NAMES
                                      ]
                                    }`
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}

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

            {isSignIn && (
              <>
                <div className="relative text-center my-6 text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                  <span className="relative z-10 bg-background px-2 text-muted-foreground">
                    او سجل دخولك باستخدام
                  </span>
                </div>
                <Button variant="outline" className="w-full">
                  تسجيل دخول باستخدام
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                </Button>
              </>
            )}

            <p className="text-sm text-center text-gray-400 mt-6">
              {isSignIn ? "ليس لديك حساب؟ " : "لديك حساب بالفعل؟ "}
              <Link
                href={isSignIn ? "/sign-up" : "/sign-in"}
                className="underline underline-offset-4 hover:text-primary"
              >
                {isSignIn ? "انشاء حساب" : "تسجيل الدخول"}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
