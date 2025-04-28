import { Metadata } from "next";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import { getUserByEmail } from "@/utils/utils";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "@/components/dashboard-components/nav-bar";
export const metadata: Metadata = {
  title: "لحظات - لوحة التحكم",
  description:
    "إدارة الخدمات، الحجوزات، والملف الشخصي من خلال لوحة التحكم الخاصة بك.",
};

export default async function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    redirect("/sign-in");
  }

  const user = await getUserByEmail(session?.user?.email ?? "");

  if (user?.role !== "vendor") {
    redirect("/");
  }
  return (
    <>
      <SidebarProvider>
        <Navbar />
        {children}
      </SidebarProvider>
    </>
  );
}
