"use client";

import type React from "react";

import { useState } from "react";
import {
  AlertTriangle,
  Check,
  Eye,
  EyeOff,
  Key,
  Lock,
  Shield,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

export function AccountSecurityCard() {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [biometricEnabled, setBiometricEnabled] = useState(false);

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordForm((prev) => ({ ...prev, [name]: value }));
  };

  const calculatePasswordStrength = (password: string) => {
    if (!password) return 0;

    let strength = 0;

    // Length check
    if (password.length >= 8) strength += 25;

    // Contains lowercase
    if (/[a-z]/.test(password)) strength += 25;

    // Contains uppercase
    if (/[A-Z]/.test(password)) strength += 25;

    // Contains number or special char
    if (/[0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) strength += 25;

    return strength;
  };

  const getPasswordStrengthText = (strength: number) => {
    if (strength === 0) return "No password";
    if (strength <= 25) return "Weak";
    if (strength <= 50) return "Fair";
    if (strength <= 75) return "Good";
    return "Strong";
  };

  const getPasswordStrengthColor = (strength: number) => {
    if (strength === 0) return "bg-gray-200";
    if (strength <= 25) return "bg-red-500";
    if (strength <= 50) return "bg-yellow-500";
    if (strength <= 75) return "bg-blue-500";
    return "bg-green-500";
  };

  const passwordStrength = calculatePasswordStrength(passwordForm.newPassword);

  const handleChangePassword = () => {
    // Validation
    if (
      !passwordForm.currentPassword ||
      !passwordForm.newPassword ||
      !passwordForm.confirmPassword
    ) {
      toast.error("خطأ", {
        description: "يرجى ملء جميع حقول كلمة المرور.",
      });
      return;
    }

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      toast.error("كلمتا المرور غير متطابقتين", {
        description: "تأكد من أن كلمتي المرور الجديدتين متطابقتان.",
      });
      return;
    }

    if (passwordStrength < 50) {
      toast.error("كلمة المرور ضعيفة", {
        description: "يرجى اختيار كلمة مرور أقوى.",
      });
      return;
    }

    // في حال النجاح
    toast.success("تم تحديث كلمة المرور", {
      description: "تم تغيير كلمة المرور بنجاح.",
    });
    setShowChangePassword(false);
    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const toggleTwoFactor = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
    toast(
      !twoFactorEnabled ? "تم تفعيل التحقق بخطوتين" : "تم إيقاف التحقق بخطوتين",
      {
        description: !twoFactorEnabled
          ? "تم تفعيل خاصية التحقق بخطوتين."
          : "تم إيقاف خاصية التحقق بخطوتين.",
      }
    );
  };

  const toggleBiometric = () => {
    setBiometricEnabled(!biometricEnabled);
    toast(
      !biometricEnabled
        ? "تم تفعيل تسجيل الدخول البيومتري"
        : "تم إيقاف تسجيل الدخول البيومتري",
      {
        description: !biometricEnabled
          ? "تم تفعيل تسجيل الدخول باستخدام البصمة أو التعرف على الوجه."
          : "تم إيقاف تسجيل الدخول البيومتري.",
      }
    );
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>إعدادات الأمان</CardTitle>
          <CardDescription>
            قم بإدارة أمان حسابك وخيارات تسجيل الدخول
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Lock className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">كلمة المرور</p>
                <p className="text-sm text-muted-foreground">
                  تم تغييرها قبل 30 يومًا
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowChangePassword(true)}
            >
              تغيير
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Key className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">التحقق بخطوتين</p>
                <p className="text-sm text-muted-foreground">
                  {twoFactorEnabled ? "مفعل" : "غير مفعل"}
                </p>
              </div>
            </div>
            <Switch
              checked={twoFactorEnabled}
              onCheckedChange={toggleTwoFactor}
            />
          </div>

          <div className="flex items-center justify-between">
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
                  d="M7 10V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 14V16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 21H18C19.1046 21 20 20.1046 20 19V11C20 9.89543 19.1046 9 18 9H6C4.89543 9 4 9.89543 4 11V19C4 20.1046 4.89543 21 6 21Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <p className="font-medium">تسجيل الدخول البيومتري</p>
                <p className="text-sm text-muted-foreground">
                  {biometricEnabled ? "مفعل" : "غير مفعل"}
                </p>
              </div>
            </div>
            <Switch
              checked={biometricEnabled}
              onCheckedChange={toggleBiometric}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            <Shield className="mr-2 h-4 w-4" />
            فحص الأمان
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={showChangePassword} onOpenChange={setShowChangePassword}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>تغيير كلمة المرور</DialogTitle>
            <DialogDescription>
              أنشئ كلمة مرور جديدة لا تقل عن 8 أحرف.{" "}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="currentPassword">كلمة المرور الحالية</Label>
              <div className="relative">
                <Input
                  id="currentPassword"
                  name="currentPassword"
                  type={showPassword ? "text" : "password"}
                  value={passwordForm.currentPassword}
                  onChange={handleInputChange}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="sr-only">
                    {showPassword ? "Hide password" : "Show password"}
                  </span>
                </Button>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="newPassword">كلمة المرور الجديدة</Label>
              <div className="relative">
                <Input
                  id="newPassword"
                  name="newPassword"
                  type={showPassword ? "text" : "password"}
                  value={passwordForm.newPassword}
                  onChange={handleInputChange}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
              {passwordForm.newPassword && (
                <div className="mt-2 space-y-2">
                  <Progress
                    value={passwordStrength}
                    className={getPasswordStrengthColor(passwordStrength)}
                  />
                  <div className="flex items-center justify-between text-xs">
                    <span>قوة كلمة المرور:</span>
                    <span
                      className={
                        passwordStrength >= 75
                          ? "text-green-500 font-medium"
                          : "text-muted-foreground"
                      }
                    >
                      {getPasswordStrengthText(passwordStrength)}
                    </span>
                  </div>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li className="flex items-center">
                      {passwordForm.newPassword.length >= 8 ? (
                        <Check className="mr-1 h-3 w-3 text-green-500" />
                      ) : (
                        <AlertTriangle className="mr-1 h-3 w-3 text-amber-500" />
                      )}
                      ... على الأقل 8 أحرف
                    </li>
                    <li className="flex items-center">
                      {/[A-Z]/.test(passwordForm.newPassword) ? (
                        <Check className="mr-1 h-3 w-3 text-green-500" />
                      ) : (
                        <AlertTriangle className="mr-1 h-3 w-3 text-amber-500" />
                      )}
                      ... حرف كبير واحد على الأقل
                    </li>
                    <li className="flex items-center">
                      {/[0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(
                        passwordForm.newPassword
                      ) ? (
                        <Check className="mr-1 h-3 w-3 text-green-500" />
                      ) : (
                        <AlertTriangle className="mr-1 h-3 w-3 text-amber-500" />
                      )}
                      ... رقم أو رمز خاص واحد على الأقل
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">تأكيد كلمة المرور الجديدة</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                value={passwordForm.confirmPassword}
                onChange={handleInputChange}
              />
              {passwordForm.newPassword && passwordForm.confirmPassword && (
                <div className="flex items-center text-xs mt-1">
                  {passwordForm.newPassword === passwordForm.confirmPassword ? (
                    <>
                      <Check className="mr-1 h-3 w-3 text-green-500" />
                      <span className="text-green-500">
                        كلمات المرور متطابقة
                      </span>
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="mr-1 h-3 w-3 text-red-500" />
                      <span className="text-red-500">
                        كلمات المرور غير متطابقة{" "}
                      </span>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowChangePassword(false)}
            >
              الغاء
            </Button>
            <Button onClick={handleChangePassword}>حفظ</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
