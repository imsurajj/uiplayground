import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import { Features } from "@/sections/Features";
import { Pricing } from "@/sections/Pricing";
import CallToAction from "@/sections/CallToAction";
import Footer from "@/sections/Footer";
const soraFont = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: "variable",
});
const spaceGroteskFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: "variable",
});

export const metadata: Metadata = {
  title: "UI Playground",
  description: "Component Library for Your Next Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${soraFont.variable} ${spaceGroteskFont.variable} antialiased bg-gray-950 text-gray-300 font-body`}
      >
        <Header />
        <Hero />
        <Features />
        <Pricing />
        <CallToAction />
        <Footer />
        {children}
      </body>
    </html>
  );
}
