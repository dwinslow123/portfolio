import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";

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
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
