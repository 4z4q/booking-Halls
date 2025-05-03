import { Metadata } from "next";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import { getUserByEmail } from "@/utils/utils";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/dashboard-components/nav-bar";
import { ThemeProvider } from "@/components/theme-provider";
import AppSidebar from "@/components/dashboard-components/app-sidbar";
import { cookies } from "next/headers";
import { DashBoardDialogProvider } from "@/context/tasks-context";

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

  const user = await getUserByEmail(session.user?.email ?? "");

  if (user?.role !== "vendor") {
    redirect("/");
  }

  // Retrieve sidebar state from cookies
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
      <SidebarProvider defaultOpen={defaultOpen}>
        <DashBoardDialogProvider>
          <div className="flex h-screen w-full">
            {/* Sidebar Navigation */}
            <AppSidebar />

            {/* Main Content Area */}
            <div
              className="flex-1 flex flex-col"
              style={{
                minWidth: `calc(100% - ${defaultOpen ? "256px" : "48px"})`,
              }}
            >
              <SiteHeader />

              <main className="flex-1 overflow-auto p-6 w-full">
                {children}
              </main>
            </div>
          </div>
        </DashBoardDialogProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
}
