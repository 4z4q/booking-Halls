import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication - TechReview",
  description: "Authentication pages for TechReview.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-primary-foreground to-primary dark:from-teal-950 dark:to-teal-900 ">
      {children}
    </div>
  );
}
