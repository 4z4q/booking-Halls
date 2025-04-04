"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { CheckCircle2, Globe } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUpPage() {
  const isSubmitting = false;
  const isSuccess = false;
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md font-arabic"
      dir="rtl"
    >
      <Card className="border-slate-200 shadow-lg dark:border-slate-800 w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex flex-col items-center justify-center mb-2">
            {/* <div className="mb-4 w-full max-w-[220px]">
              <h1 className="text-3xl font-bold text-center">Sign Up</h1>
            </div> */}
            <div className="rounded-full bg-primary/10 p-3">
              <Globe className="h-6 w-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            انشاء حساب
          </CardTitle>
          <CardDescription className="text-center">
            أنظم الئ موقع عرسك علينا
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <div className="grid gap-4 ">
              <div className="space-y-2">
                <Label htmlFor="networkCode">الاسم الاول</Label>
                <Input
                  id="networkCode"
                  placeholder="أختار الاسم الاول"
                  className={cn(
                    "transition-all duration-200"
                    // "border-red-500 focus-visible:ring-red-500"
                  )}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="networkCode">الاسم الاخير</Label>
                <Input
                  id="networkCode"
                  placeholder="أختار الاسم الاخير"
                  className={cn(
                    "transition-all duration-200"
                    // "border-red-500 focus-visible:ring-red-500"
                  )}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="networkCode"> رقم الجوال</Label>
                <Input
                  id="networkCode"
                  placeholder="ادخل رقم الجوال"
                  className={cn(
                    "transition-all duration-200"
                    // "border-red-500 focus-visible:ring-red-500"
                  )}
                />
              </div>

              <div className="space-y-2 ">
                <Label htmlFor="networkSpeed"> كيف تود أن تكون</Label>
                <Select>
                  <SelectTrigger
                    className="w-full justify-end"
                    id="networkSpeed"
                    // className={cn(
                    //   error && !networkSpeed
                    //     ? "border-red-500 focus-visible:ring-red-500"
                    //     : ""
                    // )}
                  >
                    <SelectValue placeholder="أختار نوع الخدمة الذي تود" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">مستخدم</SelectItem>
                    <SelectItem value="high-speed">بائع</SelectItem>
                  </SelectContent>
                </Select>

                {/* {error && <p className="text-sm text-red-500">{error}</p>} */}
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full"
                // disabled={isSubmitting || isSuccess}
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/");
                }}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    جاري الاتصال...
                  </span>
                ) : isSuccess ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    تم الاتصال!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">أنشاء حساب</span>
                )}
              </Button>

              <div className="relative my-2">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-muted-foreground">
                    او تسجيل الدخول مع
                  </span>
                </div>
              </div>

              {/* Social */}
              <div className="grid grid-cols-3 gap-3">
                <Button
                  variant="outline"
                  className="transition-all hover:bg-gray-50 hover:border-gray-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Button>

                <Button
                  variant="outline"
                  className="transition-all hover:bg-gray-50 hover:border-gray-300"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Google</title>
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                  </svg>
                </Button>

                <Button
                  variant="outline"
                  className="transition-all hover:bg-gray-50 hover:border-gray-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Button>
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex justify-center flex-col border-t px-6 py-4 gap-4">
          <p className="text-center text-sm text-muted-foreground">
            لديك حساب؟
            <Link
              href="/auth/sign-in"
              className="font-medium text-purple-600 hover:text-purple-800 transition-colors"
            >
              تسجيل الدخول
            </Link>
          </p>
          <p className="text-xs text-muted-foreground text-center">
            مشاكل في الاتصال؟ اتصل بدعم الموقع على support@network.com
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
