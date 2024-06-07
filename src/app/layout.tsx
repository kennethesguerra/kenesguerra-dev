import type { Metadata } from "next";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
