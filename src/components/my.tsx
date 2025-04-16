'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Bell, ShoppingCart, LogIn, User } from "lucide-react"

const NAV_LINKS = [
  { key: "home", label: "الرئيسية", href: "/" },
  { key: "about", label: "من نحن", href: "/about" },
  { key: "services", label: "الخدمات", href: "/services" },
  { key: "contact", label: "تواصل معنا", href: "/contact" },
]

export default function Navbar({ session }: { session?: boolean }) {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => setNavOpen(!navOpen)
  const closeNav = () => setNavOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* أيقونة القائمة للجوال */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleNav}>
            {navOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* الشعار في المنتصف */}
        <div className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="font-bold text-lg text-orange-600">لحظات</span>
        </div>

        {/* قائمة الروابط (للحواسيب) */}
        <nav className="hidden md:flex gap-6">
          {NAV_LINKS.map((link) => (
            <Link key={link.key} href={link.href} className="text-sm font-medium hover:text-orange-600">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* أيقونات الوظائف */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="bg-orange-100 rounded-full">
            <Bell className="h-5 w-5 text-orange-600" />
          </Button>
          <Button variant="ghost" size="icon" className="bg-orange-100 rounded-full">
            <ShoppingCart className="h-5 w-5 text-orange-600" />
          </Button>
          <Button variant="ghost" size="icon" className="bg-orange-100 rounded-full">
            {session ? <User className="h-5 w-5 text-orange-600" /> : <LogIn className="h-5 w-5 text-orange-600" />}
          </Button>
        </div>
      </div>

      {/* قائمة الجوال */}
      <div className={md:hidden fixed top-16 left-0 w-full bg-white z-40 transition-transform duration-300 ease-in-out ${navOpen ? "translate-y-0" : "-translate-y-full"}}>
        <ul className="flex flex-col items-center gap-4 py-6 border-t">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link href={link.href} onClick={closeNav} className="text-base font-medium hover:text-orange-600">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}