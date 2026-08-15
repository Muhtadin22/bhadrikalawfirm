import React from 'react';
import Navbar from '../components/Navbar';

export default function LandingPage() {
  return (
    <main className="font-sans text-gray-800">
      
      {/* NAVBAR */}
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="bg-navy text-white px-6 py-24 md:py-32 flex flex-col items-center text-center">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Melindungi Bisnis dan Hak Anda dengan <span className="text-gold">Kepastian Hukum</span> yang Jelas.
          </h1>
          <h2 className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Firma Hukum Nusantara & Partners mendampingi pemilik bisnis dan individu di Jakarta menyelesaikan sengketa dan urusan hukum dengan strategi tepat, aman, dan rahasia.
          </h2>
          <a href="#kontak" className="bg-gold text-navy font-bold py-4 px-8 rounded-md text-lg hover:bg-lightgold transition duration-300 shadow-lg inline-block">
            Konsultasi Kasus Anda via WhatsApp
          </a>
        </div>
      </section>

      {/* 2. TRUST INDICATORS */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
          <div className="pt-4 md:pt-0">
            <h3 className="text-4xl font-extrabold text-gold mb-2">15+</h3>
            <p className="text-navy font-semibold">Tahun Pengalaman</p>
          </div>
          <div className="pt-4 md:pt-0">
            <h3 className="text-4xl font-extrabold text-gold mb-2">500+</h3>
            <p className="text-navy font-semibold">Kasus Terselesaikan</p>
          </div>
          <div className="pt-4 md:pt-0">
            <h3 className="text-4xl font-extrabold text-gold mb-2">98%</h3>
            <p className="text-navy font-semibold">Tingkat Keberhasilan</p>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM & AGITATION */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy mb-6">Anda Tidak Perlu Menghadapi Ini Sendirian</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Kami memahami bahwa menghadapi masalah hukum—baik sengketa bisnis yang memanas maupun urusan keluarga yang pelik—dapat menguras waktu, energi, dan pikiran Anda. Jangan biarkan ketidakpastian menghancurkan apa yang telah Anda bangun. Kami hadir untuk mengambil alih beban tersebut, memberikan perlindungan maksimal, dan memastikan hak Anda tetap utuh.
          </p>
        </div>
      </section>

      {/* 4. PRACTICE AREAS (Layanan) */}
      <section id="layanan" className="py-20 bg-white px-6 scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Layanan Hukum Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-navy p-8 rounded-lg shadow-lg border-t-4 border-gold transition hover:-translate-y-1 hover:shadow-xl duration-300">
              <h3 className="text-xl font-bold text-gold mb-4">Sengketa Bisnis</h3>
              <p className="text-gray-300">Menyelesaikan konflik antar pemegang saham, pelanggaran kontrak, dan sengketa komersial dengan fokus pada efisiensi dan win-win solution.</p>
            </div>
            <div className="bg-navy p-8 rounded-lg shadow-lg border-t-4 border-gold transition hover:-translate-y-1 hover:shadow-xl duration-300">
              <h3 className="text-xl font-bold text-gold mb-4">Hukum Perusahaan</h3>
              <p className="text-gray-300">Pendampingan legalitas, merger & akuisisi, serta kepatuhan hukum untuk memastikan bisnis Anda bertumbuh tanpa risiko legal.</p>
            </div>
            <div className="bg-navy p-8 rounded-lg shadow-lg border-t-4 border-gold transition hover:-translate-y-1 hover:shadow-xl duration-300">
              <h3 className="text-xl font-bold text-gold mb-4">Hukum Keluarga & Waris</h3>
              <p className="text-gray-300">Penanganan kasus perceraian, hak asuh anak, dan pembagian harta warisan dengan pendekatan yang empatik dan sangat rahasia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US (Keunggulan) */}
      <section id="keunggulan" className="py-20 bg-gray-50 px-6 scroll-mt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-10 text-center">Mengapa Memilih Nusantara & Partners?</h2>
          <div className="space-y-6">
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex-shrink-0 mt-1"><span className="text-gold text-2xl">✔</span></div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-navy">Strategi Tepat Sasaran</h4>
                <p className="text-gray-600 mt-1">Kami fokus pada hasil dan solusi praktis, bukan sekadar proses hukum yang berbelit-belit yang hanya menghabiskan waktu Anda.</p>
              </div>
            </div>
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex-shrink-0 mt-1"><span className="text-gold text-2xl">✔</span></div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-navy">Transparansi Biaya</h4>
                <p className="text-gray-600 mt-1">Tidak ada biaya tersembunyi. Seluruh skema honorarium (fee) dihitung secara rasional dan disepakati di awal secara profesional.</p>
              </div>
            </div>
            <div className="flex items-start bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex-shrink-0 mt-1"><span className="text-gold text-2xl">✔</span></div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-navy">Respons Cepat & Proaktif</h4>
                <p className="text-gray-600 mt-1">Kami memberikan pembaruan (update) perkembangan kasus Anda secara rutin tanpa perlu Anda memintanya terlebih dahulu.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR TEAM (Tentang Kami) */}
      <section id="tentang" className="py-20 bg-white px-6 scroll-mt-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3 h-80 bg-gray-100 rounded-lg flex items-center justify-center border-b-8 border-gold overflow-hidden">
            <div className="text-gray-400 font-medium text-center p-4">
              [Area Foto Pengacara Utama]<br/>
              <span className="text-sm font-normal">Ganti bagian ini dengan tag &lt;img&gt; foto asli</span>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold text-navy mb-4">Dipimpin oleh Praktisi Hukum Berpengalaman</h2>
            <blockquote className="italic text-lg text-gray-500 border-l-4 border-gold pl-4 py-2 mb-6 bg-gray-50 rounded-r-md">
              "Kemenangan terbaik adalah yang dicapai dengan integritas dan strategi yang matang."
            </blockquote>
            <p className="text-gray-600 leading-relaxed mb-4">
              Bpk. R. Nusantara, S.H., M.H., memiliki lebih dari 15 tahun jam terbang tinggi di pengadilan maupun meja perundingan. Berspesialisasi dalam hukum korporasi dan sengketa aset bernilai tinggi, beliau memastikan setiap klien mendapatkan pendampingan kelas satu.
            </p>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS (Testimoni) */}
      <section id="testimoni" className="py-20 bg-navy px-6 scroll-mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Kepercayaan Klien Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0e213f] p-8 rounded-lg border-l-4 border-gold text-left shadow-lg">
              <p className="text-gray-300 italic mb-6">"Firma Hukum Nusantara menyelamatkan perusahaan kami dari gugatan kontrak yang tidak masuk akal. Mereka profesional, sangat tajam dalam analisis, dan strategis."</p>
              <h4 className="text-white font-bold">- Budi S., CEO Perusahaan Manufaktur</h4>
            </div>
            <div className="bg-[#0e213f] p-8 rounded-lg border-l-4 border-gold text-left shadow-lg">
              <p className="text-gray-300 italic mb-6">"Proses pembagian waris keluarga kami yang awalnya penuh konflik berhasil diselesaikan dengan damai berkat mediasi luar biasa dari tim pengacara di sini."</p>
              <h4 className="text-white font-bold">- Siti A., Klien Perorangan</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA & FORM (Kontak) */}
      <section id="kontak" className="py-24 bg-gray-50 px-6 scroll-mt-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-10 rounded-xl shadow-xl border-t-8 border-gold">
            <h2 className="text-3xl font-bold text-navy mb-4 text-center">Jangan Tunda Solusi Hukum Anda.</h2>
            <p className="text-gray-600 text-center mb-8">Mari bicarakan kasus Anda hari ini untuk mendapatkan evaluasi awal.</p>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Nama Lengkap</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition" placeholder="Masukkan nama Anda..." required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Nomor WhatsApp Aktif</label>
                <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition" placeholder="0812-xxxx-xxxx" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Kategori Layanan</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white transition">
                  <option value="">Pilih Kategori...</option>
                  <option value="bisnis">Sengketa Bisnis</option>
                  <option value="perusahaan">Hukum Perusahaan / Legalitas</option>
                  <option value="keluarga">Hukum Keluarga & Waris</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Ringkasan Kasus (Opsional)</label>
                <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition" placeholder="Ceritakan secara singkat masalah hukum yang sedang Anda hadapi..."></textarea>
              </div>
              <button type="submit" className="w-full bg-navy text-gold font-bold py-4 rounded-md text-lg hover:bg-[#061020] transition duration-300 border border-gold mt-4 shadow-md">
                Kirim Permintaan Evaluasi
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-[#050c17] py-12 px-6 text-center md:text-left text-gray-400 border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-4 text-gold">Nusantara & Partners</h3>
            <p className="text-sm leading-relaxed">Gedung Sudirman Tower, Lantai 15.<br/>Jl. Jend. Sudirman Kav. 50,<br/>Jakarta Selatan 12910</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Kontak Kami</h3>
            <p className="text-sm leading-relaxed">WA: +62 812 3456 7890<br/>Email: info@nusantaralaw.co.id</p>
            <p className="text-sm mt-2 text-gray-500">Senin - Jumat: 09.00 - 17.00 WIB</p>
          </div>
          <div className="md:text-right text-sm">
            <a href="#" className="hover:text-gold block mb-3 transition">Kebijakan Privasi</a>
            <a href="#" className="hover:text-gold block mb-3 transition">Syarat & Ketentuan</a>
            <p className="mt-6 text-gray-600">&copy; {new Date().getFullYear()} Firma Hukum Nusantara.<br/>All rights reserved.</p>
          </div>
        </div>
      </footer>

    </main>
  );
}