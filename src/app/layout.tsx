import type { Metadata } from "next";
import "./globals.css";
import { Cairo, IBM_Plex_Sans_Arabic } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "../../auth";
import { NuqsAdapter } from "nuqs/adapters/react";
import { ThemeProvider } from "@/components/theme-provider";

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
    "منصة لحظات هي وجهتك الأولى لحجز جميع خدمات المناسبات في إب، اليمن. احجز قاعات أفراح، مصورين محترفين، دي جي، ديكور، طباعة دعوات، زفات وفنانين، وكل ما تحتاجه لتنظيم مناسبتك المثالية.",
  keywords: [
    "لحظات",
    "إب",
    "اب",
    "اليمن",
    "حجوزات مناسبات",
    "حجز قاعات أفراح",
    "قاعات مناسبات في إب",
    "حجز قاعات في اب",
    "حجوزات في إب",
    "تنظيم حفلات في اليمن",
    "زفات",
    "فنانين حفلات",
    "مصور حفلات",
    "تصوير مناسبات",
    "تصوير أعراس اليمن",
    "طباعة كروت زفاف",
    "كوشة زفاف",
    "ديكور حفلات",
    "تنسيق أعراس",
    "خدمات زواج اليمن",
    "قاعة أفراح إب",
    "دي جي مناسبات",
    "فستان عروس",
    "ملابس أفراح",
    "إيجار بدلات",
    "تنظيم حفلات",
    "زواج إب",
    "أفراح اليمن",
    "قاعة فخمة إب",
    "حفلات زفاف",
    "مناسبات خاصة",
    "منصة حجز أفراح",
  ],
  metadataBase: new URL("https://booking-halls.vercel.app"),
  alternates: {
    canonical: "https://booking-halls.vercel.app",
  },
  openGraph: {
    title: "لحظات | احجز كل ما تحتاجه لمناسبتك في إب، اليمن",
    description:
      "لحظات تقدم لك تجربة متكاملة لحجز قاعات وخدمات مناسبات في إب. قاعات، تصوير، ديكور، طباعة، فنانين، زفات والمزيد في مكان واحد.",
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
