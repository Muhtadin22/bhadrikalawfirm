import React from 'react';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function TentangPage() {
  return (
    <main className="font-sans text-charcoal bg-off-white min-h-screen flex flex-col">
      <Navbar />

      {/* 1. HERO HEADER SECTION */}
      <section className="relative bg-navy-deep pt-28 pb-36 px-6 text-center overflow-hidden border-b-8 border-gold-metallic">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-metallic/10 rounded-full blur-[140px] -translate-y-1/3 translate-x-1/4"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-metallic/30 bg-gold-metallic/5 text-gold-metallic text-xs font-bold tracking-widest uppercase">
            Tentang Bhadrika Byakta Law Firm
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Membangun Warisan Kepercayaan & <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-metallic to-gold-soft">Kepastian Hukum Global</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Menghadirkan solusi hukum paripurna dengan landasan integritas tanpa kompromi, ketajaman analisis strategis, dan standar pelayanan hukum berkelas internasional.
          </p>
        </div>
      </section>

      {/* 2. FIRM OVERVIEW (Sejak 2011 sebagai Full-Service Law Firm) */}
      <section className="py-24 px-6 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold-metallic font-bold tracking-widest uppercase text-xs mb-2 block">Profil Korporasi</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-deep mb-6 leading-tight">
                Full-Service Law Firm Terdepan Sejak 2011
              </h2>
              <div className="space-y-4 text-charcoal/80 text-base leading-relaxed">
                <p>
                  <strong>Bhadrika Byakta Law Firm</strong> didirikan pada tahun 2011 sebagai kantor advokat dan konsultan hukum komersial berstandar tinggi. Berkembang menjadi sebuah <em>full-service law firm</em>, kami menyediakan spektrum layanan hukum menyeluruh mulai dari litigasi kompleks, arbitrase internasional, hingga hukum korporasi strategis.
                </p>
                <p>
                  Kami percaya bahwa hukum adalah instrumen krusial untuk mengamankan aset, menavigasi risiko regulasi, dan memastikan keberlanjutan ekspansi bisnis klien di kancah nasional maupun multinasional. Setiap penanganan perkara didukung oleh kolaborasi tim ahli multidisiplin dengan dedikasi penuh terhadap kerahasiaan (*Attorney-Client Privilege*).
                </p>
              </div>
            </div>

            <div className="bg-off-white p-8 lg:p-10 rounded-2xl border border-gray-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-navy-deep border-b border-gray-300 pb-4">Filosofi & Komitmen</h3>
              
              <div>
                <h4 className="text-gold-metallic font-bold text-sm uppercase tracking-wider mb-2">Visi Firma</h4>
                <p className="text-charcoal/80 text-sm leading-relaxed">
                  Menjadi mercusuar keunggulan hukum di Indonesia dan Asia Tenggara yang diakui atas integritas moral, ketajaman taktik litigasi, serta inovasi tata kelola berbasis digital.
                </p>
              </div>

              <div>
                <h4 className="text-gold-metallic font-bold text-sm uppercase tracking-wider mb-2">Komitmen Layanan</h4>
                <ul className="text-charcoal/80 text-sm space-y-2">
                  <li className="flex items-start"><span className="text-gold-metallic mr-2 font-bold">•</span> Presisi hukum yang berorientasi pada pencapaian hasil bisnis optimal.</li>
                  <li className="flex items-start"><span className="text-gold-metallic mr-2 font-bold">•</span> Transparansi penanganan perkara dan perlindungan data klien absolut.</li>
                  <li className="flex items-start"><span className="text-gold-metallic mr-2 font-bold">•</span> Standar etika profesi advokat tertinggi dalam setiap forum peradilan.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDING PARTNERS PROFILE */}
      <section className="py-24 px-6 bg-off-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold-metallic font-bold tracking-widest uppercase text-xs mb-2 block">Kepemimpinan Eksekutif</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-deep">Founding Partners Profile</h2>
            <p className="text-charcoal/70 max-w-xl mx-auto mt-2">Para pendiri dan pimpinan utama yang mengarahkan visi strategis serta standar kualitas hukum Bhadrika Byakta.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Partner 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between">
              <div>
                <div className="w-20 h-20 bg-navy-deep/10 rounded-xl mb-6 flex items-center justify-center font-bold text-navy-deep text-2xl border border-gold-metallic/30">
                  SF
                </div>
                <h3 className="text-2xl font-bold text-navy-deep mb-1">Dr. Safitri H. Saptogino, S.H., M.H.</h3>
                <p className="text-gold-metallic font-semibold text-sm mb-4 uppercase tracking-wider">Founding Partner & Senior Litigation Expert</p>
                <p className="text-charcoal/80 text-sm leading-relaxed mb-6">
                  Memiliki rekam jejak panjang dalam penanganan sengketa komersial bernilai tinggi, hukum perbankan, dan litigasi korporasi lintas yurisdiksi. Dikenal luas atas ketajaman argumen hukum serta pendekatan strategis di ruang sidang pengadilan maupun forum arbitrase internasional.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>Spesialisasi: Litigasi & Arbitrase</span>
                <span className="font-semibold text-navy-deep">25+ Tahun Pengalaman</span>
              </div>
            </div>

            {/* Partner 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between">
              <div>
                <div className="w-20 h-20 bg-navy-deep/10 rounded-xl mb-6 flex items-center justify-center font-bold text-navy-deep text-2xl border border-gold-metallic/30">
                  ZJ
                </div>
                <h3 className="text-2xl font-bold text-navy-deep mb-1">Zubaidah Jufri, S.H., M.Kn., CHRP</h3>
                <p className="text-gold-metallic font-semibold text-sm mb-4 uppercase tracking-wider">Founding Partner & Corporate, Labour & Compliance Expert</p>
                <p className="text-charcoal/80 text-sm leading-relaxed mb-6">
                  Ahli terkemuka dalam bidang hukum perusahaan, restrukturisasi bisnis, kepatuhan regulasi, serta hukum ketenagakerjaan (*Certified Human Resources Professional*). Berpengalaman mendampingi korporasi besar dalam transaksi merger-akuisisi serta penyelesaian hubungan industrial yang kompleks.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>Spesialisasi: Corporate Law & Labour</span>
                <span className="font-semibold text-navy-deep">20+ Tahun Pengalaman</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR JOURNEY (Statistik Pencapaian) */}
      <section className="py-20 bg-navy-deep text-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-gold-metallic font-bold tracking-widest uppercase text-xs mb-2 block">Rekam Jejak Pertumbuhan</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-16">Our Journey in Numbers</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-navy p-8 rounded-xl border border-white/10">
              <h3 className="text-5xl font-extrabold text-gold-metallic mb-2">2011</h3>
              <p className="text-gray-400 uppercase tracking-widest text-xs font-semibold">Tahun Berdiri</p>
            </div>
            <div className="bg-navy p-8 rounded-xl border border-white/10">
              <h3 className="text-5xl font-extrabold text-gold-metallic mb-2">1000<span className="text-white">+</span></h3>
              <p className="text-gray-400 uppercase tracking-widest text-xs font-semibold">Kasus Terselesaikan</p>
            </div>
            <div className="bg-navy p-8 rounded-xl border border-white/10">
              <h3 className="text-5xl font-extrabold text-gold-metallic mb-2">80<span className="text-white">+</span></h3>
              <p className="text-gray-400 uppercase tracking-widest text-xs font-semibold">Tim Pengacara Profesional</p>
            </div>
            <div className="bg-navy p-8 rounded-xl border border-white/10">
              <h3 className="text-5xl font-extrabold text-gold-metallic mb-2">28<span className="text-white">+</span></h3>
              <p className="text-gray-400 uppercase tracking-widest text-xs font-semibold">Bidang Praktik Hukum</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHAT SETS US APART (Nilai Tambah / Keunggulan) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold-metallic font-bold tracking-widest uppercase text-xs mb-2 block">Keunggulan Kompetitif</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-deep">What Sets Us Apart</h2>
            <p className="text-charcoal/70 max-w-xl mx-auto mt-2">Pilar pembeda yang menjadikan Bhadrika Byakta Law Firm pilihan utama para pemangku kepentingan korporasi.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-off-white p-8 rounded-xl border border-gray-200 hover:border-gold-metallic transition-all">
              <div className="w-12 h-12 bg-gold-metallic/10 rounded-lg flex items-center justify-center text-gold-metallic mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-navy-deep mb-3">Strategic & Inclusive Intelligence</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                Pendekatan holistik yang memadukan ketajaman analisis hukum, pemahaman mendalam atas lanskap bisnis, serta inklusivitas strategi penyelesaian sengketa demi memitigasi risiko secara tuntas.
              </p>
            </div>

            <div className="bg-off-white p-8 rounded-xl border border-gray-200 hover:border-gold-metallic transition-all">
              <div className="w-12 h-12 bg-gold-metallic/10 rounded-lg flex items-center justify-center text-gold-metallic mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-navy-deep mb-3">Cross-Border Capability & Standards</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                Kemampuan eksekusi lintas negara (*cross-border*) melalui jaringan mitra internasional di Singapura, Tiongkok, dan konvensi global guna mengakomodasi transaksi serta sengketa multinasional.
              </p>
            </div>

            <div className="bg-off-white p-8 rounded-xl border border-gray-200 hover:border-gold-metallic transition-all">
              <div className="w-12 h-12 bg-gold-metallic/10 rounded-lg flex items-center justify-center text-gold-metallic mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-navy-deep mb-3">Tech-Driven & Eco Law Office</h3>
            <p className="text-charcoal/70 text-sm leading-relaxed">
                Pionir pemanfaatan platform digital hukum (SIP-R, Regulasip) serta penerapan operasional ramah lingkungan (*paperless* dan *eco-sustainability policy*) dalam setiap lini kerja kantor hukum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AWARDS & RECOGNITIONS */}
      <section className="py-20 px-6 bg-off-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-gold-metallic font-bold tracking-widest uppercase text-xs mb-2 block">Prestasi & Pengakuan</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-deep mb-12">Awards & Recognitions</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-center items-center text-center">
              <span className="text-xs text-gold-metallic font-bold uppercase mb-2">Hukumonline Awards</span>
              <h4 className="font-bold text-navy-deep text-sm">1st Place Largest Litigation Practice of the Year</h4>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-center items-center text-center">
              <span className="text-xs text-gold-metallic font-bold uppercase mb-2">In-House Counsel</span>
              <h4 className="font-bold text-navy-deep text-sm">Preferred Corporate Law Firm of the Year</h4>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-center items-center text-center">
              <span className="text-xs text-gold-metallic font-bold uppercase mb-2">Asia Legal Business</span>
              <h4 className="font-bold text-navy-deep text-sm">Indonesia Law Firm Excellence Award</h4>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-center items-center text-center">
              <span className="text-xs text-gold-metallic font-bold uppercase mb-2">Global Arbitration</span>
              <h4 className="font-bold text-navy-deep text-sm">Top Tier Dispute Resolution Practice</h4>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}