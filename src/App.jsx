import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import SeriesShowcase from './components/SeriesShowcase.jsx';
import Characters from './components/Characters.jsx';
import EpisodeGrid from './components/EpisodeGrid.jsx';
import Lore from './components/Lore.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-white">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <Navbar />
      <main className="relative">
        <Hero />
        <SeriesShowcase />
        <Characters />
        <EpisodeGrid />
        <Lore />
      </main>
      <Footer />
    </div>
  );
}
