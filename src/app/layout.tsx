import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Dan Winslow",
  description: "Dan Winslow's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="font-sans w-full grid grid-rows-[1rem_1fr_1rem] min-h-screen p-3 sm:p-6 gap-8 sm:gap-16">
        <Nav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
