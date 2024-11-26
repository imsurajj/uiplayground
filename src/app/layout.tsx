import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/sections/Navbar";

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
  icons: {
    icon: [
      {
        url: "/UI.png",
        href: "/UI.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${soraFont.variable} ${spaceGroteskFont.variable} antialiased font-body bg-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
