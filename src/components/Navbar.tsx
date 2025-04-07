"use client";
import Link from "next/link";
import { Search, Bell, User } from "lucide-react";
import { Button } from "./ui/button";
import { NAV_LINKS } from "@/constants";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-500">
                <span className="text-sm font-bold text-white">ع</span>
              </div>
            </div>
            <h3 className="text-lg font-bold md:text-xl">عرسك علينا</h3>
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
          <Button
            title="تسجيل الدخول"
            variant="ghost"
            size="icon"
            onClick={() => router.push("/auth/sign-in")}
          >
            <User className="h-5 w-5" />
            <span className="sr-only">الملف الشخصي</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
