import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="container py-6 ">
        <main className="relative overflow-hidden shadow-xl bg-white">{children}</main>
        <Footer />
      </div>
    </>
  );
}
