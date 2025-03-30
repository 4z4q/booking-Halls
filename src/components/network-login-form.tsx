"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Wifi,
  CheckCircle2,
  Globe,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import NetworkImage from "./network-image";

export default function NetworkLoginForm() {
  const router = useRouter();
  const [networkCode, setNetworkCode] = useState("");
  const [networkSpeed, setNetworkSpeed] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate network code and speed
    if (!networkCode.trim()) {
      setError("الرجاء إدخال رمز الشبكة");
      return;
    }

    if (!networkSpeed) {
      setError("الرجاء اختيار سرعة الشبكة");
      return;
    }

    // Simulate form submission
    setIsSubmitting(true);

    try {
      // Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);

      // Navigate to dashboard after successful login
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } catch {
      setError("فشل الاتصال. يرجى التحقق من رمز الشبكة والمحاولة مرة أخرى.");
      setIsSubmitting(false);
    }
  };

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
            <div className="mb-4 w-full max-w-[220px]">
              {/* <NetworkImage /> */}
              <h1 className="text-center font-semibold text-4xl mb-4">
                شبكة الرعد{" "}
              </h1>
            </div>
            <div className="rounded-full bg-primary/10 p-3">
              <Globe className="size-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            تسجيل الدخول للشبكة
          </CardTitle>
          <CardDescription className="text-center">
            أدخل رمز الشبكة واختر سرعة الاتصال
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="networkCode">رمز الشبكة</Label>
                <Input
                  id="networkCode"
                  placeholder="أدخل رمز الشبكة"
                  value={networkCode}
                  onChange={(e) => setNetworkCode(e.target.value)}
                  className={cn(
                    "transition-all duration-200",
                    error ? "border-red-500 focus-visible:ring-red-500" : ""
                  )}
                  disabled={isSubmitting || isSuccess}
                />
              </div>

              <div className="space-y-2 ">
                <Label htmlFor="networkSpeed">سرعة الاتصال</Label>
                <Select
                  value={networkSpeed}
                  onValueChange={setNetworkSpeed}
                  disabled={isSubmitting || isSuccess}
                >
                  <SelectTrigger
                    id="networkSpeed"
                    className={cn(
                      error && !networkSpeed
                        ? "border-red-500 focus-visible:ring-red-500"
                        : "",
                      "w-full "
                    )}
                    dir="rtl"
                  >
                    <SelectValue placeholder="اختر سرعة الاتصال" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">
                      قياسي (10 ميجابت/ثانية)
                    </SelectItem>
                    <SelectItem value="high-speed">
                      عالي السرعة (100 ميجابت/ثانية)
                    </SelectItem>
                    <SelectItem value="ultra-fast">
                      فائق السرعة (1 جيجابت/ثانية)
                    </SelectItem>
                    <SelectItem value="enterprise">
                      مؤسسات (10 جيجابت/ثانية)
                    </SelectItem>
                    <SelectItem value="custom">تكوين مخصص</SelectItem>
                  </SelectContent>
                </Select>

                {error && <p className="text-sm text-red-500">{error}</p>}
              </div>

              <div className="flex justify-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 hover:text-primary"
                  type="button"
                  onClick={() => window.open("https://facebook.com", "_blank")}
                >
                  <Facebook className="size-5" />
                  <span className="sr-only">فيسبوك</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 hover:text-primary"
                  type="button"
                  onClick={() => window.open("https://twitter.com", "_blank")}
                >
                  <Twitter className="size-5" />
                  <span className="sr-only">تويتر</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 hover:text-primary"
                  type="button"
                  onClick={() => window.open("https://instagram.com", "_blank")}
                >
                  <Instagram className="size-5" />
                  <span className="sr-only">انستغرام</span>
                </Button>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting || isSuccess}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    جاري الاتصال...
                  </span>
                ) : isSuccess ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="size-4" />
                    تم الاتصال!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Wifi className="size-4" />
                    اتصال
                  </span>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center border-t px-6 py-4">
          <p className="text-xs text-muted-foreground">
            مشاكل في الاتصال؟ اتصل بدعم الشبكة على support@network.com
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
