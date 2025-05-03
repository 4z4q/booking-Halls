import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Moon } from "lucide-react";
import { ProfileDropdown } from "./profile-dropdown";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b bg-white transition-[width,height] ease-linear h-12 flex items-center">
      <div className="container flex justify-between items-center h-full px-4 lg:px-6">
        {/* القسم الأيسر */}
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="h-4" />
          <h1 className="text-base font-medium">الصفحة الرئيسية</h1>
        </div>

        {/* القسم الأيمن */}
        <div className="flex items-center gap-3">
          <Moon className="h-5 w-5 cursor-pointer" />
          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
}
