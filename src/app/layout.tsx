import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Room } from "./Room";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DUI App",
  description:
    "A minimalist design web app. Create your designs and share them with others. Collaborate. Work together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Room>{children}</Room>
      </body>
    </html>
  );
}
