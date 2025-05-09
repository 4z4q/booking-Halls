"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, ChevronLeft, X, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "./shared/mode-toggle";
import { logoutUser } from "@/utils/auth";
import { useRouter } from "next/navigation";

export function MobileDrawer({ data }: { data: UserInfo }) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  return (
    <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="ghost"
          size="icon"
          aria-label="قائمة الجوال"
          className="rounded z-50 text-foreground/70 font-bold"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </DrawerTrigger>

      <DrawerContent className="rounded-l-2xl">
        {!data ? (
          <div className="flex flex-col items-center justify-center h-full p-6 text-center space-y-6">
            <DrawerTitle className="text-2xl font-bold text-gray-800">
              أهلًا بك 👋
            </DrawerTitle>
            <p className="text-gray-600 text-sm">
              لتتمكن من عرض بيانات حسابك والوصول إلى المميزات، الرجاء تسجيل
              الدخول إلى حسابك.
            </p>
            <Button
              variant="default"
              className="mt-4"
              onClick={() => {
                router.push("/sign-in");
              }}
            >
              تسجيل الدخول
            </Button>
          </div>
        ) : (
          <div className="flex flex-col justify-between w-full h-full relative">
            <DrawerHeader className="border-b border-gray-200 flex items-center gap-4 flex-row bg-gradient-to-r from-gray-50 to-white rounded-tl-2xl">
              <div className="top-4 left-4 absolute">
                <ModeToggle />
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden relative">
                <Image
                  src="/Untitled-1.jpg"
                  alt="Image"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <DrawerTitle>
                  {data.firstName} {data.lastName}
                </DrawerTitle>
                <DrawerDescription>{data.email}</DrawerDescription>
                <span className="text-xs bg-primary text-white font-semibold px-2 py-1 rounded mt-1 inline-block">
                  حساب مفعل
                </span>
              </div>
            </DrawerHeader>

            <div className="mt-6 space-y-4 text-white">
              <DrawerLink
                onClick={() => setIsOpen(false)}
                href="/account"
                text="بيانات الحساب"
              />
              <DrawerLink
                onClick={() => setIsOpen(false)}
                href="#"
                text="الخصوصية"
              />
              <DrawerLink
                onClick={() => setIsOpen(false)}
                href="#"
                text="دعوة صديق"
              />
              <DrawerLink
                onClick={() => setIsOpen(false)}
                href="#"
                text="الأحكام والشروط"
              />
              <DrawerLink
                onClick={() => setIsOpen(false)}
                href="#"
                text="أماكننا"
              />
              <DrawerLink
                onClick={() => setIsOpen(false)}
                href="/contact"
                text="تواصل معنا"
              />
            </div>

            <DrawerFooter>
              <Button
                variant="outline"
                className="flex gap-2 items-center"
                onClick={async () => {
                  await logoutUser();
                }}
              >
                تسجيل خروج
                <LogOut size={16} />
              </Button>
            </DrawerFooter>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
}

export function DrawerLink({
  text,
  href,
  onClick,
}: {
  text: string;
  href: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="w-full px-4 pb-4 border-b border-b-gray-200  text-black flex items-center justify-between text-sm gap-2  transition-all"
    >
      <span>{text}</span>
      <ChevronLeft size={16} />
    </Link>
  );
}
