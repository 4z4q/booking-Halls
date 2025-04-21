import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Camera, Edit2, Shield } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AccountDetailsCard } from "@/components/account-components/account-details-card";
import { PersonalInfoCard } from "@/components/account-components/personal-info-card";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import { getUserByEmail } from "@/lib/actions/utils";

export const metadata: Metadata = {
  title: "معلومات الحساب",
  description: "عرض وإدارة معلومات حسابك الشخصي",
};

export default async function AccountPage() {
  const session = await auth();

  // Validate session
  if (!session) return redirect("/sign-in");

  // Extract user details from session
  const email = session?.user?.email ?? "";

  // Fetch user details
  const userDetails = await getUserByEmail(email);

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      {/* العنوان الرئيسي للصفحة */}
      <div className="flex items-center gap-4 mb-8">
        {/* يمكن إضافة قائمة جانبية هنا */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">معلومات الحساب</h1>
          <p className="text-muted-foreground">
            قم بعرض وإدارة معلوماتك الشخصية وإعدادات الحساب
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* بطاقة ملخص الملف الشخصي */}
        <Card className="md:col-span-3">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              {/* صورة الملف الشخصي */}
              <div className="relative">
                <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-blue-100 bg-blue-50">
                  <Image
                    src="/Untitled-1.jpg"
                    alt="صورة الملف الشخصي"
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <Button
                  size="icon"
                  className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Camera className="h-4 w-4" />
                  <span className="sr-only">تغيير صورة الملف الشخصي</span>
                </Button>
              </div>

              {/* معلومات المستخدم */}
              <div className="flex flex-col items-center md:items-start">
                <h2 className="text-2xl font-bold">محمد الجرادي</h2>
                {/* <p className="text-muted-foreground">+967 777 123 456</p> */}
                <div className="flex items-center gap-2 mt-2">
                  <Badge className="bg-green-500 hover:bg-green-600 text-white">
                    الحساب نشط
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-blue-200 text-blue-600"
                  >
                    عضو مميز
                  </Badge>
                </div>

                {/* أزرار الإجراءات */}
                <div className="flex gap-3 mt-4">
                  <Button variant="outline" size="sm">
                    <Edit2 className="mr-2 h-4 w-4" />
                    تعديل الملف
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-blue-600 border-blue-200"
                  >
                    <Shield className="mr-2 h-4 w-4" />
                    تحقق من الهوية
                  </Button>
                </div>
              </div>

              {/* زر الرجوع إلى الحجوزات */}
              <div className="flex-1 flex justify-end">
                <Link href="/bookings">
                  <Button variant="ghost" className="gap-2">
                    العودة إلى الحجوزات
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* بيانات المستخدم الإضافية */}
        <div className="md:col-span-2 space-y-6">
          <PersonalInfoCard data={userDetails} />
          <AccountDetailsCard data={userDetails} />
        </div>

        {/* بطاقات جانبية - الإحصائيات والروابط السريعة */}
        <div className="space-y-6">
          {/* <AccountSecurityCard /> */}

          {/* إحصائيات الحساب */}
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>إحصائيات الحساب</CardTitle>
              <CardDescription>نشاط الحساب والاستخدام</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">إجمالي الحجوزات</span>
                <span className="font-medium">24</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-sm">الفعاليات المنجزة</span>
                <span className="font-medium">18</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-sm">الفعاليات القادمة</span>
                <span className="font-medium">3</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-sm">الحجوزات الملغاة</span>
                <span className="font-medium">3</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-sm">عضو منذ</span>
                <span className="font-medium">يناير 2023</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
