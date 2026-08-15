import React from 'react';
import Navbar from '../../components/Navbar';

export default function KontakPage() {
  return (
    <main className="font-sans text-gray-800 min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <section className="py-24 bg-gray-50 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-10 rounded-xl shadow-xl border-t-8 border-gold">
              <h1 className="text-3xl font-bold text-navy mb-4 text-center">Jangan Tunda Solusi Hukum Anda.</h1>
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
      </div>
      <footer className="bg-[#050c17] py-8 px-6 text-center text-gray-400 border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Firma Hukum Nusantara. All rights reserved.</p>
      </footer>
    </main>
  );
}