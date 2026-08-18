import React from 'react';
import Navbar from '../../components/Navbar';

export default function TestimoniPage() {
  const testimonials = [
    { name: "Budi Santoso", role: "CEO Perusahaan Manufaktur", text: "Tim Nusantara menyelamatkan perusahaan kami dari ancaman gugatan PKPU yang sangat merugikan. Mereka merespons dalam hitungan jam dan strategi bertahannya sangat brilian." },
    { name: "Siti Aisyah", role: "Klien Perorangan", text: "Proses sengketa waris keluarga kami yang berlarut-larut berhasil diselesaikan dengan damai berkat pendekatan kekeluargaan dan mediasi luar biasa dari pengacara di sini." },
    { name: "Hendra Wijaya", role: "Direktur Startup Teknologi", text: "Semua urusan legalitas Seri-A *funding* kami diurus dengan sangat rapi dan detail. Benar-benar firma hukum yang mengerti dunia bisnis modern." },
    { name: "Anita K.", role: "Pemilik Bisnis Retail", text: "Sengketa dengan pemasok luar negeri akhirnya selesai tanpa harus masuk ke arbitrase berkat surat peringatan hukum (Somasi) yang disusun sangat tajam oleh tim Nusantara." },
  ];

  return (
    <main className="font-sans text-gray-800 bg-[#0a192f] min-h-screen flex flex-col relative overflow-hidden">
      <Navbar />

      {/* Dekorasi Latar Belakang */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <section className="py-24 px-6 max-w-6xl mx-auto flex-grow relative z-10">
        <div className="text-center mb-20">
          <h1 className="text-sm text-gold font-bold tracking-widest uppercase mb-4">Ulasan Klien</h1>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Kepercayaan Adalah Mata Uang Kami</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-[#112340] p-10 rounded-2xl border border-white/5 hover:border-gold/30 transition-colors duration-300 relative group">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 italic mb-8 text-lg leading-relaxed">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex-shrink-0 border-2 border-transparent group-hover:border-gold transition-colors"></div>
                <div>
                  <h4 className="text-white font-bold">{item.name}</h4>
                  <p className="text-gray-400 text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#040914] py-8 text-center text-gray-500 border-t border-gray-800 mt-auto relative z-10">
        <p>&copy; {new Date().getFullYear()} Nusantara & Partners. Hak Cipta Dilindungi.</p>
      </footer>
    </main>
  );
}