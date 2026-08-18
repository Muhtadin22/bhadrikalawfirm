'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Layanan', path: '/layanan' },
    { name: 'Keunggulan', path: '/keunggulan' },
    { name: 'Tentang Kami', path: '/tentang' },
    { name: 'Tim Kami', path: '/tim' },
    { name: 'Testimoni', path: '/testimoni' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
        ? 'bg-navy-deep/95 backdrop-blur-md shadow-lg border-b border-white/10 py-2'
        : 'bg-navy-deep py-4 border-b border-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        <Link href="/" className="group flex flex-col justify-center">
          <span className="text-2xl font-extrabold text-white tracking-wide transition-colors group-hover:text-gray-200">
            Nusantara <span className="font-light text-gold-metallic">& Partners</span>
          </span>
          <span className="text-[0.65rem] text-gray-400 tracking-[0.3em] uppercase mt-0.5">
            Attorneys at Law
          </span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="relative text-gray-300 hover:text-white transition-colors duration-300 py-2
                         after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] 
                         after:bg-gold-metallic after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/kontak"
            className="bg-gradient-to-r from-gold-metallic to-gold-soft text-navy-deep px-6 py-2.5 rounded-full font-bold 
                       hover:shadow-[0_0_15px_rgba(200,169,81,0.4)] hover:-translate-y-0.5 transition-all duration-300 ml-2"
          >
            Konsultasi
          </Link>
        </div>

        {/* Tombol Hamburger Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md bg-white/5 text-white border border-white/10 hover:bg-white/10 focus:outline-none transition-colors"
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

      {/* Menu Mobile Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-navy-deep/95 backdrop-blur-lg border-b border-white/10 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
          }`}
      >
        <div className="px-6 flex flex-col space-y-2">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-colors"
            >
              {item.name}
            </Link>
          ))}

          <div className="pt-2 pb-2">
            <Link
              href="/kontak"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-gradient-to-r from-gold-metallic to-gold-soft text-navy-deep text-center px-4 py-3.5 rounded-lg font-bold shadow-md"
            >
              Konsultasi Sekarang
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}