import React from 'react';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function TimKamiPage() {
  // Hierarki Tim Hukum
  const leadership = [
    {
      name: "Bpk. R. Nusantara, S.H., M.H.",
      role: "Founding & Managing Partner",
      level: "Pimpinan Tertinggi Firma",
      spec: "Litigasi Komersial & Strategi Korporasi",
      desc: "Memimpin keseluruhan operasional firma dengan pengalaman lebih dari 15 tahun menangani sengketa bisnis skala nasional dan internasional."
    }
  ];

  const partners = [
    {
      name: "Ibu Dian Sastrowardoyo, S.H., LL.M.",
      role: "Senior Partner (Corporate Law)",
      level: "Mitra Senior",
      spec: "Merger, Akuisisi & Pasar Modal",
      desc: "Pakar hukum korporat lulusan universitas luar negeri yang memegang kendali penuh atas divisi hukum perusahaan dan restrukturisasi aset."
    },
    {
      name: "Bpk. Arya Pradana, S.H., M.Kn.",
      role: "Partner (Litigation & Dispute Resolution)",
      level: "Mitra Firma",
      spec: "Arbitrase Internasional & Sengketa Kontrak",
      desc: "Ahli strategi ruang sidang dan arbitrase dengan rekam jejak penyelesaian perkara perdata dan niaga yang sangat dihormati."
    }
  ];

  const associates = [
    {
      name: "Ibu Ratih Pratiwi, S.H.",
      role: "Senior Associate & Advokat",
      level: "Tim Advokat Senior",
      spec: "Hukum Keluarga & Manajemen Waris Privat",
      desc: "Berdedikasi tinggi menangani perkara privat klien dengan kerahasiaan penuh, pendekatan empatik, dan mediasi tertutup."
    },
    {
      name: "Bpk. Kevin Santoso, S.H., LL.M.",
      role: "Associate & Advokat",
      level: "Tim Advokat Pelaksana",
      spec: "Hukum Ketenagakerjaan & Perizinan Usaha",
      desc: "Aktif mendampingi klien korporasi dalam penyusunan kontrak kerja, audit legalitas, serta penyelesaian sengketa hubungan industrial."
    }
  ];

  return (
    <main className="font-sans text-charcoal bg-off-white min-h-screen flex flex-col">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative bg-navy-deep pt-28 pb-36 px-6 text-center overflow-hidden border-b-8 border-gold-metallic">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-metallic/10 rounded-full blur-[140px] translate-x-1/4 -translate-y-1/4"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-metallic/30 bg-gold-metallic/5 text-gold-metallic text-xs font-bold tracking-widest uppercase">
            Struktur Organisasi Advokat
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Dewan Pimpinan & <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-metallic to-gold-soft">Tim Advokat Ahli</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Didukung oleh jajaran pimpinan berpengalaman luas dan advokat spesialis di bidangnya masing-masing untuk memberikan pembelaan komprehensif.
          </p>
        </div>
      </section>

      {/* 2. KONTEN UTAMA - HIRARKI TIM */}
      <section className="py-24 px-6 flex-grow">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* TIER 1: MANAGING PARTNER (PIMPINAN TERTINGGI) */}
          <div>
            <div className="border-b border-gray-300 pb-4 mb-10 flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-navy-deep tracking-wide uppercase">Pimpinan Eksekutif Firma</h2>
              <span className="text-xs font-bold text-gold-metallic bg-gold-metallic/10 px-3 py-1.5 rounded uppercase tracking-wider">Tier 1: Leadership</span>
            </div>

            {leadership.map((person, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 lg:p-12 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden group hover:border-gold-metallic transition-colors">
                <div className="absolute top-0 left-0 w-2 h-full bg-gold-metallic"></div>
                <div className="w-40 h-44 bg-navy-deep/5 rounded-xl border border-gray-300 flex items-center justify-center text-gray-400 font-medium text-xs text-center p-2 flex-shrink-0">
                  [Foto Managing Partner]
                </div>
                <div className="flex-grow text-center md:text-left">
                  <span className="inline-block px-3 py-1 bg-navy-deep text-gold-metallic font-bold text-xs rounded-md mb-2 uppercase tracking-widest">
                    {person.role}
                  </span>
                  <h3 className="text-3xl font-extrabold text-navy-deep mb-2">{person.name}</h3>
                  <p className="text-sm font-semibold text-charcoal/70 mb-4">Spesialisasi Utama: <span className="text-navy-deep">{person.spec}</span></p>
                  <p className="text-charcoal/80 text-base leading-relaxed">{person.desc}</p>
                  <div className="mt-6">
                    <Link href="/kontak" className="inline-block bg-navy-deep text-gold-metallic text-sm font-bold py-2.5 px-6 rounded-lg hover:bg-[#13233A] transition-colors shadow-sm">
                      Jadwalkan Konsultasi dengan Beliau
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* TIER 2: SENIOR PARTNER & PARTNER (MITRA FIRMA) */}
          <div>
            <div className="border-b border-gray-300 pb-4 mb-10 flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-navy-deep tracking-wide uppercase">Dewan Mitra (Partners)</h2>
              <span className="text-xs font-bold text-gold-metallic bg-gold-metallic/10 px-3 py-1.5 rounded uppercase tracking-wider">Tier 2: Partners</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partners.map((person, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-200 p-8 flex flex-col justify-between hover:shadow-xl hover:border-gold-metallic transition-all duration-300">
                  <div>
                    <div className="w-24 h-24 bg-off-white rounded-xl border border-gray-300 flex items-center justify-center text-gray-400 font-semibold text-xs text-center p-2 mb-6">
                      [Foto Partner]
                    </div>
                    <span className="text-gold-metallic font-bold text-xs uppercase tracking-widest block mb-1">{person.role}</span>
                    <h3 className="text-2xl font-bold text-navy-deep mb-2">{person.name}</h3>
                    <p className="text-xs font-semibold text-charcoal/70 mb-3">Bidang: {person.spec}</p>
                    <p className="text-charcoal/70 text-sm leading-relaxed mb-6">{person.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <Link href="/kontak" className="text-navy-deep font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:text-gold-metallic transition-colors">
                      Hubungi Tim Beliau <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TIER 3: SENIOR ASSOCIATE & ADVOKAT (TIM PELAKSANA) */}
          <div>
            <div className="border-b border-gray-300 pb-4 mb-10 flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-navy-deep tracking-wide uppercase">Tim Advokat & Associate</h2>
              <span className="text-xs font-bold text-gold-metallic bg-gold-metallic/10 px-3 py-1.5 rounded uppercase tracking-wider">Tier 3: Advocates & Associates</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {associates.map((person, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-200 p-8 flex flex-col justify-between hover:shadow-xl hover:border-gold-metallic transition-all duration-300">
                  <div>
                    <div className="w-24 h-24 bg-off-white rounded-xl border border-gray-300 flex items-center justify-center text-gray-400 font-semibold text-xs text-center p-2 mb-6">
                      [Foto Advokat]
                    </div>
                    <span className="text-gold-metallic font-bold text-xs uppercase tracking-widest block mb-1">{person.role}</span>
                    <h3 className="text-2xl font-bold text-navy-deep mb-2">{person.name}</h3>
                    <p className="text-xs font-semibold text-charcoal/70 mb-3">Bidang: {person.spec}</p>
                    <p className="text-charcoal/70 text-sm leading-relaxed mb-6">{person.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <Link href="/kontak" className="text-navy-deep font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:text-gold-metallic transition-colors">
                      Diskusi Kasus <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#08101E] pt-16 pb-8 px-6 border-t border-gold-metallic/20 mt-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white tracking-wide mb-4 block">
              Nusantara <span className="text-gold-metallic">& Partners</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Firma hukum kelas atas yang berdedikasi memberikan solusi perlindungan aset dan penyelesaian sengketa dengan standar kerahasiaan dan profesionalisme internasional.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Navigasi</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/layanan" className="hover:text-gold-metallic transition">Area Praktik</Link></li>
              <li><Link href="/tentang" className="hover:text-gold-metallic transition">Profil Advokat</Link></li>
              <li><Link href="/tim" className="hover:text-gold-metallic transition">Tim Kami</Link></li>
              <li><Link href="/kontak" className="hover:text-gold-metallic transition">Kontak & Lokasi</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Informasi Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-gold-metallic transition">Kebijakan Privasi</Link></li>
              <li><Link href="#" className="hover:text-gold-metallic transition">Syarat & Ketentuan</Link></li>
              <li><Link href="#" className="hover:text-gold-metallic transition">Disclaimer Hukum</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto text-center border-t border-white/10 pt-8 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Firma Hukum Nusantara & Partners. Seluruh hak cipta dilindungi undang-undang.
        </div>
      </footer>
    </main>
  );
}