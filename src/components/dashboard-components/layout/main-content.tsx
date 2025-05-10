// components/dashboard-components/main-content.tsx
"use client"; // ← هذا هو المفتاح!

import { useSidebar } from "@/components/ui/sidebar";
import { SiteHeader } from "../nav/nav-bar";

export default function MainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { open } = useSidebar(); // ← الحالة الديناميكية

  return (
    <div
      className="flex-1 flex flex-col"
      style={{
        minWidth: `calc(100% - ${open ? "256px" : "48px"})`, // ← يتحدث تلقائيًا
      }}
    >
      <SiteHeader />
      <main className="flex-1 p-6 w-full">{children}</main>
    </div>
  );
}
