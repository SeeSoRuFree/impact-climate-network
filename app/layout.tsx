import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "./components/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "2025 Climate Tech Startup Summit | 임팩트클라이밋 네트워크",
  description: "2025 Climate Tech Startup Summit - 기후기술 창업가와 전문가를 연결하는 글로벌 네트워크 프로그램. 혁신적인 기후 생태계를 함께 만들어갑니다.",
  keywords: "Climate Tech Summit, 2025, Climate Network, 카카오, 네트워크, network, 투자, 성장, 기후, 혁신적인, 새려운, 연결, 임팩트클라이밋, 소풍벤처스, 소풍임팩트, 기후테크, 기후테크스타트업, ESG, 임팩트클라이밋 네트워크, 기후네트워크, 기후기술, 기후산업, 기후정책, 기후기술생태계, 기후기술전문가, 스타트업",
  
  // Open Graph
  openGraph: {
    title: "2025 Climate Tech Startup Summit",
    description: "기후기술 창업가와 전문가를 연결하는 글로벌 네트워크 프로그램",
    url: "https://network.impactclimate.net",
    siteName: "Climate Tech Summit",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "2025 Climate Tech Startup Summit",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "2025 Climate Tech Startup Summit",
    description: "기후기술 창업가와 전문가를 연결하는 글로벌 네트워크 프로그램",
    images: ["/og-image.jpg"],
  },
  
  // Additional meta tags
  metadataBase: new URL("https://network.impactclimate.net"),
  alternates: {
    canonical: "/",
    languages: {
      "ko-KR": "/",
      "en-US": "/en",
    },
  },
  
  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  
  // PWA
  manifest: "/manifest.json",
  
  // Viewport
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  
  // Theme color
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
