import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="font-sans text-charcoal bg-off-white">
      
      <Navbar />

      {/* 1. HERO BANNER / HEADER UTAMA */}
      <section className="relative bg-gradient-to-b from-navy-deep to-navy text-white px-6 pt-24 pb-40 flex flex-col items-center text-center overflow-hidden">
        {/* Tekstur Subtle */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-metallic/30 bg-gold-metallic/5 text-gold-soft text-sm font-semibold tracking-widest uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gold-metallic animate-pulse"></span>
            Hotline: +62 (21) 812-3456 / WhatsApp: +62 811-9876-5432
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.15] mb-6 tracking-tight">
            BHADRIKA BYAKTA LAW FIRM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-metallic to-gold-soft">Premium and Professional Legal Solutions in Indonesia</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Menghadirkan solusi hukum tingkat tinggi untuk korporasi dan individu dengan ketajaman analisis, integritas mutlak, dan perlindungan strategis.
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
      <section className="relative z-20 -mt-16 px-6 max-w-5xl mx-auto mb-16">
        <div className="bg-navy p-6 rounded-xl shadow-xl border border-gold-metallic/30 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gold-metallic/20 border border-gold-metallic rounded-lg flex items-center justify-center flex-shrink-0 text-gold-metallic">
              🏆
            </div>
            <div>
              <span className="text-xs text-gold-metallic font-semibold tracking-widest uppercase">Penghargaan Terbaru</span>
              <h4 className="text-lg font-bold">1st Place Largest Litigation Practice of the Year — Hukumonline & In-House Counsel Awards</h4>
            </div>
          </div>
          <Link href="/awards" className="text-xs font-bold uppercase tracking-wider text-gold-soft border-b border-gold-soft pb-1 hover:text-white transition">
            Lihat Semua Penghargaan →
          </Link>
        </div>
      </section>

      {/* 3. QUICK ACCESS CARDS (AKSES CEPAT NAVIGATION) */}
      <section className="px-6 max-w-6xl mx-auto mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Legal Services", desc: "Eksplorasi 5 pilar layanan hukum utama kami.", link: "/layanan", icon: "⚖️" },
            { title: "Our Lawyers", desc: "Kenali jajaran advokat & founding partner berpengalaman.", link: "/tentang", icon: "👥" },
            { title: "Awards & Recognitions", desc: "Prestasi dan pengakuan institusional berskala nasional.", link: "/awards", icon: "🌟" },
            { title: "About Us", desc: "Sejarah, visi integritas, & jangkauan klien global.", link: "/tentang", icon: "🏛️" },
          ].map((card, idx) => (
            <Link key={idx} href={card.link} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-gold-metallic transition-all group">
              <div className="text-3xl mb-3">{card.icon}</div>
              <h4 className="text-xl font-bold text-navy-deep group-hover:text-gold-metallic transition mb-2">{card.title}</h4>
              <p className="text-sm text-charcoal/70">{card.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. INTRO PROFILE / TRUSTED PROFESSIONALS */}
      <section className="py-20 bg-white px-6 border-y border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-sm text-gold-metallic font-bold tracking-widest uppercase mb-2">Tentang Kami</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy-deep mb-6">Berdiri Sejak 2011, Komitmen Tanpa Kompromi pada Integritas</h3>
          <p className="text-charcoal/80 leading-relaxed text-lg max-w-3xl mx-auto mb-8">
            Bhadrika Byakta Law Firm telah dipercaya oleh berbagai klien mulai dari individu berprofil tinggi, perusahaan nasional, hingga korporasi multinasional. Kami mendedikasikan standar keahlian tertinggi untuk memberikan kepastian dan keamanan hukum di setiap langkah bisnis Anda.
          </p>
          <div className="inline-flex gap-8 text-navy-deep font-semibold text-sm">
            <span className="flex items-center gap-2">✓ 100% Confidentiality</span>
            <span className="flex items-center gap-2">✓ Strategi Berbasis Riset</span>
            <span className="flex items-center gap-2">✓ Standar Internasional</span>
          </div>
        </div>
      </section>

      {/* 5. SECTION LEGAL SERVICES (LAYANAN HUKUM UTAMA) */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm text-gold-metallic font-bold tracking-widest uppercase mb-2">Area Praktik</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy-deep">5 Pilar Layanan Hukum Utama</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Dispute Resolution & Arbitration", desc: "Penyelesaian sengketa komersial dan arbitrase domestik maupun internasional dengan pendekatan taktis." },
            { title: "Litigation & Investigation", desc: "Pendampingan litigasi penuh di pengadilan serta investigasi hukum mendalam untuk memitigasi risiko." },
            { title: "Intellectual Property", desc: "Perlindungan aset kekayaan intelektual, paten, merek dagang, dan hak cipta komersial." },
            { title: "Corporate, Commercial & Compliance", desc: "Layanan korporasi komprehensif, aksi korporasi, merger & akuisisi, serta kepatuhan regulasi." },
            { title: "Retainer & General Counsel Services", desc: "Pendampingan hukum harian berkelanjutan sebagai penasihat hukum internal korporasi." },
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-gold-metallic transition-all duration-300 flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold text-navy-deep mb-3">{item.title}</h4>
                <p className="text-charcoal/80 leading-relaxed text-sm mb-6">{item.desc}</p>
              </div>
              <Link href="/layanan" className="text-gold-metallic font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Pelajari Lebih Lanjut <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SECTION LEGAL PLATFORMS (EKOSISTEM DIGITAL SIP) */}
      <section className="py-24 bg-navy-deep text-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm text-gold-metallic font-bold tracking-widest uppercase mb-2">Inovasi Teknologi Hukum</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ekosistem Digital Bhadrika Byakta</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">Platform digital terintegrasi yang kami kembangkan untuk mendukung efisiensi riset dan kepatuhan hukum klien.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "SIP-R Consultant", desc: "Konsultan digital khusus Kekayaan Intelektual, Kepatuhan, & Perizinan." },
              { name: "Regulasip", desc: "Database peraturan terlengkap & perangkat riset hukum digital mutakhir." },
              { name: "SIP Library", desc: "Perpustakaan literatur dan dokumentasi hukum digital eksklusif." },
              { name: "Published Books", desc: "Koleksi publikasi buku-buku hukum karya para partner firma." },
            ].map((plat, i) => (
              <div key={i} className="bg-navy p-6 rounded-xl border border-white/10 hover:border-gold-metallic/40 transition">
                <h4 className="text-gold-soft font-bold text-lg mb-2">{plat.name}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{plat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECTION LEADERSHIP / FOUNDING PARTNERS */}
      <section className="py-24 px-6 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
            <div className="w-full h-[400px] bg-off-white rounded-xl border-4 border-gray-100 shadow-lg flex items-center justify-center relative overflow-hidden">
              <span className="text-gray-400 text-sm font-medium text-center px-4">[Foto Dr. Safitri Hariyani Saptogino, S.H., M.H.]</span>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-sm text-gold-metallic font-bold tracking-widest uppercase mb-2">Leadership & Founding Partners</h2>
            <h3 className="text-3xl font-bold text-navy-deep mb-2">Dr. Safitri Hariyani Saptogino, S.H., M.H.</h3>
            <p className="text-gold-metallic font-semibold mb-6">Managing Partner & Senior Legal Expert</p>
            <p className="text-charcoal/80 leading-relaxed mb-6">
              Berpengalaman luas dalam penanganan hukum korporasi, kepatuhan, serta arbitrase komersial tingkat nasional dan internasional. Beliau aktif memimpin berbagai penyelesaian sengketa bernilai strategis tinggi serta penulisan karya ilmiah hukum di Indonesia.
            </p>
            <Link href="/tentang" className="text-navy-deep font-bold border-b-2 border-gold-metallic pb-1 hover:text-gold-metallic transition">
              Baca Profil Selengkapnya →
            </Link>
          </div>
        </div>
      </section>

      {/* 8. BANNER SUSTAINABILITY / #ECOLAWFIRM */}
      <section className="py-20 bg-gradient-to-r from-navy to-navy-deep text-white px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="inline-block bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3">#EcoLawFirm</span>
            <h3 className="text-3xl font-bold mb-3">Pionir Eco Law Firm di Indonesia</h3>
            <p className="text-gray-300 max-w-xl text-sm leading-relaxed">
              Kami mengintegrasikan prinsip keberlanjutan lingkungan dalam setiap operasional kantor dan layanan hukum korporasi berbasis hijau. Unduh laporan keberlanjutan terbaru kami.
            </p>
          </div>
          <Link href="/sustainability" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-8 rounded-lg text-sm transition shadow-md flex-shrink-0">
            Sustainability Report 2026
          </Link>
        </div>
      </section>

      {/* 9. GLOBAL PARTNERSHIPS / IN COLLABORATION WITH */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-sm text-gold-metallic font-bold tracking-widest uppercase mb-12">Global Partnerships & Affiliations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
            <div className="p-4 font-bold tracking-wider text-navy-deep text-lg border border-gray-200 rounded-lg">Aura Partners Singapore</div>
            <div className="p-4 font-bold tracking-wider text-navy-deep text-lg border border-gray-200 rounded-lg">Donaldson & Burkinshaw LLP</div>
            <div className="p-4 font-bold tracking-wider text-navy-deep text-lg border border-gray-200 rounded-lg">TAHOTA China</div>
            <div className="p-4 font-bold tracking-wider text-navy-deep text-lg border border-gray-200 rounded-lg">International Bar Association</div>
          </div>
        </div>
      </section>

      {/* 10. FEATURED INSIGHTS & MEDIA */}
      <section className="py-24 px-6 bg-off-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm text-gold-metallic font-bold tracking-widest uppercase mb-2">Publikasi & Media</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-navy-deep">Featured Insights & Media</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { category: "Artikel Hukum", title: "Dinamika Regulasi Investasi Asing Terbaru di Indonesia", date: "Agustus 2026" },
              { category: "Podcast Legal", title: "Mengatasi Sengketa Kontrak Bisnis di Era Digital", date: "Juli 2026" },
              { category: "Whitepaper", title: "Kepatuhan UU PDP dan Implikasinya bagi Korporasi", date: "Juni 2026" },
            ].map((insight, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-gold-metallic uppercase tracking-wider">{insight.category}</span>
                  <h4 className="text-lg font-bold text-navy-deep my-3">{insight.title}</h4>
                  <p className="text-xs text-gray-400">{insight.date}</p>
                </div>
                <Link href="/insights" className="mt-6 text-sm font-semibold text-navy-deep hover:text-gold-metallic transition">
                  Baca Selengkapnya →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CTA / HUBUNGI KAMI & NEWSLETTER */}
      <section className="py-24 bg-navy-deep text-white px-6">
        <div className="max-w-5xl mx-auto bg-navy p-10 rounded-2xl border border-gold-metallic/30 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-3">Diskusikan Kebutuhan Hukum Anda</h3>
            <p className="text-gray-300 text-sm mb-6">Berlangganan newsletter bulanan kami untuk mendapatkan update regulasi hukum terbaru langsung di email Anda.</p>
            <form className="flex gap-2">
              <input type="email" placeholder="Alamat Email Anda" className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-gold-metallic flex-grow" required />
              <button type="submit" className="bg-gold-metallic text-navy-deep font-bold px-5 py-3 rounded-lg text-sm hover:bg-gold-soft transition">Subscribe</button>
            </form>
          </div>
          <div className="w-full lg:w-auto text-center lg:text-right border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-10">
            <h4 className="font-bold text-gold-soft mb-2">Terhubung dengan Kami</h4>
            <p className="text-gray-300 text-sm mb-4">Ikuti profil profesional kami di LinkedIn untuk informasi karier dan wawasan hukum.</p>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-transparent border border-gold-metallic text-gold-metallic hover:bg-gold-metallic hover:text-navy-deep px-6 py-2 rounded-lg text-sm font-bold transition">
              Kunjungi LinkedIn Resmi
            </Link>
          </div>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="bg-[#08101E] pt-16 pb-8 px-6 border-t border-gold-metallic/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white tracking-wide mb-4 block">
              Bhadrika Byakta <span className="text-gold-metallic">Law Firm</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Firma hukum premium dan profesional di Indonesia yang berdedikasi memberikan solusi perlindungan hukum komprehensif dan penyelesaian sengketa berbasis standar internasional.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Navigasi</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/layanan" className="hover:text-gold-metallic transition">Legal Services</Link></li>
              <li><Link href="/tentang" className="hover:text-gold-metallic transition">Our Lawyers</Link></li>
              <li><Link href="/awards" className="hover:text-gold-metallic transition">Awards & Recognitions</Link></li>
              <li><Link href="/kontak" className="hover:text-gold-metallic transition">Contact Us</Link></li>
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
          &copy; {new Date().getFullYear()} Bhadrika Byakta Law Firm. Seluruh hak cipta dilindungi undang-undang.
        </div>
      </footer>

    </main>
  );
}