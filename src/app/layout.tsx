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
    default: "لحظات | احجز قاعتك ومناسبتك في إب، اليمن",
    template: "لحظات | %s",
  },
  description:
    "منصة لحظات لحجوزات المناسبات في اليمن – احجز أفضل قاعات الأفراح وخدمات التصوير والديكور في محافظة إب بسهولة واحترافية.",
  keywords: [
    "لحظات",
    "إب",
    "حجز قاعات في إب",
    "قاعات أفراح في إب",
    "قاعة زفاف في إب",
    "تصوير أعراس اليمن",
    "ديكور حفلات إب",
    "تنظيم مناسبات إب",
    "حجز قاعة زفاف",
    "قاعات مناسبات اليمن",
    "خدمات مناسبات في إب",
    "خدمات أفراح اليمن",
    "حجوزات مناسبات لحظات",
    "تصوير حفلات إب",
    "قاعة فخمة في إب",
    "حجز مناسبات أونلاين",
    "لحظات حجز قاعات",
  ],
  metadataBase: new URL("https://booking-halls.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "لحظات | حجوزات قاعات وخدمات مناسبات في إب، اليمن",
    description:
      "منصة لحظات لحجز وتنظيم قاعات الأفراح، التصوير، والديكور في محافظة إب – سهولة في الحجز واحترافية في التنفيذ.",
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
