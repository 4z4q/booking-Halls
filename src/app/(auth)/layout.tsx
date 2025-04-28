import type React from "react";
import type { Metadata } from "next";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "لحظات - تسجيل الدخول أو إنشاء حساب",
  description:
    "قم بتسجيل الدخول أو إنشاء حساب جديد للوصول إلى خدمات لحظات بسهولة وسرعة.",
};

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (session) redirect("/");

  return <>{children}</>;
}
