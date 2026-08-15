import React from 'react';
import Navbar from '../../components/Navbar';

export default function TentangPage() {
  return (
    <main className="font-sans text-gray-800 min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <section className="py-20 bg-white px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3 h-80 bg-gray-100 rounded-lg flex items-center justify-center border-b-8 border-gold overflow-hidden">
              <div className="text-gray-400 font-medium text-center p-4">
                [Area Foto Pengacara Utama]<br/>
                <span className="text-sm font-normal">Ganti bagian ini dengan tag &lt;img&gt; foto asli</span>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h1 className="text-4xl font-bold text-navy mb-4">Dipimpin oleh Praktisi Hukum Berpengalaman</h1>
              <blockquote className="italic text-lg text-gray-500 border-l-4 border-gold pl-4 py-2 mb-6 bg-gray-50 rounded-r-md">
                "Kemenangan terbaik adalah yang dicapai dengan integritas dan strategi yang matang."
              </blockquote>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bpk. R. Nusantara, S.H., M.H., memiliki lebih dari 15 tahun jam terbang tinggi di pengadilan maupun meja perundingan. Berspesialisasi dalam hukum korporasi dan sengketa aset bernilai tinggi, beliau memastikan setiap klien mendapatkan pendampingan kelas satu.
              </p>
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