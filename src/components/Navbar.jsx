import React, { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-500/10 border border-white/10">
              <Rocket className="h-5 w-5 text-blue-300" />
            </span>
            <span className="font-semibold tracking-wider">Unknown Entity</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#characters" className="hover:text-cyan-300 transition">Characters</a>
            <a href="#episodes" className="hover:text-cyan-300 transition">Episodes</a>
            <a href="#lore" className="hover:text-cyan-300 transition">Lore</a>
            <a href="#contact" className="px-4 py-2 rounded-full bg-blue-600/90 hover:bg-blue-500 transition border border-blue-400/40">Follow</a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/5 border border-white/10" onClick={() => setOpen(true)} aria-label="Open Menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm md:hidden">
          <div className="absolute top-4 right-4">
            <button className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/5 border border-white/10" onClick={() => setOpen(false)} aria-label="Close Menu">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-20 px-6 space-y-4 text-lg">
            <a href="#characters" onClick={() => setOpen(false)} className="block py-3 border-b border-white/10">Characters</a>
            <a href="#episodes" onClick={() => setOpen(false)} className="block py-3 border-b border-white/10">Episodes</a>
            <a href="#lore" onClick={() => setOpen(false)} className="block py-3 border-b border-white/10">Lore</a>
            <a href="#contact" onClick={() => setOpen(false)} className="block py-3">Follow</a>
          </div>
        </div>
      )}
    </header>
  );
}
