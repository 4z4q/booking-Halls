import type { Metadata } from "next";
import "./globals.css";
import { Cairo, IBM_Plex_Sans_Arabic } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "../../auth";
import { NuqsAdapter } from "nuqs/adapters/react";
import { ThemeProvider } from "@/provider/theme-provider";

const IBM = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-ibm",
});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: {
    default: "لحظات | احجز كل خدمات مناسبتك في إب، اليمن",
    template: "%s | لحظات - حجوزات مناسبات وقاعات في اليمن",
  },
  description:
    "منصة لحظات هي وجهتك الأولى لحجز جميع خدمات المناسبات في إب، اليمن. احجز قاعات أفراح، مصورات، ديكور، زفات يمنية، فساتين عرائس، تصوير احترافي، وفرقة موسيقية - كل ما تحتاجه في منصة واحدة.",
  keywords: [
    // كلمات رئيسية
    "لحظات",
    "اليمن",
    "إب",
    "اب",
    "منصة حجوزات المناسبات",
    "موقع حجز مناسبات",
    "تطبيق تنظيم مناسبات",
    "حجوزات الأعراس في اليمن",
    "خدمات اعراس",
    "خدمات مناسبات",
    "خدمات زفاف",
    "تنسيق مناسبات في اليمن",


    "استراحة مناسبات", 
    "قاعة مناسبات",     
    "شاليهات مناسبات",  
    "فساتين مناسبات",   
    "فنان مناسبات",     
    "صحون تقديم مناسبات", 
    "جبايات مناسبات",   

    // خدمات
    "حجز قاعات أفراح",
    "حجز قاعات في إب",
    "قاعة فخمة في اليمن",
    "تصوير مناسبات",
    "مصورات أعراس",
    "مصور حفلات",
    "ديكور حفلات",
    "كوشة زفاف",
    "زفات يمنية",
    "فرق موسيقية",
    "فنانين أفراح",
    "بوفيه أعراس",
    "خدمات كاترينج",
    "طباعة كروت زواج",
    "دعوات مناسبات",
    "تزيين صالات",
    "تنسيق طاولات",
    "منسقة حفلات",

    // ملابس وتجميل
    "فستان عروس",
    "بدلات عريس",
    "مكياج عرايس",
    "مصففات شعر",

    // محلية/جغرافية
    "حجوزات في إب",
    "تنظيم حفلات اب",
    "خدمات مناسبات اب",
    "قاعات أفراح صغيرة",
    "قاعات أفراح كبيرة",
    "تنسيق أعراس في اليمن",
    "زواج إب",
    "أفراح اليمن",
    "مناسبات خاصة في اليمن",
    "حفل زفاف يمني",
    "منصة حجز أفراح اليمن",
  ],
  metadataBase: new URL("https://booking-halls.vercel.app"),
  alternates: {
    canonical: "https://booking-halls.vercel.app",
  },
  openGraph: {
    title: "لحظات | احجز كل ما تحتاجه لمناسبتك في إب، اليمن",
    description:
      "لحظات تقدم لك تجربة متكاملة لحجز قاعات وخدمات مناسبات في اليمن. احجز قاعات، تصوير، ديكور، فنانين، كوش، فساتين، طباعة بطاقات والمزيد في منصة واحدة.",
    url: "https://booking-halls.vercel.app",
    siteName: "لحظات",
    locale: "ar_YE",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  // console.log(session)
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <SessionProvider session={session}>
        <body className={`!${cairo.className} ${IBM.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <NuqsAdapter> {children}</NuqsAdapter>
            <Toaster richColors position="top-center" />
          </ThemeProvider>
        </body>
      </SessionProvider>
    </html>
  );
}
