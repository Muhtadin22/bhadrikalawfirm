'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000); // Reset setelah 5 detik
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-deep text-white relative overflow-hidden border-t-4 border-gold-metallic">
      
      {/* Ornamen Latar Belakang Elegan */}
      <div className="absolute inset-0 bg-[radial-gradient(#C8A951_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none"></div>

      {/* TOP SECTION: NEWSLETTER & VIP CONSULTATION BANNER */}
      <div className="border-b border-white/10 py-12 px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-gold-metallic font-bold uppercase tracking-widest text-xs mb-2 block">Buletin & Wawasan Hukum</span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">Dapatkan Pembaruan Regulasi & Analisis Korporat</h3>
            <p className="text-gray-400 text-sm mt-1">Daftarkan email korporat Anda untuk menerima ringkasan hukum bulanan langsung dari para partner kami.</p>
          </div>

          <div className="w-full lg:w-auto">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email korporat..." 
                className="px-5 py-3.5 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-metallic min-w-[280px]"
                required 
              />
              <button 
                type="submit" 
                className="bg-gradient-to-r from-gold-metallic to-gold-soft text-navy-deep font-bold px-6 py-3.5 rounded-lg hover:shadow-[0_0_15px_rgba(200,169,81,0.5)] transition-all whitespace-nowrap"
              >
                {subscribed ? 'Berhasil Terdaftar ✓' : 'Berlangganan'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER GRID */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 relative z-10">
        
        {/* Kolom 1 & 2: Brand & Tentang (Span 2) */}
        <div className="lg:col-span-2 space-y-6">
          <Link href="/" className="group flex flex-col justify-center">
            <span className="text-2xl font-extrabold text-white tracking-wide">
              Nusantara <span className="font-light text-gold-metallic">& Partners</span>
            </span>
            <span className="text-[0.65rem] text-gray-400 tracking-[0.3em] uppercase mt-0.5">
              Attorneys at Law
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Firma hukum korporat dan privat tingkat atas (*Tier-1*) di Jakarta, berdedikasi memberikan perlindungan aset, mitigasi risiko, serta penyelesaian sengketa dengan standar kerahasiaan absolut (*Attorney-Client Privilege*).
          </p>
          
          {/* Status Keamanan & Lisensi */}
          <div className="flex items-center gap-3 pt-2">
            <div className="px-3 py-1.5 bg-emerald-950/80 border border-emerald-500/30 rounded-md flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-semibold text-emerald-300">Secure Client Portal Active</span>
            </div>
            <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md">
              <span className="text-xs font-semibold text-gold-metallic">Lisensi PERADI & HKPI</span>
            </div>
          </div>
        </div>

        {/* Kolom 3: Area Praktik */}
        <div>
          <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-xs border-l-2 border-gold-metallic pl-3">Area Praktik</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/layanan" className="hover:text-gold-metallic transition-colors flex items-center gap-2"><span>›</span> Litigasi Bisnis</Link></li>
            <li><Link href="/layanan" className="hover:text-gold-metallic transition-colors flex items-center gap-2"><span>›</span> Hukum Korporasi & M&A</Link></li>
            <li><Link href="/layanan" className="hover:text-gold-metallic transition-colors flex items-center gap-2"><span>›</span> Arbitrase Komersial</Link></li>
            <li><Link href="/layanan" className="hover:text-gold-metallic transition-colors flex items-center gap-2"><span>›</span> Hukum Keluarga & Waris</Link></li>
            <li><Link href="/layanan" className="hover:text-gold-metallic transition-colors flex items-center gap-2"><span>›</span> Restrukturisasi Aset</Link></li>
          </ul>
        </div>

        {/* Kolom 4: Navigasi Firma */}
        <div>
          <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-xs border-l-2 border-gold-metallic pl-3">Firma Hukum</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/tentang" className="hover:text-gold-metallic transition-colors flex items-center gap-2"><span>›</span> Profil & Sejarah</Link></li>
            <li><Link href="/tim" className="hover:text-gold-metallic transition-colors flex items-center gap-2"><span>›</span> Tim Advokat</Link></li>
            <li><Link href="/keunggulan" className="hover:text-gold-metallic transition-colors flex items-center gap-2"><span>›</span> Nilai & Keunggulan</Link></li>
            <li><Link href="/testimoni" className="hover:text-gold-metallic transition-colors flex items-center gap-2"><span>›</span> Rekam Jejak Klien</Link></li>
            <li><Link href="/kontak" className="hover:text-gold-metallic transition-colors flex items-center gap-2"><span>›</span> Hubungi Kami</Link></li>
          </ul>
        </div>

        {/* Kolom 5: Kontak Kantor Pusat */}
        <div>
          <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-xs border-l-2 border-gold-metallic pl-3">Kantor Pusat</h4>
          <div className="space-y-3 text-sm text-gray-400">
            <p className="leading-relaxed">
              <strong className="text-white block mb-1">Gedung Sudirman Tower, Lt. 15</strong>
              Jl. Jend. Sudirman Kav. 50, Jakarta Selatan 12910
            </p>
            <p className="pt-2">
              <strong className="text-white block mb-1">Korespondensi</strong>
              Email: legal@nusantarapartners.com<br/>
              Telp: +62 (21) 812-3456
            </p>
          </div>
        </div>

      </div>

      {/* BOTTOM LEGAL BAR & INTERACTIVE BACK TO TOP */}
      <div className="bg-[#08101E] border-t border-white/10 py-8 px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          
          {/* Copyright & Disclaimer */}
          <div className="text-center md:text-left space-y-1">
            <p>&copy; {new Date().getFullYear()} Nusantara & Partners Attorneys at Law. Seluruh hak cipta dilindungi.</p>
            <p className="text-[11px] text-gray-500">Website ini bersifat informatif dan bukan merupakan bentuk nasihat hukum resmi sebelum penandatanganan surat kuasa.</p>
          </div>

          {/* Quick Legal Links & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <Link href="#" className="hover:text-gold-metallic transition-colors">Kebijakan Privasi</Link>
              <Link href="#" className="hover:text-gold-metallic transition-colors">Syarat Layanan</Link>
              <Link href="#" className="hover:text-gold-metallic transition-colors">Disclaimer</Link>
            </div>

            {/* Tombol Interaktif Kembali ke Atas */}
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gold-metallic hover:bg-gold-metallic hover:text-navy-deep transition-all duration-300 shadow-md group"
              aria-label="Kembali ke atas"
              title="Kembali ke atas"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
}