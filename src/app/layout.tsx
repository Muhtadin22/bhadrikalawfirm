import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";

// Menggunakan font Inter untuk tampilan profesional standar korporat
const inter = Inter({ subsets: ["latin"] });

// Pengaturan Metadata SEO untuk Google dan Mesin Pencari
export const metadata: Metadata = {
  title: "Firma Hukum Abil Law Firm | Attorneys at Law",
  description: "Firma hukum korporat dan privat tingkat atas di Jakarta, berdedikasi memberikan perlindungan aset, mitigasi risiko, dan penyelesaian sengketa dengan kerahasiaan absolut.",
  keywords: "pengacara jakarta, firma hukum korporat, sengketa bisnis, hukum keluarga, advokat indonesia, nusantara partners",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} bg-off-white text-charcoal min-h-screen flex flex-col antialiased selection:bg-gold-metallic selection:text-navy-deep`}>
        
        {/* Konten Utama Halaman (Fleksibel mengisi ruang) */}
        <div className="flex-grow">
          {children}
        </div>

        {/* Footer Kompleks, Interaktif & Berwibawa */}
        <Footer />

      </body>
    </html>
  );
}