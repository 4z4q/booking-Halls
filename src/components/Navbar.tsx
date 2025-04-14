"use client";

import { useState } from "react";
import { Menu, X, Bell, User, ShoppingCart, LogIn } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button"; // تأكد من المسار الصحيح
import { useRouter } from "next/navigation";
import { NAV_LINKS } from "@/constants";
import { Session } from "next-auth";

const Navbar = ({ session }: { session: Session }) => {
  const router = useRouter();
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-6 whitespace-nowrap">
            <Link href="/" className="flex items-center gap-2 z-10">
              <div className="relative h-8 w-8">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-500">
                  <span className="text-sm font-bold text-white">ع</span>
                </div>
              </div>
              <h3 className="text-lg font-bold md:text-xl"> لحظات </h3>
            </Link>

            {/* روابط الأقسام */}
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

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>

            <Button
              title="تسجيل الدخول"
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

          <div
            onClick={toggleNav}
            className="md:hidden border rounded z-50 text-foreground/70 border-foreground/70 p-1 cursor-pointer"
          >
            {nav ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>

        {/* القائمة الجانبية للجوال */}
        <div
          className={`md:hidden fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-background/95 backdrop-blur transform transition-transform duration-300 ${
            nav ? "translate-y-0" : "-translate-y-full"
          } duration-300 ease-in-out`}
        >
          <ul className="flex flex-col items-center justify-center h-full gap-6">
            {NAV_LINKS.map((item) => (
              <li
                key={item.key}
                className="cursor-pointer hover:text-primary transition-all duration-300 ease-in-out font-medium text-lg"
              >
                <Link href={item.href} onClick={closeNav}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
