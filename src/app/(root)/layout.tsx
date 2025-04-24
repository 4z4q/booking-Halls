import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { auth } from "../../../auth";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <>
      <Navbar session={session} />
      <div className="bg-muted py-6">{children}</div>
      <Footer />
    </>
  );
}
