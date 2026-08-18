import React from 'react';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function TentangPage() {
  return (
    <main className="font-sans text-charcoal bg-off-white min-h-screen flex flex-col">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative bg-navy-deep pt-28 pb-36 px-6 text-center overflow-hidden border-b-8 border-gold-metallic">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-metallic/10 rounded-full blur-[140px] -translate-y-1/3 translate-x-1/4"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-metallic/30 bg-gold-metallic/5 text-gold-metallic text-xs font-bold tracking-widest uppercase">
            Tentang Kami
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Membangun Warisan Kepercayaan & <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-metallic to-gold-soft">Kepastian Hukum</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Mengenal lebih dekat profil korporasi, perjalanan sejarah, serta filosofi pembelaan yang menjadi pilar utama Nusantara & Partners.
          </p>
        </div>
      </section>

      {/* 2. PROFIL KANTOR HUKUM */}
      <section className="py-24 px-6 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold-metallic font-bold tracking-widest uppercase text-xs mb-2 block">Profil Korporasi</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-deep mb-6 leading-tight">
                Firma Hukum Tingkat Atas untuk Kebutuhan Bisnis & Privat Kompleks
              </h2>
              <div className="space-y-4 text-charcoal/80 text-base leading-relaxed">
                <p>
                  <strong>Nusantara & Partners</strong> adalah kantor advokat dan konsultan hukum komersial berkedudukan di Jakarta Selatan, yang mendedikasikan keahliannya untuk memberikan representasi hukum tingkat pertama (Tier-1) bagi perusahaan nasional, multinasional, maupun klien privat terkemuka.
                </p>
                <p>
                  Kami beroperasi dengan prinsip bahwa hukum bukan sekadar pasal di atas kertas, melainkan instrumen strategis untuk mengamankan aset, meredam risiko, dan mengakselerasi pertumbuhan ekonomi klien kami. Setiap perkara ditangani melalui pendekatan kolaboratif yang melibatkan analisis mendalam dari berbagai spesialisasi hukum.
                </p>
              </div>
            </div>

            <div className="bg-off-white p-8 lg:p-10 rounded-2xl border border-gray-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-navy-deep border-b border-gray-300 pb-4">Visi & Misi Firma</h3>
              
              <div>
                <h4 className="text-gold-metallic font-bold text-sm uppercase tracking-wider mb-2">Visi Kami</h4>
                <p className="text-charcoal/80 text-sm leading-relaxed">
                  Menjadi firma hukum terdepan di Indonesia yang diakui atas integritas tanpa kompromi, keunggulan strategi litigasi dan non-litigasi, serta standar layanan berkelas internasional.
                </p>
              </div>

              <div>
                <h4 className="text-gold-metallic font-bold text-sm uppercase tracking-wider mb-2">Misi Kami</h4>
                <ul className="text-charcoal/80 text-sm space-y-2">
                  <li className="flex items-start"><span className="text-gold-metallic mr-2 font-bold">•</span> Memberikan solusi hukum yang presisi, efektif, dan berorientasi pada hasil bisnis klien.</li>
                  <li className="flex items-start"><span className="text-gold-metallic mr-2 font-bold">•</span> Menjaga standar etika profesi advokat dan kerahasiaan absolut (*Attorney-Client Privilege*).</li>
                  <li className="flex items-start"><span className="text-gold-metallic mr-2 font-bold">•</span> Mengembangkan talenta hukum muda yang profesional, adaptif, dan berwawasan global.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEJARAH KANTOR HUKUM (Timeline) */}
      <section className="py-24 px-6 bg-off-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold-metallic font-bold tracking-widest uppercase text-xs mb-2 block">Jejak Langkah</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-deep">Sejarah & Evolusi Firma</h2>
          </div>

          <div className="space-y-10 border-l-2 border-gold-metallic/40 pl-6 md:pl-10 ml-4 md:ml-10">
            {[
              {
                year: "2011",
                title: "Pendirian Buttik Hukum Awal",
                desc: "Didirikan oleh Bpk. R. Nusantara di Jakarta sebagai kantor hukum butik yang berfokus pada penanganan sengketa perdata komersial dan litigasi perusahaan skala menengah."
              },
              {
                year: "2015",
                title: "Ekspansi Divisi Hukum Korporasi",
                desc: "Merespons tingginya permintaan klien bisnis, firma memperluas sayap dengan mendirikan divisi Corporate & Compliance, menangani restrukturisasi, merger, serta perizinan penanaman modal."
              },
              {
                year: "2020",
                title: "Transformasi Menjadi Nusantara & Partners",
                desc: "Melakukan rebrand korporat dan memperkuat kemitraan strategis dengan para kurator, konsultan pajak, serta auditor terkemuka untuk menghadirkan layanan hukum satu atap yang komprehensif."
              },
              {
                year: "Hari Ini",
                title: "Firma Hukum Kepercayaan Korporasi & Privat",
                desc: "Kini, Nusantara & Partners telah mendampingi lebih dari 500+ perkara sukses, diakui sebagai salah satu firma hukum pilihan utama di ibu kota untuk penanganan kasus berisiko tinggi."
              }
            ].map((item, idx) => (
              <div key={idx} className="relative bg-white p-8 rounded-xl shadow-sm border border-gray-200 group hover:border-gold-metallic transition-colors">
                <span className="absolute -left-[35px] md:-left-[51px] top-8 w-6 h-6 rounded-full bg-navy-deep border-4 border-gold-metallic flex items-center justify-center"></span>
                <span className="inline-block px-3 py-1 bg-gold-metallic/10 text-gold-metallic font-bold text-xs rounded-md mb-2">{item.year}</span>
                <h3 className="text-xl font-bold text-navy-deep mb-2">{item.title}</h3>
                <p className="text-charcoal/70 leading-relaxed text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NILAI-NILAI INTI FIRMA */}
      <section className="py-24 px-6 bg-navy-deep text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold-metallic font-bold tracking-widest uppercase text-xs mb-2 block">Pilar Budaya Kerja</span>
            <h3 className="text-3xl md:text-4xl font-bold">Nilai-Nilai Inti yang Kami Pegang</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Integritas Absolut", desc: "Kejujuran tanpa kompromi kepada klien dan penegak hukum adalah fondasi mutlak yang tidak dapat ditawar." },
              { title: "Kerahasiaan Mutlak", desc: "Melindungi privasi dan dokumen krusial klien dengan standar pengamanan dokumen fisik maupun digital paling mutakhir." },
              { title: "Keunggulan Strategis", desc: "Berpikir taktis, antisipatif, dan selalu selangkah lebih maju dalam merumuskan penyelesaian sengketa." }
            ].map((val, i) => (
              <div key={i} className="bg-navy p-8 rounded-xl border border-white/10 hover:border-gold-metallic/50 transition-colors">
                <div className="w-12 h-12 bg-gold-metallic/10 rounded-lg flex items-center justify-center text-gold-metallic font-bold text-xl mb-6">
                  0{i+1}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{val.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
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