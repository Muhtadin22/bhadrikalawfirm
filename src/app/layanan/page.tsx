import React from 'react';
import Navbar from '../../components/Navbar';

export default function LayananPage() {
  return (
    <main className="font-sans text-gray-800 min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <section className="py-20 bg-white px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-navy mb-4 text-center">Layanan Hukum Kami</h1>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Kami menyediakan solusi hukum komprehensif yang dirancang khusus untuk melindungi kepentingan bisnis dan personal Anda.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-navy p-8 rounded-lg shadow-lg border-t-4 border-gold">
                <h3 className="text-xl font-bold text-gold mb-4">Sengketa Bisnis</h3>
                <p className="text-gray-300">Menyelesaikan konflik antar pemegang saham, pelanggaran kontrak, dan sengketa komersial dengan fokus pada efisiensi dan win-win solution.</p>
              </div>
              <div className="bg-navy p-8 rounded-lg shadow-lg border-t-4 border-gold">
                <h3 className="text-xl font-bold text-gold mb-4">Hukum Perusahaan</h3>
                <p className="text-gray-300">Pendampingan legalitas, merger & akuisisi, serta kepatuhan hukum untuk memastikan bisnis Anda bertumbuh tanpa risiko legal.</p>
              </div>
              <div className="bg-navy p-8 rounded-lg shadow-lg border-t-4 border-gold">
                <h3 className="text-xl font-bold text-gold mb-4">Hukum Keluarga & Waris</h3>
                <p className="text-gray-300">Penanganan kasus perceraian, hak asuh anak, dan pembagian harta warisan dengan pendekatan yang empatik dan sangat rahasia.</p>
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