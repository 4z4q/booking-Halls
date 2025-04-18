"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Bell,
  User,
  ShoppingCart,
  LogIn,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { NAV_LINKS } from "@/constants";
import { Session } from "next-auth";
import { ModeToggle } from "./ModeToggle";

const Navbar = ({ session }: { session: Session }) => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" container   flex flex-col">
        <div className="flex h-16 items-center justify-between">
          {/* Logo & Navigation */}
          <div className="hidden md:flex items-center gap-6 whitespace-nowrap">
            <Link href="/" className="flex items-center gap-2 z-10">
              <div className="relative h-8 w-8">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-500">
                  <span className="text-sm font-bold text-white">ع</span>
                </div>
              </div>
              <h3 className="text-lg font-bold md:text-xl">لحظات</h3>
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

          {/* Actions - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" aria-label="سلة المشتريات">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <ModeToggle />
            <Button
              aria-label={session ? "الملف الشخصي" : "تسجيل الدخول"}
              variant="ghost"
              size="icon"
              onClick={() => router.push(session ? "/profile" : "/sign-in")}
            >
              {session ? (
                <User className="h-5 w-5" />
              ) : (
                <LogIn className="h-5 w-5" />
              )}
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden z-10">
            <Button
              variant="ghost"
              size="icon"
              aria-label="سلة المشتريات"
              className=" sm:flex"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="الإشعارات">
              <Bell className="h-5 w-5" />
            </Button>
          </div>

          {/* Logo - Mobile */}
          <h3 className="text-lg font-bold md:hidden z-10">لحظات</h3>

          {/* Mobile Icons */}
          <div className="md:hidden flex items-center gap-2 z-10">
            <Button variant="ghost" size="icon" aria-label="الإشعارات">
              <FileText size={24} />
            </Button>
            <Button
              onClick={toggleMobileMenu}
              variant="ghost"
              size="icon"
              aria-label="قائمة الجوال"
              className="rounded z-50 text-foreground/70 font-bold"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile bottom navigation */}
        <nav className="md:hidden border-t pt-2 pb-3">
          <ul className="flex items-center justify-around">
            {NAV_LINKS.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* القائمة الجانبية للجوال */}
        <MobileNav
          isOpen={isMobileMenuOpen}
          onClose={closeMobileMenu}
          session={session}
        />
      </div>
    </header>
  );
};

const MobileNav = ({
  isOpen,
  onClose,
  session,
}: {
  isOpen: boolean;
  onClose: () => void;
  session: Session | null;
}) => {
  const router = useRouter();

  return (
    <div
      className={`md:hidden fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-background/95 backdrop-blur transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full gap-6 text-center px-4">
        {session ? (
          <>
            <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-xs text-right">
              <p className="text-lg font-semibold text-primary mb-2">
                مرحبًا، {session.user?.name || "المستخدم"}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                {session.user?.email}
              </p>
              <div className="flex flex-col gap-2">
                <Button onClick={() => router.push("/profile")}>
                  الملف الشخصي
                </Button>
                <Button onClick={() => router.push("/orders")}>حجوزاتي</Button>
              </div>
            </div>
            <Button variant="outline" onClick={onClose}>
              إغلاق
            </Button>
          </>
        ) : (
          <>
            <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-xs text-center">
              <p className="text-lg font-semibold text-primary mb-2">
                مرحبًا بك في لحظات
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                قم بإنشاء حساب لتتمكن من مشاهدة جميع الخدمات، الأسعار،
                التقييمات، والمزايا الخاصة!
              </p>
              <div className="flex flex-col gap-2">
                <Button onClick={() => router.push("/sign-in")}>
                  تسجيل الدخول / إنشاء حساب
                </Button>
              </div>
            </div>
            <Button variant="outline" onClick={onClose}>
              إغلاق
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
