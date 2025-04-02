import Link from "next/link";
import { Search, Bell, User } from "lucide-react";
import { Button } from "./ui/button";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <div className="absolute h-8 w-8 rounded-full bg-purple-600"></div>
              <div className="absolute h-6 w-6 translate-x-1 translate-y-1 rounded-full bg-blue-500"></div>
            </div>
            <span className="text-xl font-bold">عرسك علينا</span>
          </Link>
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">بحث</span>
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Bell className="h-5 w-5" />
            <span className="sr-only">الإشعارات</span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">الملف الشخصي</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
