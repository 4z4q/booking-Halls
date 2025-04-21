"use client";

import type React from "react";

import { useState } from "react";
import { Copy, CreditCard, Edit2, Globe, Hash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function AccountDetailsCard({ data }: { data: UserInfo }) {
  const [isEditing, setIsEditing] = useState(false);

  // Sample account data
  const [accountData, setAccountData] = useState({
    accountNumber: "1234 5678 9012 3456",
    accountType: "Business",
    currency: "YER",
    language: "Arabic",
    preferredPayment: "Bank Transfer",
  });

  // Form state for editing
  const [formData, setFormData] = useState({ ...accountData });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(accountData.accountNumber.replace(/\s/g, ""));
    toast("تم النسخ", {
      description: "تم نسخ رقم الحساب إلى الحافظة.",
    });
  };

  const handleSave = () => {
    setAccountData({ ...formData });
    setIsEditing(false);
    toast("تم تحديث الحساب", {
      description: "تم تحديث معلومات حسابك بنجاح.",
    });
  };

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>تفاصيل الحساب</CardTitle>
            <CardDescription>معلومات حسابك وتفضيلاتك الشخصية</CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditing(true)}
          >
            <Edit2 className="mr-2 h-4 w-4" />
            تعديل
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* رقم الحساب */}
          <div className="flex items-center gap-3">
            <Hash className="h-5 w-5 text-muted-foreground" />
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">رقم الحساب</p>
              <p className="font-medium w-fit " dir="ltr">
                {accountData.accountNumber}
              </p>
            </div>
            <Button variant="ghost" size="icon" onClick={handleCopy}>
              <Copy className="h-4 w-4" />
              <span className="sr-only">نسخ رقم الحساب</span>
            </Button>
          </div>
          <Separator />

          {/* نوع الحساب */}
          <div className="flex items-center gap-3">
            <CreditCard className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">نوع الحساب</p>
              <p className="font-medium">{accountData.accountType}</p>
            </div>
          </div>
          <Separator />

          {/* العملة */}
          <div className="flex items-center gap-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-muted-foreground"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 16C14.5 17.5 13.2091 18.5 12 18.5C10.7909 18.5 9.5 17.5 9 16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 10C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10Z"
                fill="currentColor"
              />
              <path
                d="M15 10C15.5523 10 16 9.55228 16 9C16 8.44772 15.5523 8 15 8C14.4477 8 14 8.44772 14 9C14 9.55228 14.4477 10 15 10Z"
                fill="currentColor"
              />
            </svg>{" "}
            <div>
              <p className="text-sm text-muted-foreground">العملة</p>
              <p className="font-medium">{accountData.currency}</p>
            </div>
          </div>
          <Separator />

          {/* اللغة */}
          <div className="flex items-center gap-3">
            <Globe className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">اللغة</p>
              <p className="font-medium">{accountData.language}</p>
            </div>
          </div>
          <Separator />

          {/* طريقة الدفع المفضلة */}
          <div className="flex items-center gap-3">
            <CreditCard className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">
                طريقة الدفع المفضلة
              </p>
              <p className="font-medium">{accountData.preferredPayment}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>تعديل بيانات الحساب</DialogTitle>
            <DialogDescription>
              يمكنك تعديل تفضيلات حسابك من هنا.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            {/* رقم الحساب - غير قابل للتعديل */}
            <div className="grid gap-2">
              <Label htmlFor="accountNumber">رقم الحساب</Label>
              <Input
                id="accountNumber"
                name="accountNumber"
                value={formData.accountNumber}
                disabled
                className="bg-muted"
              />
              <p className="text-xs text-muted-foreground">
                لا يمكن تعديل رقم الحساب
              </p>
            </div>

            {/* نوع الحساب */}
            <div className="grid gap-2">
              <Label htmlFor="accountType">نوع الحساب</Label>
              <Select
                value={formData.accountType}
                onValueChange={(value) =>
                  handleSelectChange("accountType", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="اختر نوع الحساب" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Standard">عادي</SelectItem>
                  <SelectItem value="Premium">مميز</SelectItem>
                  <SelectItem value="Business">تجاري</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* العملة */}
            <div className="grid gap-2">
              <Label htmlFor="currency">العملة</Label>
              <Select
                value={formData.currency}
                onValueChange={(value) => handleSelectChange("currency", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="اختر العملة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="YER">الريال اليمني (YER)</SelectItem>
                  <SelectItem value="USD">الدولار الأمريكي (USD)</SelectItem>
                  <SelectItem value="SAR">الريال السعودي (SAR)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* اللغة */}
            <div className="grid gap-2">
              <Label htmlFor="language">اللغة</Label>
              <Select
                value={formData.language}
                onValueChange={(value) => handleSelectChange("language", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="اختر اللغة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="English">الإنجليزية</SelectItem>
                  <SelectItem value="Arabic">العربية</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* طريقة الدفع المفضلة */}
            <div className="grid gap-2">
              <Label htmlFor="preferredPayment">طريقة الدفع المفضلة</Label>
              <Select
                value={formData.preferredPayment}
                onValueChange={(value) =>
                  handleSelectChange("preferredPayment", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="اختر طريقة الدفع" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Credit Card">بطاقة ائتمان</SelectItem>
                  <SelectItem value="Debit Card">بطاقة خصم</SelectItem>
                  <SelectItem value="Bank Transfer">تحويل بنكي</SelectItem>
                  <SelectItem value="Mobile Money">محفظة إلكترونية</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              إلغاء
            </Button>
            <Button onClick={handleSave}>حفظ التغييرات</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
