import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const neueMontreal = localFont({
  src: [
    {
      path: "./fonts/NeueMontreal-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-neue-montreal",
  display: "swap",
});

const ppNeueBit = localFont({
  src: [
    {
      path: "./fonts/PPNeueBit-Bold.otf", // Changed path
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pp-neue-bit",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhinav Chauhan",
  description:
    "Creative full-stack developer & designer building expressive, functional interfaces with a modern tech stack.",
  icons: {
    icon: "/favicon.svg?v=2",
  },
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${neueMontreal.variable} ${ppNeueBit.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        <main className="pt-[20px] px-[22px] h-screen md:overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
