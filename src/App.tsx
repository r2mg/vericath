import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Insight } from './components/Insight';
import { Solution } from './components/Solution';
import { Market } from './components/Market';
import { Impact } from './components/Impact';
import { Team } from './components/Team';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import faviconImage from 'figma:asset/753bd38a2f50b61d213f1cacab33f3832b819f6e.png';

export default function App() {
  React.useEffect(() => {
    document.title = 'VeriCath - Revolutionizing Urinary Care for Women';
    
    // Set favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = faviconImage;
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Story />
      <Insight />
      <Solution />
      <Market />
      <Impact />
      <Team />
      <Footer />
      <ScrollToTop />
    </div>
  );
}