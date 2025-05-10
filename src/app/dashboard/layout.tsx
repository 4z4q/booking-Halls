import { Metadata } from "next";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import { getUserByEmail } from "@/utils/utils";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/provider/theme-provider";
import AppSidebar from "@/components/dashboard-components/layout/app-sidbar";
import { cookies } from "next/headers";
import { DashBoardDialogProvider } from "@/context/tasks-context";
import MainContent from "@/components/dashboard-components/layout/main-content";

/**
 * Static metadata for the Dashboard layout.
 */
export const metadata: Metadata = {
  title: "لحظات - لوحة التحكم",
  description:
    "إدارة الخدمات، الحجوزات، والملف الشخصي من خلال لوحة التحكم الخاصة بك.",
};

/**
 * Dashboard layout wrapper component.
 * Ensures the user is authenticated and authorized (vendor only),
 * and provides theme, sidebar, and dialog context to the dashboard.
 *
 * @param children - The content to render inside the dashboard layout.
 */
export default async function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/sign-in");
  }

  // const user = await getUserByEmail(session.user?.email ?? "");

  // if (user?.role !== "vendor") {
  //   redirect("/");
  // }

  // Retrieve sidebar state from cookies
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <SidebarProvider defaultOpen={defaultOpen}>
        <DashBoardDialogProvider>
          <div className="flex h-screen w-full">
            <AppSidebar />
            <MainContent>{children}</MainContent>
          </div>
        </DashBoardDialogProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
}
