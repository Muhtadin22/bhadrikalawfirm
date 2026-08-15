'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-navy text-white shadow-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo / Nama Brand */}
        <Link href="/" className="text-xl font-bold text-gold tracking-wide">
          Nusantara & Partners
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/" className="hover:text-gold transition">Beranda</Link>
          <Link href="/layanan" className="hover:text-gold transition">Layanan</Link>
          <Link href="/keunggulan" className="hover:text-gold transition">Keunggulan</Link>
          <Link href="/tentang" className="hover:text-gold transition">Tentang Kami</Link>
          <Link href="/testimoni" className="hover:text-gold transition">Testimoni</Link>
          <Link href="/kontak" className="bg-gold text-navy px-5 py-2.5 rounded-md font-bold hover:bg-lightgold transition shadow-md">
            Konsultasi
          </Link>
        </div>

        {/* Tombol Hamburger Mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Dropdown untuk Mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#0a192f] border-b border-gray-800 px-6 py-4 space-y-4 shadow-xl">
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-gold transition">Beranda</Link>
          <Link href="/layanan" onClick={() => setIsOpen(false)} className="block hover:text-gold transition">Layanan</Link>
          <Link href="/keunggulan" onClick={() => setIsOpen(false)} className="block hover:text-gold transition">Keunggulan</Link>
          <Link href="/tentang" onClick={() => setIsOpen(false)} className="block hover:text-gold transition">Tentang Kami</Link>
          <Link href="/testimoni" onClick={() => setIsOpen(false)} className="block hover:text-gold transition">Testimoni</Link>
          <Link href="/kontak" onClick={() => setIsOpen(false)} className="block bg-gold text-navy text-center py-2.5 rounded-md font-bold hover:bg-lightgold transition">
            Konsultasi
          </Link>
        </div>
      )}
    </nav>
  );
}