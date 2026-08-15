import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Menggunakan font Inter untuk tampilan yang profesional dan modern
const inter = Inter({ subsets: ["latin"] });

// Mengatur Meta Data SEO untuk website kantor hukum Anda
export const metadata: Metadata = {
  title: "Firma Hukum Nusantara & Partners | Pengacara Jakarta",
  description: "Firma Hukum Nusantara & Partners mendampingi pemilik bisnis dan individu di Jakarta menyelesaikan sengketa dan urusan hukum secara profesional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}