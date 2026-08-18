import React from 'react';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function LayananPage() {
  const coreServices = [
    {
      category: "Litigasi & Sengketa",
      title: "Litigasi Bisnis & Komersial",
      subtitle: "Penyelesaian Sengketa Niaga Melalui Jalur Hukum & Alternatif (ADR)",
      desc: "Menghadirkan representasi hukum yang agresif namun terukur dalam menghadapi sengketa komersial bernilai tinggi, klaim wanprestasi, penagihan piutang korporasi, hingga arbitrase nasional dan internasional.",
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      complexity: "Tinggi (High Stakes)",
      duration: "Variatif (3 - 12 Bulan)",
      features: [
        "Sengketa Kontrak & Wanprestasi Komersial",
        "Penyelesaian Konflik Internal Pemegang Saham",
        "Arbitrase (BANI & Lembaga Internasional)",
        "Gugatan Kepailitan & PKPU Perusahaan"
      ]
    },
    {
      category: "Hukum Korporasi",
      title: "Hukum Perusahaan (Corporate & M&A)",
      subtitle: "Mitigasi Risiko & Struktur Hukum Ekspansi Bisnis Modern",
      desc: "Pendampingan hukum menyeluruh untuk memastikan tata kelola perusahaan yang bersih dari risiko hukum, memfasilitasi aksi korporasi besar seperti merger, akuisisi, dan kepatuhan regulasi penanaman modal.",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      complexity: "Strategis Korporat",
      duration: "Terstruktur / Berkelanjutan",
      features: [
        "Merger, Akuisisi & Konsolidasi Usaha",
        "Legal Due Audit (LDD) & Uji Tuntas Hukum",
        "Perancangan Kontrak Dagang Internasional",
        "Kepatuhan Hukum & Perizinan OSS RBA"
      ]
    },
    {
      category: "Klien Privat & Kekayaan",
      title: "Hukum Keluarga & Wealth Management",
      subtitle: "Perlindindungan Aset Keluarga & Penyelesaian Sensitif Privat",
      desc: "Memberikan pendampingan hukum berstandar kerahasiaan absolut (Attorney-Client Privilege) untuk penataan aset keluarga, sengketa waris lintas generasi, dan mediasi penyelesaian perkara keluarga.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      complexity: "Sangat Rahasia & Sensitif",
      duration: "Cepat Melalui Mediasi",
      features: [
        "Penyusunan Wasiat & Pembagian Aset Waris",
        "Mediasi Perceraian Tertutup & Hak Asuh",
        "Perlindungan Aset Pranikah (Prenuptial Agreement)",
        "Penyelesaian Sengketa Kepemilikan Properti Privat"
      ]
    }
  ];

  const faqs = [
    {
      q: "Bagaimana cara firma memastikan kerahasiaan dokumen sengketa saya?",
      a: "Kami memegang teguh asas kerahasiaan mutlak (Attorney-Client Privilege) yang dilindungi oleh Undang-Undang Advokat. Seluruh dokumen fisik maupun digital disimpan dengan enkripsi militer dan protokol akses terbatas."
    },
    {
      q: "Apakah seluruh perkara harus diselesaikan melalui jalur pengadilan (Litigasi)?",
      a: "Tidak. Prinsip utama kami adalah mitigasi risiko. Jika sengketa dapat diselesaikan secara lebih cepat, efisien, dan menjaga reputasi melalui jalur non-litigasi (somasi, negosiasi, atau mediasi), maka opsi tersebut akan menjadi prioritas pertama."
    },
    {
      q: "Bagaimana sistem perhitungan honorarium (fee) jasa hukum di Nusantara & Partners?",
      a: "Kami menerapkan transparansi penuh. Skema biaya dapat berupa Retainer Fee (bulanan untuk korporasi), Hourly Rate, maupun Success Fee yang disepakati secara profesional dan tertulis di awal penugasan tanpa ada biaya tersembunyi."
    }
  ];

  return (
    <main className="font-sans text-charcoal bg-off-white min-h-screen flex flex-col">
      <Navbar />

      {/* 1. PAGE HEADER */}
      <section className="relative bg-navy-deep pt-32 pb-40 px-6 text-center overflow-hidden border-b-8 border-gold-metallic">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#13233A_1px,transparent_1px),linear-gradient(to_bottom,#13233A_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-metallic/30 bg-gold-metallic/5 text-gold-metallic text-xs font-bold tracking-widest uppercase">
            Direktori Praktik Hukum Komprehensif
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Keahlian Hukum Presisi Tinggi <br/>Untuk <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-metallic to-gold-soft">Perlindungan Optimal</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Menghadirkan pembelaan berlapis dengan standar operasional mutakhir, dirancang khusus untuk menghadapi tantangan hukum bisnis maupun privat yang paling kompleks.
          </p>
        </div>
      </section>

      {/* 2. SERVICES DOSSIER CARDS (Main Section) */}
      <section className="px-6 -mt-24 pb-24 z-25 relative">
        <div className="max-w-6xl mx-auto space-y-12">
          {coreServices.map((srv, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 lg:p-12 group hover:border-gold-metallic transition-all duration-500 relative overflow-hidden">
              
              {/* Garis Aksen Vertikal Emas */}
              <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-gold-metallic to-gold-soft"></div>

              <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
                
                {/* Bagian Kiri: Deskripsi Utama */}
                <div className="lg:w-7/12">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-navy-deep text-gold-metallic font-bold text-xs rounded uppercase tracking-wider">
                      {srv.category}
                    </span>
                    <span className="text-xs font-semibold text-charcoal/60">Tingkat Kompleksitas: <span className="text-navy-deep font-bold">{srv.complexity}</span></span>
                  </div>
                  
                  <h2 className="text-3xl font-extrabold text-navy-deep mb-3 leading-tight">{srv.title}</h2>
                  <h3 className="text-sm font-bold text-gold-metallic uppercase tracking-widest mb-4">{srv.subtitle}</h3>
                  <p className="text-charcoal/80 leading-relaxed text-base font-normal mb-8">{srv.desc}</p>

                  <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                    <div className="text-xs bg-off-white px-4 py-2 rounded-lg border border-gray-200">
                      <span className="block font-bold text-navy-deep">Estimasi Penanganan</span>
                      <span className="text-charcoal/70">{srv.duration}</span>
                    </div>
                    <div className="text-xs bg-off-white px-4 py-2 rounded-lg border border-gray-200">
                      <span className="block font-bold text-navy-deep">Standar Keamanan</span>
                      <span className="text-charcoal/70">Attorney-Client Privilege</span>
                    </div>
                  </div>
                </div>

                {/* Bagian Kanan: Cakupan & Tombol Aksi */}
                <div className="lg:w-5/12 w-full bg-off-white p-8 rounded-xl border border-gray-200 flex flex-col justify-between h-full">
                  <div>
                    <h4 className="text-xs font-bold text-navy-deep uppercase tracking-widest mb-4 border-b border-gray-300 pb-2">Cakupan Penanganan Utama:</h4>
                    <ul className="space-y-3 mb-8">
                      {srv.features.map((feat, i) => (
                        <li key={i} className="flex items-start text-sm font-semibold text-charcoal/80">
                          <svg className="w-5 h-5 text-gold-metallic mr-2.5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/kontak" className="block text-center w-full py-3.5 px-4 bg-navy-deep text-gold-metallic font-bold rounded-lg hover:bg-[#13233A] hover:text-white transition-all shadow-md uppercase tracking-wider text-xs">
                    Konsultasi Layanan Ini
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. METODOLOGI & PENDEKATAN FIRMA */}
      <section className="py-24 bg-navy px-6 text-white border-y border-navy-deep">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold-metallic font-bold tracking-widest uppercase text-xs mb-2 block">Standar Operasional Prosedur</span>
            <h2 className="text-3xl md:text-4xl font-bold">4 Tahapan Metodologi Penanganan Kasus</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Asesmen Presisi", desc: "Menganalisis anatomi kasus secara mendalam guna memetakan risiko hukum dan peluang penyelesaian di awal." },
              { step: "02", title: "Strategi Mitigasi", desc: "Merumuskan langkah taktis yang berorientasi pada efisiensi anggaran, perlindungan aset, dan pengamanan reputasi." },
              { step: "03", title: "Eksekusi Eksekutif", desc: "Tindakan hukum terarah, baik melalui somasi strategis, negosiasi tingkat tinggi, maupun litigasi agresif." },
              { step: "04", title: "Finalisasi & Pemulihan", desc: "Memastikan seluruh putusan atau kesepakatan tereksekusi sempurna untuk memulihkan hak-hak klien sepenuhnya." }
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 border border-white/10 rounded-xl bg-navy-deep/60 hover:bg-navy-deep transition-colors">
                <div className="text-5xl font-black text-white/5 absolute top-4 right-4 pointer-events-none select-none">{item.step}</div>
                <h3 className="text-gold-metallic font-bold text-xl mb-3 relative z-10">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION (Frequently Asked Questions) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold-metallic font-bold tracking-widest uppercase text-xs mb-2 block">Informasi Transparan</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-deep">Pertanyaan Umum Seputar Layanan</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-off-white p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-navy-deep mb-3 flex items-start gap-3">
                  <span className="text-gold-metallic font-black">Q.</span> {faq.q}
                </h3>
                <p className="text-charcoal/80 text-base leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
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