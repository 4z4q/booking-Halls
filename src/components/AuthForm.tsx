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
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { FIELD_NAMES, FIELD_TYPES } from "@/constants";

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

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    const result = await onSubmit(data);
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
  };

  return (
    <div className="flex min-h-screen w-full">
      {/* Left Section */}
      <div className="relative hidden  p-8 lg:block w-full ">
        <div className="h-full w-full overflow-hidden rounded-[40px] bg-gradient-to-b from-purple-400 via-purple-600 to-black">
          <div className="flex flex-col items-center justify-center h-full px-8 text-center text-white">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold">حجوزاتك</h1>
            </div>
            <h2 className="mb-6 text-4xl font-bold">
              {isSignIn ? "مرحبًا بعودتك!" : "ابدأ رحلتك معنا"}
            </h2>
            <p className="mb-12 text-lg">
              {isSignIn
                ? "سجّل دخولك لمتابعة الحجز"
                : "اتبع الخطوات البسيطة لإنشاء حسابك وبدء الحجز"}
            </p>

            {!isSignIn && (
              <div className="w-full max-w-sm space-y-4 text-start">
                <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-8 h-8 text-black bg-white rounded-full">
                      ١
                    </span>
                    <span className="text-lg">أنشئ حسابك</span>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-8 h-8 text-white rounded-full bg-white/20">
                      ٢
                    </span>
                    <span className="text-lg">اختر نوع المناسبة</span>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-8 h-8 text-white rounded-full bg-white/20">
                      ٣
                    </span>
                    <span className="text-lg">ابدأ الحجز</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center w-full p-6 bg-black lg:w-1/2">
        <div className="w-full max-w-md rounded-[40px] p-12">
          <div className="max-w-sm mx-auto">
            <h2 className="mb-2 text-3xl font-bold text-white">
              {isSignIn ? "تسجيل الدخول" : "إنشاء حساب جديد"}
            </h2>
            <p className="mb-8 text-gray-400">
              {isSignIn
                ? "ادخل بياناتك لتسجيل الدخول."
                : "املأ المعلومات التالية لإنشاء حسابك والبدء بالحجز."}
            </p>

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
                        <FormItem>
                          <FormLabel className="capitalize text-white">
                            {FIELD_NAMES[
                              field.name as keyof typeof FIELD_NAMES
                            ] || field.name}
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className=" text-white bg-gray-900 border-gray-800 placeholder:text-gray-400"
                              type={
                                FIELD_TYPES[
                                  field.name as keyof typeof FIELD_TYPES
                                ]
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}

                <Button
                  type="submit"
                  className="w-full h-12 text-black bg-white hover:bg-gray-100"
                >
                  {isSignIn ? "دخول" : "إنشاء الحساب"}
                </Button>
              </form>
            </Form>

            <p className="text-sm text-center text-gray-400 mt-4">
              {isSignIn ? "ليس لديك حساب؟ " : "لديك حساب بالفعل؟ "}
              <Link
                href={isSignIn ? "/sign-up" : "/sign-in"}
                className="text-white hover:underline"
              >
                {isSignIn ? "سجّل الآن" : "تسجيل الدخول"}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
