import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import BottomBar from "@/components/orgarnisms/BottomBar";

const notoSansKr = Noto_Sans_KR({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "개쩌는 메모앱",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={notoSansKr.className + " bg-stone-100"}>{children}</body>
    </html>
  );
}
