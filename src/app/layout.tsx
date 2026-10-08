import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ken Esguerra | Software Engineer",
  description: "Personal portfolio website of Mark Kenneth Esguerra - Software Engineer",
  icons: {
    icon: '/images/lion.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
