import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import { redirect } from "next/navigation";
import { auth } from "../../../auth";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  // if (!session) redirect("/sign-in");
  return (
    <>
      <Navbar session={session} />
      <div className="bg-muted py-6">{children}</div>
      <Footer />
    </>
  );
}
