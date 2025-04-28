"use client";

import { GalleryVerticalEnd } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { vendorProfileSchema } from "@/lib/validation";
import AuthForm from "@/components/dashboard-components/auth-form-vendor";

export default function LandingPage() {
  const router = useRouter();
  const handleVendorSignUp = async (data:any) => {
    const result = {
      success: true,
      error: null,
    };
    if (result.success) {
      router.push("/vendor/profile"); // ← توجهه إلى صفحة البروفايل أو أي مكان تختاره
    } else {
      // هنا بإمكانك تعرض توست خطأ
      toast.error("حدث خطأ أثناء إنشاء الحساب", {
        description: result.error ?? "يرجى المحاولة لاحقاً",
      });
    }

    return result;
  };

  return (
    <div className="grid min-h-svh lg:grid-cols-2 m-0 p-0">
      {/* Left Section - Form */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            لحظات
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary  text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
              أكمل بيانات حساب مزود الخدمة
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              الرجاء تعبئة بياناتك بدقة لإتمام إنشاء حسابك كمزود خدمة.
            </p>

            <AuthForm
              type="SIGN_UP"
              schema={vendorProfileSchema}
              defaultValues={{
                businessName: "",
                phoneNumber: "",
                location: "",
                serviceType: "",
              }}
              onSubmit={handleVendorSignUp}
            />
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="relative hidden bg-muted lg:block">
        <Image
          src="/logo.png"
          alt="صورة ترحيبية"
          fill
          className="absolute inset-0 h-full w-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30" />
        <div className="relative z-10 flex h-full flex-col justify-end p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">مرحبًا بك في عالم لحظات!</h2>
          <p className="text-lg max-w-md">
            سجّل بياناتك لتبدأ بعرض خدماتك والوصول إلى عملاء جدد.
          </p>
        </div>
      </div>
    </div>
  );
}
