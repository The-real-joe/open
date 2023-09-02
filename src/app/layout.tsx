import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OpenRegen",
  description:
    "Empower your farm with AI. Grow with OpenRegen, cultivating the future.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  "use server";
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar session={session} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
