import React from 'react';
import { Sparkles, Shield, Satellite, Waves } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Nebula Aesthetics',
    desc: 'Liquid gradients, neon futurism, and holographic energy flows set the tone for a cosmic voyage.'
  },
  {
    icon: Shield,
    title: 'Black-Metal Futurism',
    desc: 'Sharp silhouettes, obsidian alloys, and star-forged armor define the Unknown Entity.'
  },
  {
    icon: Satellite,
    title: 'Cosmic Scale',
    desc: 'Civilizations orbiting blue giants, megastructures, and astral corridors beyond comprehension.'
  },
  {
    icon: Waves,
    title: 'Immersive Vibes',
    desc: 'A trippy galaxy rollercoaster—glowing paths ripple with waveform light under your command.'
  }
];

export default function SeriesShowcase() {
  return (
    <section id="series" className="relative py-20 bg-gradient-to-b from-black via-blue-950/20 to-black overflow-hidden">
      <div className="absolute -inset-40 opacity-30 blur-3xl pointer-events-none" aria-hidden>
        <div className="w-[80rem] h-[80rem] mx-auto bg-[conic-gradient(from_90deg_at_50%_50%,_#38bdf8_0%,_#6366f1_30%,_transparent_60%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-4xl font-bold">The Vision</h3>
          <p className="mt-3 text-blue-100/80 max-w-2xl mx-auto">Black metal meets blue nebula. This is the official gateway to the Unknown Entity: Cosmic Governor.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="group relative rounded-2xl border border-blue-500/20 bg-white/5 hover:bg-white/[0.07] transition p-5 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10" />
              <div className="relative flex items-start gap-4">
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-400/30 text-blue-300">
                  {React.createElement(f.icon, { size: 20 })}
                </div>
                <div>
                  <h4 className="font-semibold">{f.title}</h4>
                  <p className="text-sm text-blue-100/80 mt-1">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
