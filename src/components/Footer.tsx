import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className=" py-8  container">
      <Accordion
        type="single"
        collapsible
        className=" pb-0 pt-8 md:pt-12 flex justify-between gap-8 items-center md:flex-row flex-col"
      >
        <div className="grid gap-8 flex-1 w-full border-b md:border-b-0 ">
          {/* Column 1: About */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex md:justify-start items-center gap-2">
              <div className="hidden sm:block relative h-8 w-8">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-500">
                  <span className="text-sm font-bold text-white">ع</span>
                </div>
              </div>
              <h3 className="text-lg font-bold md:text-xl">عرسك علينا</h3>
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              لأن لحظات الفرح تستحق الأفضل، نحن هنا لنصنع لك ذكريات لا تُنسى.
              اختر من بين أفضل الخدمات لحفل زفافك ودعنا نهتم بكل التفاصيل،
              لتستمتع بيومك بكل راحة وسعادة!
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-youtube"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Column 2: Quick Links */}
          <AccordionItem value="item-2">
            <AccordionTrigger className=" text-sm font-semibold uppercase">
              روابط سريعة
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    الخدمات
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    العروض
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    المقالات
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    المدونة
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    التواصل
                  </Link>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Column 3: Categories */}
          <AccordionItem value="item-3">
            <AccordionTrigger className=" text-sm font-semibold uppercase">
              خدماتنا تشمل
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    حجز القاعات
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    تأجير فساتين الزفاف
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    حجز الفنانين
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    التصوير الفوتوغرافي
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    تنسيق الزهور
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    و المزيد !
                  </Link>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </div>

        {/* Column 4: Newsletter */}
        <div className="w-full md:w-1/3 ">
          <h3 className="mb-4 text-sm font-semibold uppercase">
            أشترك في نشرتنا
          </h3>
          <p className="mb-4 text-sm text-muted-foreground">
            أشترك في نشرتنا لحصولك على التحديثات الجديدة
          </p>
          <form className="space-y-2">
            <div className="relative">
              <Input
                type="email"
                placeholder="اكتب بريدك الالكتروني"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                required
              />
            </div>
            <Button type="submit" className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 w-full">
              اشترك
            </Button>
          </form>
        </div>
      </Accordion>

      <div className="mt-8 border-t pt-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            {new Date().getFullYear()} عرسك علينا كل الحقوق محفوظة.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary">
              سياسة الخصوصية
            </Link>
            <Link href="#" className="hover:text-primary">
              شروط الخدمة
            </Link>
            <Link href="#" className="hover:text-primary">
              سياسة ملفات تعريف الارتباط
            </Link>
            <Link href="#" className="hover:text-primary">
              الوصول لذوي الاحتياجات الخاصة
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
