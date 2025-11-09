import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] md:h-[88vh] overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
        <div className="absolute inset-x-0 -bottom-20 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="text-blue-300/80 tracking-widest text-xs sm:text-sm mb-3">AN ANIME EXPERIENCE</p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Unknown Entity
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300">Cosmic Governor</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-blue-100/80 max-w-xl">
            A black-metal futuristic saga through the blue nebula. Dive into a trippy galaxy rollercoaster—glowing paths, liquid gradients, and a destiny written among stars.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#episodes" className="px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition border border-blue-400/40 shadow-[0_0_30px_-10px_rgba(56,189,248,0.6)]">
              Watch Trailer
            </a>
            <a href="#lore" className="px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 transition border border-white/20">
              Explore Lore
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
