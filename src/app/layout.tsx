import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Companies from "@/sections/Companies";
import { Features } from "@/sections/Features";
import Pricing from "@/sections/Pricing";
import Testimonials from "@/sections/Testimonials";
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
  title: "AI SaaS Landing Page",
  description: "Created by Frontend Tribe",
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
        <Companies />
        <Features />
        {children}
      </body>
    </html>
  );
}
