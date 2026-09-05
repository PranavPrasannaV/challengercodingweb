import type { Metadata } from "next";
import { Newsreader, Source_Sans_3, JetBrains_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { OG_IMAGE, SITE } from "@/src/site";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newsreader",
  axes: ["opsz"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Free coding classes for students`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "free coding classes",
    "Scratch tutorials",
    "Python tutorials for beginners",
    "Java tutorials for beginners",
    "student-run nonprofit",
    "learn to code",
    "K-12 computer science",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    title: `${SITE.name} — Free coding classes for students`,
    description: SITE.description,
    locale: "en_US",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Free coding classes for students`,
    description: SITE.description,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

/**
 * Organization + course-catalog structured data. Search engines and AI answer
 * engines use this to attribute the lessons to a real, locatable organization
 * rather than an anonymous page.
 */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  alternateName: "Challenger Coding Club",
  url: SITE.url,
  email: SITE.email,
  description: SITE.description,
  foundingDate: "2023-06",
  founder: SITE.founders.map((name) => ({ "@type": "Person", name })),
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.locality,
    addressRegion: SITE.region,
    addressCountry: "US",
  },
  areaServed: "Worldwide",
  isAccessibleForFree: true,
  knowsAbout: ["Scratch", "Python", "Java", "Introductory computer science"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${sourceSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-paper text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-sm focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
