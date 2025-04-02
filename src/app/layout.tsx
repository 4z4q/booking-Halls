import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IBM_Plex_Sans_Arabic } from "next/font/google";

const IBM = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700"],
});
export const metadata: Metadata = {
  title: "MG | عرسك علينا",
  description: "اي شي",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={IBM.className}>
        <Navbar />
        <div className="container py-6 ">
          <main className="relative overflow-hidden">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
