import type { Metadata } from "next";
import { Suspense } from "react";
import { Unbounded, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LaunchBanner } from "@/components/shared/launch-banner";
import { YandexMetrika } from "@/components/shared/yandex-metrika";
import { JivoChat } from "@/components/shared/jivo-chat";

const heading = Unbounded({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "WarmTalk — психолог рядом, когда он действительно нужен",
  description:
    "Сервис мгновенной психологической помощи по подписке. Одна кнопка — и через минуту вы говорите с психологом. 5–15 минут, когда это действительно нужно.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${heading.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Suspense fallback={null}>
          <YandexMetrika />
        </Suspense>
        <LaunchBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <JivoChat />
      </body>
    </html>
  );
}
