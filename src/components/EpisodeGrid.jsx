import React from 'react';
import { Play, Clock, Sparkles } from 'lucide-react';

const episodes = [
  {
    id: 1,
    title: 'Prologue: Birth of the Nebula Crown',
    duration: '12m',
    tag: 'Pilot',
    image:
      'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Event Horizon Waltz',
    duration: '18m',
    tag: 'Episode 1',
    image:
      'https://images.unsplash.com/photo-1450849608880-6f787542c88a?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Citadel of the Unknown',
    duration: '22m',
    tag: 'Episode 2',
    image:
      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Blue Giant Requiem',
    duration: '19m',
    tag: 'Episode 3',
    image:
      'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function EpisodeGrid() {
  return (
    <section id="episodes" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">Episodes</h3>
            <p className="text-blue-100/80 mt-2">Begin your journey through the cosmic corridors.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-blue-300/80">
            <Sparkles size={18} />
            <span className="text-sm">New drops every week</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {episodes.map((ep) => (
            <article key={ep.id} className="group relative rounded-xl overflow-hidden border border-blue-500/20 bg-white/5">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={ep.image}
                  alt={ep.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <span className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full bg-blue-600/30 border border-blue-400/40">{ep.tag}</span>
              </div>
              <div className="p-4">
                <h4 className="font-semibold leading-snug">{ep.title}</h4>
                <div className="mt-2 flex items-center justify-between text-sm text-blue-100/80">
                  <span className="inline-flex items-center gap-1"><Clock size={14} /> {ep.duration}</span>
                  <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 hover:bg-blue-600/30 transition">
                    <Play size={14} /> Play
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
