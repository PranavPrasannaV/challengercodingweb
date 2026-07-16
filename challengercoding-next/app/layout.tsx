import type { Metadata } from "next";
import { Merriweather, Lato, JetBrains_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "300"],
  variable: "--font-lato",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Challenger Coding",
  description:
    "Free coding education for every student. Interactive tutorials in Scratch, Python, and Java — designed to make programming accessible for all ages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${merriweather.variable} ${lato.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans bg-background text-text antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
