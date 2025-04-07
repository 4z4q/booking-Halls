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
      <div className="bg-muted py-6  ">
        <main className="container relative px-4 overflow-hidden bg-white">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
