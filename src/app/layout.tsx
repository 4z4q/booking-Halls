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
})

export const metadata: Metadata = {
  title: {
    default: "MG | لحظاتك تبدأ معنا",
    template: "MG | %s",
  },
  description:
    "اكتشف أفضل مقدمي خدمات المناسبات مثل القاعات، التصوير، والديكور – كل ما تحتاجه لتنظيم يومك المميز في مكان واحد.",
  keywords: [
    "حفلات زفاف",
    "قاعات مناسبات",
    "تصوير أعراس",
    "تنظيم حفلات",
    "ديكور",
    "لحظات",
    "خدمات المناسبات",
    "حجز قاعة",
    "حجوزات أونلاين",
  ],
  metadataBase: new URL("https://booking-halls.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MG | لحظاتك تبدأ معنا",
    description:
      "منصة متكاملة لحجز وتنظيم جميع خدمات مناسبتك بكل سهولة واحترافية.",
    url: "https://booking-halls.vercel.app",
    siteName: "لحظات",
    locale: "ar_SA",
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
