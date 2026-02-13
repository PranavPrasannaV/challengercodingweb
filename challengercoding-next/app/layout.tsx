import type { Metadata } from "next";
import { Poppins, Roboto_Mono, Playfair_Display } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Challenger Coding",
  description: "Code with Confidence. Interactive tutorials, projects, and real learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${robotoMono.variable} ${playfair.variable}`}>
      <head>
        <script src="https://unpkg.com/lucide@latest" crossOrigin="anonymous"></script>
      </head>
      <body className="font-poppins bg-background text-text antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
