import { User, LogIn, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { NAV_LINKS } from "@/constants";
import { Session } from "next-auth";
import { ModeToggle } from "./mode-toggle";
import { MobileDrawer } from "./mobile-drawer";
import { getUserByEmail } from "@/utils/utils";

const Navbar = async ({ session }: { session: Session }) => {
  const email = session?.user?.email ?? "";
  const data = await getUserByEmail(email);
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
            <Link href={"/bookings"}>
              <Button variant="ghost" size="icon" title="حجوزاتي">
                <FileText size={24} />
              </Button>
            </Link>
            <ModeToggle />
            <Link href={session ? "/account" : "/sign-in"}>
              <Button
                aria-label={session ? "الملف الشخصي" : "تسجيل الدخول"}
                variant="ghost"
                size="icon"
              >
                {session ? (
                  <User className="h-5 w-5" />
                ) : (
                  <LogIn className="h-5 w-5" />
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile Icons Start */}
          <div className="flex items-center gap-2 md:hidden z-10">
            <Link href="/bookings">
              <Button variant="ghost" size="icon" title="حجوزاتي">
                <FileText size={24} />
              </Button>
            </Link>
          </div>

          {/* Logo - Mobile */}
          <h3 className="text-lg font-bold md:hidden z-10">لحظات</h3>

          {/* Mobile Icons End */}
          <div className="md:hidden flex items-center gap-2 z-10">
            <MobileDrawer data={data} />
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
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
