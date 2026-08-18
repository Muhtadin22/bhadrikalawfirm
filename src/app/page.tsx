import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="font-sans text-charcoal bg-off-white">
      
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-navy-deep to-navy text-white px-6 pt-24 pb-40 flex flex-col items-center text-center overflow-hidden">
        {/* Tekstur Subtle */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-metallic/30 bg-gold-metallic/5 text-gold-soft text-sm font-semibold tracking-widest uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gold-metallic animate-pulse"></span>
            Firma Hukum Korporasi Jakarta
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.15] mb-6 tracking-tight">
            Melindungi Bisnis & Hak Anda dengan <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-metallic to-gold-soft">Kepastian Hukum</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Nusantara & Partners mendampingi pemilik bisnis dan individu menyelesaikan sengketa dengan strategi analisis tajam, aman, dan sangat rahasia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/kontak" className="bg-gradient-to-r from-gold-metallic to-gold-soft text-navy-deep font-bold py-4 px-10 rounded-md text-lg hover:shadow-[0_0_20px_rgba(200,169,81,0.4)] hover:-translate-y-1 transition-all duration-300">
              Evaluasi Kasus Gratis
            </Link>
            <Link href="/layanan" className="bg-transparent border border-gray-400 text-white font-medium py-4 px-10 rounded-md text-lg hover:bg-white/10 transition duration-300">
              Pelajari Layanan
            </Link>
          </div>
        </div>
      </section>

      {/* 2. TRUST INDICATORS (Statistik) */}
      <section className="relative z-20 -mt-20 px-6 max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
          <div className="p-4 hover:-translate-y-1 transition duration-300">
            <h3 className="text-5xl font-extrabold text-navy-deep mb-2">15<span className="text-gold-metallic">+</span></h3>
            <p className="text-charcoal/60 font-semibold uppercase tracking-widest text-sm">Tahun Pengalaman</p>
          </div>
          <div className="p-4 hover:-translate-y-1 transition duration-300">
            <h3 className="text-5xl font-extrabold text-navy-deep mb-2">500<span className="text-gold-metallic">+</span></h3>
            <p className="text-charcoal/60 font-semibold uppercase tracking-widest text-sm">Perkara Selesai</p>
          </div>
          <div className="p-4 hover:-translate-y-1 transition duration-300">
            <h3 className="text-5xl font-extrabold text-navy-deep mb-2">98<span className="text-gold-metallic">%</span></h3>
            <p className="text-charcoal/60 font-semibold uppercase tracking-widest text-sm">Tingkat Keberhasilan</p>
          </div>
        </div>
      </section>

      {/* 3. PRACTICE AREAS (Layanan) */}
      <section className="py-24 px-6 mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm text-gold-metallic font-bold tracking-widest uppercase mb-2">Area Praktik</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-navy-deep">Fokus Layanan Hukum Kami</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Sengketa Bisnis", desc: "Menyelesaikan konflik pemegang saham dan pelanggaran kontrak dengan berorientasi pada win-win solution.", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
              { title: "Hukum Perusahaan", desc: "Pendampingan legalitas, proses merger & akuisisi, serta kepatuhan regulasi (compliance) operasional bisnis.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { title: "Keluarga & Waris", desc: "Penanganan litigasi hak asuh anak, perceraian, dan pembagian harta warisan secara rahasia dan empatik.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }
            ].map((item, index) => (
              <div key={index} className="group bg-white p-10 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl hover:border-gold-metallic/50 transition-all duration-300">
                <div className="w-14 h-14 bg-off-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-metallic transition-colors duration-300 border border-gray-100 group-hover:border-gold-metallic">
                  <svg className="w-7 h-7 text-navy-deep group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-deep mb-4">{item.title}</h3>
                <p className="text-charcoal/80 leading-relaxed mb-6">{item.desc}</p>
                <Link href="/kontak" className="text-gold-metallic font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Pelajari Lebih Lanjut <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR TEAM (Tentang) */}
      <section className="py-24 bg-white px-6 border-y border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            {/* Bingkai Emas Dibelakang Foto */}
            <div className="absolute inset-0 bg-gold-metallic translate-x-4 translate-y-4 rounded-xl -z-10"></div>
            <div className="w-full h-[500px] bg-off-white rounded-xl flex flex-col items-center justify-center overflow-hidden border-4 border-white shadow-xl relative">
              <span className="text-gray-400 font-medium z-10">[Pasang Foto Eksekutif Jas Berwarna Navy/Hitam]</span>
              <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-sm text-gold-metallic font-bold tracking-widest uppercase mb-2">Profil Pendiri</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-navy-deep mb-6">Dipimpin oleh Praktisi Hukum Berpengalaman</h3>
            
            <p className="text-charcoal/80 leading-relaxed mb-8 text-lg">
              Bpk. R. Nusantara, S.H., M.H., memiliki lebih dari 15 tahun jam terbang tinggi di pengadilan maupun meja mediasi. Berspesialisasi dalam hukum korporasi dan sengketa aset bernilai miliaran rupiah.
            </p>

            <blockquote className="relative p-6 bg-off-white border-l-4 border-gold-metallic rounded-r-lg mb-8">
              <svg className="w-8 h-8 text-gold-metallic/20 absolute top-2 left-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="relative z-10 italic text-navy-deep font-medium text-lg ml-4">
                "Kemenangan sejati tidak selalu dicapai di ruang sidang, melainkan melalui negosiasi cerdas, kerahasiaan absolut, dan strategi matang."
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-24 bg-navy-deep px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-sm text-gold-metallic font-bold tracking-widest uppercase mb-2">Testimoni Klien</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-16">Rekam Jejak Kepercayaan</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            {[
              { quote: "Firma Hukum Nusantara menyelamatkan perusahaan kami dari gugatan sengketa kontrak bernilai besar. Analisis mitigasi risikonya luar biasa tajam.", name: "Bpk. Budi Santoso", role: "CEO Perusahaan Manufaktur" },
              { quote: "Kasus waris keluarga kami yang kompleks berhasil ditengahi dengan elegan dan damai berkat pendekatan profesional dari para partner di firma ini.", name: "Ibu Siti Aisyah", role: "Klien Privat" }
            ].map((testi, i) => (
              <div key={i} className="bg-navy p-10 rounded-xl relative border border-white/5 hover:border-gold-metallic/30 transition-colors">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, index) => (
                    <svg key={index} className="w-5 h-5 text-gold-metallic" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-8 text-lg leading-relaxed">"{testi.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="text-gold-soft font-bold">{testi.name}</h4>
                    <p className="text-gray-400 text-sm uppercase tracking-wide">{testi.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 flex flex-col lg:flex-row">
          
          <div className="w-full lg:w-2/5 bg-navy-deep text-white p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Ornamen Abstrak */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-metallic rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Mari Evaluasi Posisi Hukum Anda</h2>
              <p className="text-gray-300 mb-12">Berikan rincian singkat, dan tim kami akan segera menghubungi Anda. Kerahasiaan 100% dilindungi asas *Attorney-Client Privilege*.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gold-metallic tracking-wide uppercase text-sm mb-1">Kantor Pusat</h4>
                    <p className="text-gray-300 text-sm">Gedung Sudirman Tower, Lt. 15<br/>Jl. Jend. Sudirman, Jakarta</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gold-metallic tracking-wide uppercase text-sm mb-1">Korespondensi</h4>
                    <p className="text-gray-300 text-sm">legal@nusantarapartners.com<br/>+62 (21) 812-3456</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/5 p-12">
            <h3 className="text-2xl font-bold text-navy-deep mb-6">Formulir Evaluasi Kasus</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-charcoal mb-1">Nama / Instansi</label>
                  <input type="text" className="w-full px-4 py-3 bg-off-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-metallic focus:bg-white transition" placeholder="Nama Lengkap / Perusahaan" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-charcoal mb-1">Nomor Telepon</label>
                  <input type="tel" className="w-full px-4 py-3 bg-off-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-metallic focus:bg-white transition" placeholder="Cth: 0812-xxxx-xxxx" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-charcoal mb-1">Kategori Layanan</label>
                <select className="w-full px-4 py-3 bg-off-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-metallic focus:bg-white transition">
                  <option value="">-- Pilih Jenis Perkara --</option>
                  <option value="bisnis">Litigasi Bisnis & Komersial</option>
                  <option value="perusahaan">Corporate & Legal Draft</option>
                  <option value="keluarga">Hukum Keluarga Privat</option>
                  <option value="lainnya">Lainnya / Belum Yakin</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-charcoal mb-1">Uraian Singkat Perkara</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-off-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-metallic focus:bg-white transition resize-none" placeholder="Tuliskan secara garis besar persoalan hukum Anda (Tanpa menulis data sensitif)..."></textarea>
              </div>
              <button type="submit" className="w-full bg-navy-deep text-gold-metallic font-bold py-4 rounded-lg text-lg hover:bg-[#13233A] hover:text-gold-soft border border-navy-deep transition-all duration-300 mt-2 shadow-md">
                Kirim & Jadwalkan Konsultasi
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-[#08101E] pt-16 pb-8 px-6 border-t border-gold-metallic/20">
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
              <li><Link href="/testimoni" className="hover:text-gold-metallic transition">Klien Kami</Link></li>
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