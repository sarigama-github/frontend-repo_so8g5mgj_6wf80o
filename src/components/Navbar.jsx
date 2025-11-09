import React from 'react';
import { Rocket, Star, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute -inset-2 bg-blue-500/30 blur-xl rounded-full" />
            <Rocket className="relative text-blue-400" size={24} />
          </div>
          <div className="leading-tight">
            <p className="text-sm tracking-widest text-blue-300/70">UNKNOWN ENTITY</p>
            <h1 className="text-lg font-semibold">Cosmic Governor</h1>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#series" className="hover:text-blue-300 transition">Series</a>
          <a href="#episodes" className="hover:text-blue-300 transition">Episodes</a>
          <a href="#lore" className="hover:text-blue-300 transition">Lore</a>
          <a href="#contact" className="hover:text-blue-300 transition">Contact</a>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 hover:bg-blue-600/30 transition">
            <Star size={16} /> Follow
          </button>
        </nav>
        <button className="md:hidden p-2 rounded-md hover:bg-white/5">
          <Menu />
        </button>
      </div>
    </header>
  );
}
