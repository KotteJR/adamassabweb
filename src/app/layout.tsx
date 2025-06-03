import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./LandingPage/components/Header";
import Footer from "./LandingPage/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adamass",
  description: "Official website of Adamass",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans?.variable || ''} ${geistMono?.variable || ''} antialiased font-sans`}
      >
        <Header />
        <main className="pt-0 md:pt-0">{children}</main>
        <Footer />
        {/* Force Vercel to pick up latest commit */}
      </body>
    </html>
  );
}
