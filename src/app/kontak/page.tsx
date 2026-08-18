import React from 'react';
import Navbar from '../../components/Navbar';

export default function KontakPage() {
  return (
    <main className="font-sans text-gray-800 bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <section className="py-24 px-6 flex-grow flex items-center justify-center">
        <div className="max-w-6xl w-full bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
          
          {/* Bagian Kiri - Info */}
          <div className="w-full lg:w-2/5 bg-navy text-white p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold rounded-full blur-3xl opacity-20 translate-x-1/3 -translate-y-1/3"></div>
            
            <div className="relative z-10">
              <h1 className="text-4xl font-bold mb-4">Mari Selesaikan Masalah Anda</h1>
              <p className="text-gray-300 mb-12 text-lg">Dapatkan pandangan hukum awal untuk kasus Anda hari ini. Rahasia dijamin 100%.</p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gold text-lg">Kantor Pusat</h4>
                    <p className="text-gray-300 mt-1 leading-relaxed">Gedung Sudirman Tower, Lt. 15<br/>Jl. Jend. Sudirman Kav 50<br/>Jakarta Selatan 12910</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gold text-lg">Email & Telepon</h4>
                    <p className="text-gray-300 mt-1 leading-relaxed">konsultasi@nusantaralaw.co.id<br/>+62 812-3456-7890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bagian Kanan - Form */}
          <div className="w-full lg:w-3/5 p-12 lg:p-16">
            <h3 className="text-2xl font-bold text-navy mb-8">Form Evaluasi Kasus Awal</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Lengkap</label>
                  <input type="text" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:bg-white transition" placeholder="Cth: Budi Santoso" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nomor WhatsApp</label>
                  <input type="tel" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:bg-white transition" placeholder="0812-xxxx-xxxx" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Kategori Kasus</label>
                <select className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:bg-white transition appearance-none">
                  <option value="">-- Pilih Kategori --</option>
                  <option value="bisnis">Sengketa Bisnis</option>
                  <option value="perusahaan">Hukum Perusahaan / Legalitas</option>
                  <option value="keluarga">Hukum Keluarga & Waris</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Jelaskan Permasalahan Anda</label>
                <textarea rows={5} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:bg-white transition resize-none" placeholder="Ceritakan secara singkat kronologi atau pokok permasalahan..."></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-gold to-[#bda036] text-navy font-bold py-4 rounded-xl text-lg hover:shadow-[0_10px_20px_-10px_rgba(212,175,55,0.8)] hover:-translate-y-1 transition-all duration-300 mt-4">
                Kirim Permintaan Konsultasi
              </button>
            </form>
          </div>

        </div>
      </section>

      <footer className="bg-[#050c17] py-8 text-center text-gray-400 border-t border-gray-800 mt-auto">
        <p>&copy; {new Date().getFullYear()} Nusantara & Partners. Hak Cipta Dilindungi.</p>
      </footer>
    </main>
  );
}