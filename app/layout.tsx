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
  title: "임팩트클라이밋 네트워크 IMPACT CLIMATE NETWORK",
  description: "임팩트클라이밋 네트워크는 기후기술 창업가와 전문가를 연결하는 네트워크 프로그램입니다. 새로운 연결을 통해 혁신적인 기후 생태계를 만듭니다.",
  keywords: "Climate Network, 카카오, 네트워크, network, 투자, 성장, 기후, 혁신적인, 새려운, 연결, 임팩트클라이밋, 소풍벤처스, 소풍임팩트, 기후테크, 기후테크스타트업, ESG, 임팩트클라이밋 네트워크, 기후네트워크, 기후기술, 기후산업, 기후정책, 기후기술생태계, 기후기술전문가, 기후테크스타트업, 스타트업",
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
