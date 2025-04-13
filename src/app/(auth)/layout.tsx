import type React from "react";
import type { Metadata } from "next";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Authentication - TechReview",
  description: "Authentication pages for TechReview.",
};

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (session) redirect("/");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black ">
      {children}
    </div>
  );
}
