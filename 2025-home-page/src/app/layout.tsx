import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Urbanist } from "next/font/google";
import opengraph_image from "@/app/assets/Open-graph-card.png";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const harabara = localFont({
  src: "./fonts/Harabara.woff",
  variable: "--font-harabara",
  weight: "100 700 900",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const urbanist = Urbanist({
  subsets: ["latin"], // Include subsets as needed
  weight: ["700"], // Include only the weights you need
  variable: "--font-urbanist", // Define a CSS variable
});

export const metadata: Metadata = {
  title: "uOttaHack",
  description: "Ottawa's longest running hackathon",
  openGraph: {
    type: "website",
    title: "uOttaHack",
    description: ".",
    url: "https://uOttahack.com",
    images: [
      {
        url: opengraph_image.src,
        width: 1200,
        height: 630,
        alt: "uOttaHack 7",
      },
    ],
    siteName: "uOttaHack",
    locale: "en_US",
  },
  appleWebApp: {
    title: "uOttaHack 7",
    statusBarStyle: "black-translucent",
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
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${harabara.variable} ${urbanist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
