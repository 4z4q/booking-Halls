"use client";

import { useState } from "react";
import { CalendarIcon, Edit2, Mail, MapPin, Phone, User } from "lucide-react";

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
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

export function PersonalInfoCard({ data }: { data: UserInfo }) {
  const [isEditing, setIsEditing] = useState(false);

  // Sample user data
  const [userData, setUserData] = useState({
    fullName: `${data.firstName} ${data.lastName}`,
    email: data.email,
    phone: data?.phone || "+967 777 123 456",
    createdAt: data?.createdAt?.toISOString().split("T")[0] || "",
    address: "شارع الثوره, أب, اليمن",
  });

  // Form state for editing
  const [formData, setFormData] = useState({ ...userData });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUserData({ ...formData });
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
            <CardTitle>المعلومات الشخصية</CardTitle>
            <CardDescription>تفاصيلك الشخصية ومعلومات التواصل</CardDescription>
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
          <InfoRow icon={User} label="الاسم الكامل" value={userData.fullName} />
          <InfoRow
            icon={Mail}
            label="البريد الإلكتروني"
            value={userData.email}
          />
          <InfoRow icon={Phone} label="رقم الهاتف" value={userData.phone} />
          <InfoRow
            icon={CalendarIcon}
            label="تاريخ الانضمام"
            value={userData.createdAt}
          />
          <InfoRow icon={MapPin} label="العنوان" value={userData.address} />
        </CardContent>
      </Card>

      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>تعديل المعلومات الشخصية</DialogTitle>
            <DialogDescription>
              يمكنك تعديل بياناتك الشخصية من هنا.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <FormField
              id="fullName"
              label="الاسم الكامل"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <FormField
              id="email"
              label="البريد الإلكتروني"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <FormField
              id="phone"
              label="رقم الهاتف"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <FormField
              id="createdAt"
              label="تاريخ الانضمام"
              type="date"
              value={formData.createdAt}
              onChange={handleInputChange}
            />
            <FormField
              id="address"
              label="العنوان"
              value={formData.address}
              onChange={handleInputChange}
            />
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

const InfoRow = ({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) => (
  <>
    <div className="flex items-center gap-3">
      <Icon className="h-5 w-5 text-muted-foreground" />
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium " dir="ltr">
          {typeof value === "string"
            ? value
            : new Date().toISOString().split("T")[0]}
        </p>
      </div>
    </div>
    <Separator />
  </>
);

const FormField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="grid gap-2">
    <Label htmlFor={id}>{label}</Label>
    <Input
      dir="ltr"
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={onChange}
    />
  </div>
);
