import type { Metadata } from "next";
// import { Inter } from "next/font/google"; // Using Poppins as per design
import "./globals.css";

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
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet" />
        <script src="https://unpkg.com/lucide@latest" crossOrigin="anonymous"></script>
      </head>
      <body>
        <div className="top-strip"></div>
        {/* Navigation included here to persist across pages, or can be in individual pages if needed. 
            Based on index.html, it seems global. */}
        <nav>
          <ul className="navbar">
            <li><a href="/">Home</a></li>
            <li><a href="/learn">Learn</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/compiler">Online Compiler</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="https://forms.office.com/r/BnXvEhKGVs" target="_blank" className="enroll-button">Enroll</a></li>
          </ul>
        </nav>
        {children}
        <footer>
          <div className="footer-content">
            <div className="contact-box">
              <div className="footer-links">
                <a href="https://www.linkedin.com/in/jaden-tang-0924b6279/" target="_blank">LinkedIn</a>
                <a href="mailto:contact@challengercoding.com">Email</a>
                <a href="/contact">Contact Us</a>
              </div>
            </div>
            <p>&copy; 2024 Challenger Coding. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
