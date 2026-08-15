import React from 'react';
import Navbar from '../../components/Navbar';

export default function KeunggulanPage() {
  return (
    <main className="font-sans text-gray-800 min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <section className="py-20 bg-gray-50 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-navy mb-4 text-center">Mengapa Memilih Kami?</h1>
            <p className="text-gray-600 text-center mb-12">Komitmen kami terhadap keunggulan dan profesionalisme.</p>
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
      </div>
      <footer className="bg-[#050c17] py-8 px-6 text-center text-gray-400 border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Firma Hukum Nusantara. All rights reserved.</p>
      </footer>
    </main>
  );
}