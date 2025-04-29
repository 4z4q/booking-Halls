import type { Metadata } from "next";
import "./globals.css";
import { Cairo } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "../../auth";
import { NuqsAdapter } from "nuqs/adapters/react";
import { ThemeProvider } from "@/components/theme-provider";

// const IBM = IBM_Plex_Sans_Arabic({
//   subsets: ["arabic"],
//   weight: ["400", "700"],
//   variable: "--font-ibm",
// });

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: {
    default: "لحظات | احجز أفضل قاعات وخدمات المناسبات في إب، اليمن",
    template: "%s | لحظات - حجوزات قاعات ومناسبات في اليمن",
  },
  description:
    "لحظات هي المنصة الأولى لحجوزات قاعات الأفراح والمناسبات في محافظة إب، اليمن. احجز الآن أفضل القاعات، خدمات التصوير، الدي جي، الديكور، تنظيم الحفلات والمزيد بكل سهولة واحترافية.",
  keywords: [
    "لحظات",
    "إب",
    "اليمن",
    "حجوزات اليمن",
    "حجز قاعات",
    "قاعات أفراح اليمن",
    "قاعات أفراح في إب",
    "قاعة زفاف إب",
    "قاعة حفلات",
    "حجوزات أونلاين",
    "منصة حجز مناسبات",
    "تصوير أعراس إب",
    "تصوير حفلات",
    "تنظيم مناسبات اليمن",
    "تنظيم حفلات إب",
    "ديكور حفلات",
    "خدمات أفراح اليمن",
    "خدمات مناسبات في إب",
    "قاعات مناسبات اليمن",
    "قاعة ملكية في إب",
    "قاعات فخمة اليمن",
    "زواج إب",
    "أعراس اليمن",
    "دي جي حفلات",
    "كوشة زفاف إب",
  ],
  metadataBase: new URL("https://booking-halls.vercel.app"),
  alternates: {
    canonical: "https://booking-halls.vercel.app",
  },
  openGraph: {
    title: "لحظات | احجز قاعتك وخدمات مناسبتك في إب، اليمن",
    description:
      "استكشف أفضل قاعات الأفراح وخدمات المناسبات في إب، اليمن عبر منصة لحظات. حجوزات سهلة، خيارات متعددة، وتنظيم احترافي لمناسبتك الخاصة.",
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
        <body className={`${cairo.className}`}>
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
