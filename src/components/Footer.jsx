import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="relative mt-20 border-t border-blue-500/20 bg-gradient-to-b from-black to-blue-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <h5 className="text-white font-semibold">Unknown Entity — Cosmic Governor</h5>
            <p className="text-blue-100/80 mt-2">Official hub for the black-metal futuristic anime set across the blue nebula.</p>
          </div>
          <div>
            <h6 className="text-white/80 font-medium">Explore</h6>
            <ul className="mt-2 space-y-2 text-blue-100/80">
              <li><a className="hover:text-blue-300" href="#series">Series</a></li>
              <li><a className="hover:text-blue-300" href="#episodes">Episodes</a></li>
              <li><a className="hover:text-blue-300" href="#lore">Lore</a></li>
            </ul>
          </div>
          <div>
            <h6 className="text-white/80 font-medium">Stay Updated</h6>
            <form className="mt-2 flex gap-2">
              <input type="email" required placeholder="your@email"
                className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 transition border border-blue-400/40">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-xs text-blue-200/60">
          © {new Date().getFullYear()} Unknown Entity — Cosmic Governor. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
