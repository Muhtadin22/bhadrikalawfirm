import React from 'react';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function KeunggulanPage() {
  const coreAdvantages = [
    {
      num: "01",
      tag: "Analisis & Mitigasi",
      title: "Strategi Hukum Berbasis Risiko Presisi",
      desc: "Kami tidak sekadar menafsirkan teks undang-undang. Setiap perkara dianalisis melalui matriks risiko komprehensif, memetakan potensi celah hukum, yurisprudensi terbaru, serta implikasi finansial bagi kelangsungan bisnis Anda di masa depan.",
      metric: "100% Berbasis Mitigasi Preventif"
    },
    {
      num: "02",
      tag: "Akuntabilitas",
      title: "Transparansi Biaya Mutlak & Terukur",
      desc: "Praktik tagihan misterius di dunia hukum telah usang. Kami menerapkan skema honorarium yang jelas di awal penugasan (Fixed Fee, Retainer, atau Success Fee yang disepakati), memastikan anggaran hukum perusahaan Anda selalu terkendali.",
      metric: "Tanpa Biaya Tersembunyi (Zero Hidden Fees)"
    },
    {
      num: "03",
      tag: "Responsivitas",
      title: "Manajemen Hubungan Klien Proaktif",
      desc: "Waktu eksekusi bisnis sangat krusial. Tim kami bekerja dengan sistem piket dan pelaporan progres berkala (SLA ketat), memastikan Anda selalu mendapatkan pembaruan status hukum tanpa perlu melakukan follow-up berulang.",
      metric: "SLA Respons di Bawah 2 Jam Kerja"
    },
    {
      num: "04",
      tag: "Privasi Absolut",
      title: "Protokol Kerahasiaan Berstandar Perbankan",
      desc: "Dilindungi sepenuhnya oleh asas kerahasiaan advokat (*Attorney-Client Privilege*). Kami mengombinasikan kerahasiaan hukum dengan enkripsi dokumen digital mutakhir guna mengamankan reputasi dan data sensitif klien.",
      metric: "Enkripsi Data Militer & Akses Terbatas"
    }
  ];

  const comparisons = [
    {
      aspect: "Pendekatan Penanganan",
      traditional: "Reaktif (Menunggu masalah hukum pecah di pengadilan)",
      nusantara: "Proaktif & Preventif (Mitigasi risiko sejak tahap perancangan kontrak)"
    },
    {
      aspect: "Struktur Tim",
      traditional: "Ditangani oleh satu pengacara tunggal yang rentan bias",
      nusantara: "Kolaborasi Tim Lintas Spesialisasi (Litigasi, Korporasi, & Pajak)"
    },
    {
      aspect: "Kejelasan Anggaran",
      traditional: "Tagihan membengkak di akhir tanpa estimasi awal yang jelas",
      nusantara: "Transparan, terstruktur, dan disepakati tertulis di muka"
    },
    {
      aspect: "Standar Kerahasiaan",
      traditional: "Penyimpanan dokumen standar kantor konvensional",
      nusantara: "Protokol ketat Attorney-Client Privilege + Enkripsi digital"
    }
  ];

  return (
    <main className="font-sans text-charcoal bg-off-white min-h-screen flex flex-col">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative bg-navy-deep pt-32 pb-40 px-6 text-center overflow-hidden border-b-8 border-gold-metallic">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#13233A_1px,transparent_1px),linear-gradient(to_bottom,#13233A_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-metallic/30 bg-gold-metallic/5 text-gold-metallic text-xs font-bold tracking-widest uppercase">
            Standar Keunggulan Institusional
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Mengapa Korporasi & Klien Privat <br/>Memilih <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-metallic to-gold-soft">Nusantara & Partners</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Kami menggabungkan ketajaman analisis hukum, standar etika tanpa kompromi, dan orientasi hasil bisnis untuk memberikan ketenangan pikiran mutlak.
          </p>
        </div>
      </section>

      {/* 2. CORE ADVANTAGES DOSSIER CARDS */}
      <section className="px-6 -mt-24 pb-24 z-20 relative">
        <div className="max-w-6xl mx-auto space-y-8">
          {coreAdvantages.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 lg:p-12 group hover:border-gold-metallic transition-all duration-500 relative overflow-hidden">
              
              {/* Watermark Angka Raksasa */}
              <div className="absolute right-6 top-6 text-9xl font-black text-gray-50 group-hover:text-gold-metallic/5 transition-colors duration-500 z-0 select-none pointer-events-none">
                {item.num}
              </div>

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-navy-deep text-gold-metallic font-bold text-xs rounded uppercase tracking-wider">
                      {item.tag}
                    </span>
                    <span className="text-xs font-bold text-charcoal/60 uppercase tracking-widest">Standar: {item.metric}</span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-navy-deep mb-4">{item.title}</h2>
                  <p className="text-charcoal/80 text-base md:text-lg leading-relaxed font-normal">{item.desc}</p>
                </div>

                <div className="flex-shrink-0 w-full md:w-auto">
                  <Link href="/kontak" className="block text-center py-3.5 px-6 bg-off-white border-2 border-navy-deep text-navy-deep font-bold rounded-lg group-hover:bg-navy-deep group-hover:text-gold-metallic transition-all uppercase tracking-wider text-xs">
                    Pelajari Standar Kami
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. COMPARATIVE MATRIX SECTION (Tradisional vs Nusantara) */}
      <section className="py-24 px-6 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold-metallic font-bold tracking-widest uppercase text-xs mb-2 block">Perbandingan Kualitas</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-deep">Firma Hukum Konvensional vs Nusantara & Partners</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-navy-deep bg-off-white">
                  <th className="py-4 px-6 font-bold text-navy-deep uppercase text-xs tracking-wider">Aspek Penilaian</th>
                  <th className="py-4 px-6 font-bold text-gray-500 uppercase text-xs tracking-wider">Firma Hukum Konvensional</th>
                  <th className="py-4 px-6 font-bold text-gold-metallic bg-navy-deep text-white uppercase text-xs tracking-wider">Nusantara & Partners</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                {comparisons.map((row, idx) => (
                  <tr key={idx} className="hover:bg-off-white/50 transition-colors">
                    <td className="py-5 px-6 font-bold text-navy-deep">{row.aspect}</td>
                    <td className="py-5 px-6 text-charcoal/70">{row.traditional}</td>
                    <td className="py-5 px-6 font-semibold text-navy-deep bg-gold-metallic/5 border-l border-r border-gold-metallic/20">{row.nusantara}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. INSTITUTIONAL PHILOSOPHY BANNER */}
      <section className="py-24 bg-navy px-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <svg className="w-14 h-14 text-gold-metallic mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Komitmen Integritas Tanpa Kompromi</h2>
          <p className="text-gray-300 text-lg font-light leading-relaxed mb-10">
            "Keunggulan sejati tidak lahir dari janji-janji kosong, melainkan dari rekam jejak konsisten, keberanian mengambil langkah taktis yang benar, serta dedikasi mutlak untuk melindungi kepentingan hukum klien kami di setiap detik krusial."
          </p>
          <Link href="/kontak" className="inline-block bg-gradient-to-r from-gold-metallic to-gold-soft text-navy-deep font-bold py-4 px-10 rounded-md text-lg hover:shadow-[0_0_20px_rgba(200,169,81,0.4)] hover:-translate-y-1 transition-all duration-300">
            Jadwalkan Konsultasi Eksklusif
          </Link>
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