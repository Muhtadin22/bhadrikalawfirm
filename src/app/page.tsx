import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="font-sans text-charcoal bg-off-white">
      
      <Navbar />

      {/* 1. HERO SECTION & HEADER UTAMA */}
      <section className="relative bg-gradient-to-b from-navy-deep to-navy text-white px-6 pt-24 pb-32 flex flex-col items-center text-center overflow-hidden">
        {/* Tekstur Subtle */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-metallic/30 bg-gold-metallic/5 text-gold-soft text-sm font-semibold tracking-widest uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gold-metallic animate-pulse"></span>
            Hotline: +62 (21) 812-3456 / WhatsApp: +62 812-3456-7890
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.15] mb-6 tracking-tight">
            BHADRIKA BYAKTA LAW FIRM <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-metallic to-gold-soft">
              Premium and Professional Legal Solutions in Indonesia
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Menghadirkan solusi hukum berstandar tinggi dengan komitmen integritas untuk melindungi kepentingan individu hingga korporasi multinasional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/cases" className="bg-gradient-to-r from-gold-metallic to-gold-soft text-navy-deep font-bold py-4 px-10 rounded-md text-lg hover:shadow-[0_0_20px_rgba(200,169,81,0.4)] hover:-translate-y-1 transition-all duration-300">
              Read Our Cases
            </Link>
            <Link href="/kontak" className="bg-transparent border border-gray-400 text-white font-medium py-4 px-10 rounded-md text-lg hover:bg-white/10 transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* 2. RECENT UPDATES / BANNER HIGHLIGHT PENGHARGAAN */}
      <section className="bg-navy border-y border-gold-metallic/20 py-8 px-6 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gold-metallic/10 border border-gold-metallic/40 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div>
              <span className="text-xs text-gold-metallic font-bold tracking-widest uppercase">Penghargaan Terbaru</span>
              <h3 className="text-lg font-bold">1st Place Largest Litigation Practice of the Year dari Hukumonline & In-House Counsel Awards</h3>
            </div>
          </div>
          <Link href="/awards" className="text-sm font-bold text-gold-soft hover:underline flex items-center gap-1">
            Lihat Semua Penghargaan <span>→</span>
          </Link>
        </div>
      </section>

      {/* 3. QUICK ACCESS CARDS (Akses Cepat Navigation) */}
      <section className="relative z-25 -mt-10 px-6 max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Legal Services", desc: "Eksplorasi 5 pilar layanan hukum utama kami.", link: "/layanan" },
            { title: "Our Lawyers", desc: "Kenali jajaran pimpinan dan partner ahli.", link: "/tentang" },
            { title: "Awards & Recognitions", desc: "Jejak prestasi dan pengakuan industri hukum.", link: "/awards" },
            { title: "About Us", desc: "Sejarah dan komitmen integritas sejak 2011.", link: "/tentang" },
          ].map((card, idx) => (
            <Link key={idx} href={card.link} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:-translate-y-1 hover:border-gold-metallic transition-all duration-300 block group">
              <h4 className="text-xl font-bold text-navy-deep group-hover:text-gold-metallic transition-colors mb-2">{card.title}</h4>
              <p className="text-sm text-charcoal/70 mb-4">{card.desc}</p>
              <span className="text-xs font-bold text-gold-metallic flex items-center gap-1">Akses Cepat <span>→</span></span>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. INTRO PROFILE / TRUSTED PROFESSIONALS */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-200 flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-sm text-gold-metallic font-bold tracking-widest uppercase mb-2">Tentang Firma</h2>
            <h3 className="text-3xl font-bold text-navy-deep mb-6">Berdiri Sejak 2011 dengan Komitmen Integritas Tinggi</h3>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              Bhadrika Byakta Law Firm telah dipercaya oleh berbagai kalangan, mulai dari klien individu, perusahaan nasional, hingga korporasi multinasional. Kami mendedikasikan keahlian hukum untuk memberikan kepastian dan keamanan perlindungan aset bisnis.
            </p>
            <p className="text-charcoal/80 leading-relaxed">
              Dengan pendekatan strategis, analisis mendalam, serta kerahasiaan mutlak, kami terus menjadi mitra tepercaya dalam menghadapi berbagai tantangan hukum kompleks di Indonesia.
            </p>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 text-center">
            <div className="bg-off-white p-6 rounded-xl border border-gray-100">
              <h4 className="text-4xl font-extrabold text-navy-deep mb-1">2011</h4>
              <p className="text-xs uppercase tracking-wider text-charcoal/60 font-semibold">Tahun Berdiri</p>
            </div>
            <div className="bg-off-white p-6 rounded-xl border border-gray-100">
              <h4 className="text-4xl font-extrabold text-navy-deep mb-1">100%</h4>
              <p className="text-xs uppercase tracking-wider text-charcoal/60 font-semibold">Kerahasiaan Klien</p>
            </div>
            <div className="bg-off-white p-6 rounded-xl border border-gray-100">
              <h4 className="text-4xl font-extrabold text-navy-deep mb-1">500+</h4>
              <p className="text-xs uppercase tracking-wider text-charcoal/60 font-semibold">Klien Korporasi & Individu</p>
            </div>
            <div className="bg-off-white p-6 rounded-xl border border-gray-100">
              <h4 className="text-4xl font-extrabold text-navy-deep mb-1">15+</h4>
              <p className="text-xs uppercase tracking-wider text-charcoal/60 font-semibold">Penghargaan Hukum</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION LEGAL SERVICES (5 Pilar Layanan Utama) */}
      <section className="py-24 px-6 bg-off-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm text-gold-metallic font-bold tracking-widest uppercase mb-2">Area Praktik</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-navy-deep">5 Pilar Layanan Hukum Utama</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Dispute Resolution & Arbitration", desc: "Penyelesaian sengketa komersial, mediasi, dan arbitrase nasional maupun internasional secara efektif." },
              { title: "Litigation & Investigation", desc: "Pendampingan litigasi penuh di pengadilan serta penanganan investigasi internal korporasi." },
              { title: "Intellectual Property", desc: "Perlindungan hak kekayaan intelektual, paten, merek dagang, dan sengketa hak cipta." },
              { title: "Corporate, Commercial & Compliance", desc: "Pengelolaan hukum korporasi harian, struktur transaksi komersial, merger & akuisisi, serta kepatuhan." },
              { title: "Retainer & General Counsel Services", desc: "Layanan penasihat hukum tetap yang siaga mengawal operasional dan mitigasi risiko bisnis Anda." }
            ].map((item, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-gold-metallic/50 transition-all duration-300">
                <div className="w-12 h-12 bg-off-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-metallic transition-colors duration-300 border border-gray-100 group-hover:border-gold-metallic">
                  <svg className="w-6 h-6 text-navy-deep group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy-deep mb-3">{item.title}</h3>
                <p className="text-charcoal/80 leading-relaxed mb-6 text-sm">{item.desc}</p>
                <Link href="/kontak" className="text-gold-metallic font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Konsultasikan Layanan <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECTION LEGAL PLATFORMS (Ekosistem Digital SIP/Bhadrika) */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm text-gold-metallic font-bold tracking-widest uppercase mb-2">Inovasi Teknologi Hukum</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy-deep">Ekosistem Digital Bhadrika Byakta</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "SIP-R Consultant", desc: "Konsultan Kekayaan Intelektual, Kepatuhan, & Perizinan berbasis teknologi digital terpadu." },
            { title: "Regulasip", desc: "Database peraturan terlengkap & pusat riset hukum digital mutakhir untuk analisis cepat." },
            { title: "SIP Library", desc: "Perperpustakaan hukum digital eksklusif untuk referensi literatur dan doktrin hukum mendalam." },
            { title: "Published Books", desc: "Koleksi publikasi buku-buku hukum karya para partner dan praktisi hukum berpengalaman." }
          ].map((plat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-gold-metallic transition-all">
              <h4 className="text-lg font-bold text-navy-deep mb-3">{plat.title}</h4>
              <p className="text-sm text-charcoal/70 leading-relaxed">{plat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. SECTION LEADERSHIP / FOUNDING PARTNERS */}
      <section className="py-24 bg-white px-6 border-y border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-gold-metallic translate-x-4 translate-y-4 rounded-xl -z-10"></div>
            <div className="w-full h-[450px] bg-off-white rounded-xl flex flex-col items-center justify-center overflow-hidden border-4 border-white shadow-xl relative">
              <span className="text-gray-400 font-medium z-10 text-center px-4">[Dr. Safitri Hariyani Saptogino, S.H., M.H.]</span>
              <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-sm text-gold-metallic font-bold tracking-widest uppercase mb-2">Leadership</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-navy-deep mb-4">Dr. Safitri Hariyani Saptogino, S.H., M.H.</h3>
            <p className="text-gold-metallic font-semibold mb-6">Founding Partner & Senior Legal Expert</p>
            <p className="text-charcoal/80 leading-relaxed mb-8 text-lg">
              Memiliki puluhan tahun pengalaman dalam penyelesaian sengketa korporasi tingkat tinggi dan hukum perdagangan internasional. Dikenal luas atas ketajaman strategi hukum serta integritas profesionalnya.
            </p>
            <Link href="/tentang" className="bg-navy-deep text-white font-bold py-3 px-8 rounded-lg hover:bg-gold-metallic hover:text-navy-deep transition-all inline-block">
              Lihat Profil Lengkap Partner
            </Link>
          </div>
        </div>
      </section>

      {/* 8. BANNER SUSTAINABILITY / #EcoLawFirm */}
      <section className="py-16 bg-navy-deep text-white px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-block px-3 py-1 rounded bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-3">
              #EcoLawFirm Pioneer
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Komitmen Keberlanjutan Lingkungan</h3>
            <p className="text-gray-300 max-w-xl text-sm leading-relaxed">
              Sebagai pionir Eco Law Firm di Indonesia, Bhadrika Byakta menerapkan operasional bebas kertas (*paperless*) dan mendukung regulasi green business dalam setiap praktik hukum.
            </p>
          </div>
          <Link href="/sustainability" className="bg-transparent border border-gold-metallic text-gold-soft px-6 py-3 rounded-lg font-bold hover:bg-gold-metallic hover:text-navy-deep transition-all whitespace-nowrap">
            Unduh Sustainability Report
          </Link>
        </div>
      </section>

      {/* 9. GLOBAL PARTNERSHIPS / IN COLLABORATION WITH */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-xs text-charcoal/60 font-bold tracking-widest uppercase mb-10">Global Partnerships & In Collaboration With</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
          <div className="p-4 border border-gray-200 rounded-lg font-bold text-navy-deep tracking-wider">Aura Partners Singapore</div>
          <div className="p-4 border border-gray-200 rounded-lg font-bold text-navy-deep tracking-wider">Donaldson & Burkinshaw LLP</div>
          <div className="p-4 border border-gray-200 rounded-lg font-bold text-navy-deep tracking-wider">TAHOTA China</div>
          <div className="p-4 border border-gray-200 rounded-lg font-bold text-navy-deep tracking-wider">International Bar Association</div>
        </div>
      </section>

      {/* 10. FEATURED INSIGHTS & MEDIA */}
      <section className="py-24 bg-off-white px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-sm text-gold-metallic font-bold tracking-widest uppercase mb-2">Publikasi & Media</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-navy-deep">Featured Insights & Media</h3>
            </div>
            <Link href="/insights" className="text-gold-metallic font-bold mt-4 md:mt-0 flex items-center gap-1 hover:underline">
              Lihat Semua Artikel & Podcast <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { cat: "Analisis Hukum", title: "Dampak Pembaruan UU Korporasi terhadap Struktur Kepemilikan Saham", date: "Agustus 2026" },
              { cat: "Artikel Industri", title: "Mitigasi Risiko Kontrak Dagang Internasional di Era Digital", date: "Juli 2026" },
              { cat: "Podcast & Video", title: "Ep. 14: Menyikapi Sengketa Kekayaan Intelektual Lintas Batas", date: "Juni 2026" }
            ].map((ins, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:border-gold-metallic transition-all flex flex-col justify-between">
                <div>
                  <span className="text-xs text-gold-metallic font-bold uppercase tracking-wider">{ins.cat}</span>
                  <h4 className="text-xl font-bold text-navy-deep mt-2 mb-4">{ins.title}</h4>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-500 pt-4 border-t border-gray-100">
                  <span>{ins.date}</span>
                  <Link href="/insights" className="text-navy-deep font-bold hover:text-gold-metallic">Baca Selengkapnya</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CTA / HUBUNGI KAMI & NEWSLETTER */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 flex flex-col lg:flex-row">
          
          <div className="w-full lg:w-2/5 bg-navy-deep text-white p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-metallic rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Mari Berdiskusi Mengenai Kasus Anda</h2>
              <p className="text-gray-300 mb-8 text-sm">Berikan rincian singkat, dan tim kami akan segera menghubungi Anda. Kerahasiaan 100% dilindungi asas *Attorney-Client Privilege*.</p>
              
              <div className="space-y-4 text-sm">
                <p className="text-gold-metallic font-semibold">Kunjungi Tautan Profesional Kami:</p>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-gold-metallic hover:text-navy-deep transition-all font-medium">
                  Ikuti LinkedIn Bhadrika Byakta Law Firm
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/5 p-12">
            <h3 className="text-2xl font-bold text-navy-deep mb-6">Formulir Kontak & Newsletter</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-charcoal mb-1">Nama Lengkap</label>
                  <input type="text" className="w-full px-4 py-3 bg-off-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-metallic transition" placeholder="Nama Anda" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-charcoal mb-1">Email / WhatsApp</label>
                  <input type="text" className="w-full px-4 py-3 bg-off-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-metallic transition" placeholder="email@domain.com" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-charcoal mb-1">Pesan / Uraian Perkara</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-off-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-metallic transition resize-none" placeholder="Tuliskan pesan atau konsultasi Anda..."></textarea>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="newsletter" className="rounded text-gold-metallic focus:ring-gold-metallic" />
                <label htmlFor="newsletter" className="text-xs text-charcoal/70">Berlangganan newsletter pembaruan hukum bulanan kami.</label>
              </div>
              <button type="submit" className="w-full bg-navy-deep text-gold-metallic font-bold py-4 rounded-lg text-lg hover:bg-[#13233A] transition-all shadow-md">
                Kirim Pesan & Berlangganan
              </button>
            </form>
          </div>

        </div>
      </section>

    </main>
  );
} 

git add .
git commit -m "fix: update konten halaman terbaru"
git push origin main