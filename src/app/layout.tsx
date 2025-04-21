import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
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

export const metadata: Metadata = {
  title: "MG | عرسك علينا",
  description: "اي شي",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <SessionProvider session={session}>
        <body className={`${IBM.className}`}>
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
