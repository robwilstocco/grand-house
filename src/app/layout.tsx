import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clínica Grand House",
  description: "Clínica Grand House - Cuidado e Acolhimento",
  openGraph: {
    title: "Clínica Grand House",
    description: "Clínica Grand House - Cuidado e Acolhimento",
    url: "https://www.clinicagrandhouse.com.br",
    siteName: "Clínica Grand House",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${interSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
