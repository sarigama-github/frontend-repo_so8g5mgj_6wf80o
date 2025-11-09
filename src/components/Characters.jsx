import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const characters = [
  {
    name: 'Sora',
    jpPrimary: 'ソラ',
    jpAlt: '蒼空宙羅',
    accent: 'from-cyan-500/40 via-blue-500/30 to-indigo-500/40',
  },
  {
    name: 'Hoshizuki Hikari',
    jpPrimary: '星月ヒカリ',
    jpAlt: '星月光理',
    accent: 'from-blue-500/40 via-sky-500/30 to-cyan-500/40',
  },
  {
    name: 'Keizawa Shizuka',
    jpPrimary: '警沢シズカ',
    jpAlt: '高山フミコ',
    accent: 'from-indigo-500/40 via-violet-500/30 to-blue-500/40',
  },
  {
    name: 'Takayama Fumiko',
    jpPrimary: '高山フミコ',
    jpAlt: '高山文美',
    accent: 'from-blue-600/40 via-cyan-500/30 to-emerald-500/40',
  },
  {
    name: 'Kisaragi Setsuna',
    jpPrimary: '如月セツナ',
    jpAlt: '如月刹那翠',
    accent: 'from-cyan-600/40 via-blue-500/30 to-indigo-600/40',
  },
  {
    name: 'Aurelya Vaelorien',
    jpPrimary: 'オーレリア・ヴァエロリアン',
    jpAlt: '蒼玲雅星',
    accent: 'from-sky-500/40 via-blue-500/30 to-purple-500/40',
  },
  {
    name: 'Teyna Kynarael',
    jpPrimary: 'テイナ・キナレイル',
    jpAlt: '天菜希音',
    accent: 'from-emerald-500/40 via-cyan-500/30 to-blue-500/40',
  },
  {
    name: 'Morvena Draevorin',
    jpPrimary: 'モルヴェナ・ドレイヴォリン',
    jpAlt: '黒焔魔凰',
    accent: 'from-fuchsia-500/40 via-violet-500/30 to-blue-500/40',
  },
];

function CharacterCard({ name, jpPrimary, jpAlt, accent, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className="relative group"
    >
      <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${accent} blur-sm opacity-60 group-hover:opacity-100 transition-opacity`} />
      <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/70 to-black/70 border border-white/10 p-6 md:p-7 backdrop-blur-xl overflow-hidden">
        <div className="absolute right-0 top-0 h-40 w-40 bg-gradient-to-bl from-blue-500/20 via-cyan-400/10 to-transparent rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-start gap-4">
          <div className="relative">
            <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center shadow-inner">
              <User className="h-7 w-7 text-blue-300/80" />
            </div>
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-tr from-blue-500/40 to-cyan-500/30 opacity-0 group-hover:opacity-100 blur-sm transition" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl md:text-2xl font-semibold tracking-wide">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-cyan-200 to-indigo-200">
                {name}
              </span>
            </h3>
            <div className="mt-1 text-sm text-blue-200/80 font-medium">
              <span className="inline-block mr-2">{jpPrimary}</span>
              <span className="inline-block text-white/30">/</span>
              <span className="inline-block ml-2 text-blue-100/70">{jpAlt}</span>
            </div>
          </div>
        </div>
        <div className="mt-5 text-sm leading-relaxed text-white/70">
          <p className="line-clamp-3">
            A figure within the Unknown Entity – Cosmic Governor mythos. More details will emerge as the cosmic saga unfolds.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Characters() {
  return (
    <section id="characters" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-300">
              Character Codex
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-base md:text-lg text-white/70"
          >
            Profiles of key entities navigating the black-metal void and blue nebula of the Unknown Entity universe.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {characters.map((c, i) => (
            <CharacterCard key={c.name} index={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
