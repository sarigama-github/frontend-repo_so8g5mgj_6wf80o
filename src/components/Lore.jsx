import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen } from 'lucide-react';

export default function Lore() {
  return (
    <section id="lore" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_500px_at_10%_-10%,rgba(59,130,246,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-start gap-6">
          <div className="shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/10 border border-white/10 flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-blue-300" />
          </div>
          <div className="flex-1">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl font-bold"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-300">
                Lore Primer
              </span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-white/70 leading-relaxed"
            >
              In the void between constellations, a governing will calibrates the fate of galaxies. Artifacts hum, nebulae breathe, and forgotten names echo in the magnetic dark. This is the prelude to Unknown Entity – Cosmic Governor.
            </motion.p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                'Fragments of a shattered star-map guide the path forward.',
                'Temporal echoes allow brief conversations with the future.',
                'Blue-flame sigils mark sites of cosmic arbitration.',
                'A trinary moon cycle opens the Waygate once per century.',
              ].map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="flex items-start gap-3 text-white/80"
                >
                  <Sparkles className="mt-0.5 w-4 h-4 text-cyan-300" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
