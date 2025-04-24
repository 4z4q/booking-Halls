"use client";

import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FailedPage() {
  return (
    <div className="container max-w-md mx-auto py-20 px-4" dir="rtl">
      <Card className="text-center">
        <CardHeader>
          <motion.div
            className="flex justify-center mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
              <AlertCircle className="h-8 w-8 text-red-600 animate-pulse" />
            </div>
          </motion.div>
          <CardTitle className="text-2xl">فشل في الدفع</CardTitle>
          <CardDescription>حدثت مشكلة أثناء معالجة عملية الدفع</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-right">
          <p>
            لم نتمكن من إتمام عملية الدفع. يرجى التحقق من معلومات الدفع
            والمحاولة مرة أخرى.
          </p>
          <div className="border rounded-md p-4 bg-muted/50 text-sm text-muted-foreground">
            <p>أسباب شائعة لفشل الدفع:</p>
            <ul className="list-disc list-inside mt-2">
              <li>عدم توفر الرصيد الكافي</li>
              <li>معلومات البطاقة غير صحيحة</li>
              <li>انتهاء صلاحية البطاقة</li>
              <li>رفض العملية من البنك</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button asChild className="w-full">
            <Link href="/checkout">المحاولة مرة أخرى</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/contact">الاتصال بالدعم</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="w-full text-sm text-gray-500"
          >
            <Link href="/">العودة إلى الصفحة الرئيسية</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
