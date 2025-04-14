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
  QrCode,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { NAV_LINKS } from "@/constants";
import { Session } from "next-auth";

const Navbar = ({ session }: { session: Session }) => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col">
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
            <Button variant="ghost" size="icon" aria-label="الإشعارات">
              <Bell className="h-5 w-5" />
            </Button>
            <Button
              aria-label={session ? "الملف الشخصي" : "تسجيل الدخول"}
              variant="ghost"
              size="icon"
              onClick={() => router.push(session ? "/profile" : "/sign-in")}
            >
              {session ? <User className="h-5 w-5" /> : <LogIn className="h-5 w-5" />}
            </Button>
          </div>

          {/* أدوات إضافية - Desktop */}
          <div className="md:hidden flex items-center gap-2 z-10">
            <Button variant="ghost" size="icon" className="rounded-full" aria-label="سجل العمليات">
              <FileText className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" aria-label="ماسح QR">
              <QrCode className="h-6 w-6" />
            </Button>
          </div>

          {/* Logo - Mobile */}
          <h3 className="text-lg font-bold md:hidden z-10">لحظات</h3>

          {/* Mobile Icons */}
          <div className="md:hidden flex items-center gap-2 z-10">
            <Button variant="ghost" size="icon" aria-label="الإشعارات">
              <Bell size={24} />
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

        {/* القائمة الجانبية للجوال */}
        <MobileNav isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
      </div>
    </header>
  );
};

const MobileNav = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <div
      className={`md:hidden fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-background/95 backdrop-blur transform transition-transform ease-in-out duration-300 ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <ul className="flex flex-col items-center justify-center h-full gap-6">
        {NAV_LINKS.map((item) => (
          <li
            key={item.key}
            className="cursor-pointer hover:text-primary transition-all duration-300 ease-in-out font-medium text-lg"
          >
            <Link href={item.href} onClick={onClose}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
