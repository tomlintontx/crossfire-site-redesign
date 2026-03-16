import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Crossfire Gymnastics | Boerne, TX",
    template: "%s | Crossfire Gymnastics",
  },
  description:
    "Crossfire Gymnastics in Boerne, TX offers gymnastics classes for toddlers through competitive athletes. Programs include Girls Gymnastics, Ninja Academy, Tumbling, and more.",
  keywords: [
    "gymnastics",
    "Boerne TX",
    "kids gymnastics",
    "ninja academy",
    "tumbling",
    "competitive gymnastics",
  ],
  openGraph: {
    siteName: "Crossfire Gymnastics",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlowCondensed.variable} ${inter.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
