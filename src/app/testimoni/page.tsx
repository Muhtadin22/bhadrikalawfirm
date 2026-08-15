import React from 'react';
import Navbar from '../../components/Navbar';

export default function TestimoniPage() {
  return (
    <main className="font-sans text-gray-800 min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <section className="py-20 bg-navy px-6 min-h-[70vh] flex items-center">
          <div className="max-w-6xl mx-auto text-center w-full">
            <h1 className="text-4xl font-bold text-white mb-4">Kepercayaan Klien Kami</h1>
            <p className="text-gray-300 mb-12">Apa kata mereka yang telah mempercayakan perkaranya kepada kami.</p>
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
      </div>
      <footer className="bg-[#050c17] py-8 px-6 text-center text-gray-400 border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Firma Hukum Nusantara. All rights reserved.</p>
      </footer>
    </main>
  );
}