"use client";

import AuthForm from "@/components/auth-form";
import { signUp } from "@/utils/auth";
import { signUpSchema } from "@/lib/validation";
import { GalleryVerticalEnd } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* Left Section - Form */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            لحظات
            <div className="flex h-6 w-6 items-center justify-center r  ounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <AuthForm
              type="SIGN_UP"
              schema={signUpSchema}
              defaultValues={{
                firstName: "",
                lastName: "",
                email: "",
                role: "client",
                password: "",
              }}
              onSubmit={signUp}
            />
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="relative hidden bg-muted lg:block">
        <Image
          src="/image/majdah-majed-QA_sLd9k0UY-unsplash.jpg"
          alt="Image"
          fill
          className="absolute inset-0 h-full w-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30" />
        <div className="relative z-10 flex h-full flex-col justify-end p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">مرحبًا بعودتك!</h2>
          <p className="text-lg max-w-md">
            سجّل دخولك لمتابعة الحجز واستكشاف أحدث العروض والمناسبات الخاصة بنا.
          </p>
        </div>
      </div>
    </div>
  );
}
