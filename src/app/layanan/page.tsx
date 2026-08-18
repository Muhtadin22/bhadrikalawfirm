import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function LayananPage() {
  const practiceAreas = [
    "Bankruptcy & Insolvency / PKPU",
    "Banking & Finance",
    "Capital Market",
    "Commercial Dispute Resolution",
    "Competition & Antitrust Law",
    "Construction & Real Estate",
    "Corporate Restructuring",
    "Criminal Defense & White-Collar Crime",
    "Data Privacy & Cybersecurity",
    "Employment & Labor Law",
    "Energy & Natural Resources",
    "Environmental, Social & Governance (ESG)",
    "Family & Inheritance Law",
    "Fintech & Blockchain Regulation",
    "Foreign Direct Investment (PMA)",
    "Insurance & Reinsurance",
    "Intellectual Property (IP)",
    "Maritime, Shipping & Aviation",
    "Media, Telecom & Technology (TMT)",
    "Medical & Healthcare Law",
    "Mining & Mineral Resources",
    "New & Renewable Energy",
    "Oil & Gas",
    "Public Policy & Government Relations",
    "Tax Law & Customs",
    "Trade, WTO & International Trade",
    "Venture Capital & Startups",
    "Mergers & Acquisitions (M&A)",
    "General Corporate Retainer"
  ];

  return (
    <main className="font-sans text-charcoal bg-off-white min-h-screen flex flex-col">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative bg-navy-deep pt-28 pb-36 px-6 text-center overflow-hidden border-b-8 border-gold-metallic">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-metallic/10 rounded-full blur-[140px] -translate-y-1/3 translate-x-1/4"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-metallic/30 bg-gold-metallic/5 text-gold-metallic text-xs font-bold tracking-widest uppercase">
            Cakupan Layanan Hukum
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Solusi Hukum Komprehensif & <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-metallic to-gold-soft">Strategis Berstandar Global</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Bhadrika Byakta Law Firm menghadirkan keahlian lintas sektor untuk mendampingi korporasi, institusi, dan klien privat dalam menghadapi tantangan hukum paling kompleks sekalipun.
          </p>
        </div>
      </section>

      {/* 2. KATEGORI LAYANAN UTAMA (5 PILAR) */}
      <section className="py-24 px-6 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold-metallic font-bold tracking-widest uppercase text-xs mb-2 block">Pilar Keahlian Utama</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-deep">5 Modul Layanan Utama Firma</h2>
            <p className="text-charcoal/70 max-w-xl mx-auto mt-2">Fondasi penanganan perkara yang ditangani langsung oleh para partner spesialis berpengalaman.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dispute Resolution & Arbitration",
                desc: "Penyelesaian sengketa komersial melalui jalur negosiasi tingkat tinggi, mediasi, arbitrase nasional (BANI), hingga arbitrase internasional dengan strategi kemenangan yang taktis."
              },
              {
                title: "Litigation & Investigation",
                desc: "Pendampingan litigasi penuh di peradilan perdata dan pidana, pengawalan kasus white-collar crime, serta investigasi internal korporasi secara rahasia dan aman."
              },
              {
                title: "Intellectual Property",
                desc: "Perlindungan komprehensif Hak Kekayaan Intelektual termasuk pendaftaran paten, merek dagang, hak cipta, rahasia dagang, serta penyelesaian sengketa pembajakan."
              },
              {
                title: "Corporate & Compliance",
                desc: "Pengelolaan tata kelola perusahaan harian, aksi korporasi strategis seperti M&A, restrukturisasi, penanaman modal asing (PMA), hingga audit kepatuhan regulasi sektoral."
              },
              {
                title: "Retainer & General Counsel Services",
                desc: "Layanan penasihat hukum tetap berdedikasi tinggi yang siaga mengawal operasional bisnis, peninjauan kontrak rutin, dan mitigasi risiko hukum harian perusahaan."
              }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-off-white p-8 rounded-2xl border border-gray-200 hover:border-gold-metallic transition-all shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-gold-metallic/10 rounded-lg flex items-center justify-center text-gold-metallic font-bold mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-navy-deep mb-3">{pillar.title}</h3>
                  <p className="text-charcoal/80 text-sm leading-relaxed mb-6">{pillar.desc}</p>
                </div>
                <Link href="/kontak" className="text-gold-metallic font-bold text-xs uppercase tracking-wider flex items-center gap-1 hover:underline">
                  Konsultasikan Pilar Ini <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DAFTAR LENGKAP AREA PRAKTIK (28+ PRACTICE AREAS) */}
      <section className="py-24 px-6 bg-off-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold-metallic font-bold tracking-widest uppercase text-xs mb-2 block">Spektrum Spesialisasi</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-deep">Daftar Lengkap 28+ Area Praktik</h2>
            <p className="text-charcoal/70 max-w-xl mx-auto mt-2">Setiap bidang ditangani oleh divisi khusus yang menguasai regulasi terbaru secara mendalam.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {practiceAreas.map((area, index) => (
              <Link
                key={index}
                href={`/layanan/detail?area=${encodeURIComponent(area.toLowerCase().replace(/[\s/]+/g, '-'))}`}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-gold-metallic hover:shadow-md transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold-metallic group-hover:scale-125 transition-transform"></span>
                  <span className="font-bold text-navy-deep text-sm group-hover:text-gold-metallic transition-colors">{area}</span>
                </div>
                <span className="text-gray-400 group-hover:text-gold-metallic transition-colors text-sm">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SUB-HALAMAN DETAIL SERVICE & STUDI KASUS */}
      <section className="py-20 px-6 bg-navy-deep text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <span className="text-gold-metallic font-bold tracking-widest uppercase text-xs mb-2 block">Transparansi Penanganan Perkara</span>
            <h2 className="text-3xl font-extrabold mb-4">Butuh Penjelasan Cakupan & Studi Kasus Spesifik?</h2>
            <p className="text-gray-300 max-w-xl text-sm leading-relaxed">
              Setiap sub-halaman area praktik kami dilengkapi dengan rincian ruang lingkup layanan, metodologi penanganan risiko, serta rangkuman studi kasus sukses yang pernah diselesaikan oleh tim kami.
            </p>
          </div>
          <Link href="/cases" className="bg-gradient-to-r from-gold-metallic to-gold-soft text-navy-deep font-bold py-4 px-8 rounded-lg hover:shadow-[0_0_20px_rgba(200,169,81,0.4)] transition-all whitespace-nowrap">
            Read Our Cases & Portfolio
          </Link>
        </div>
      </section>

      {/* 5. FOOTER */}

    </main>
  );
}