import "../globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
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
