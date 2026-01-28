import React from 'react';
import Header from './components/Header.tsx'; // 끝에 .tsx 를 붙여주세요
import Hero from './components/Hero.tsx';
import AboutCompany from './components/AboutCompany.tsx';
import QuoteAI from './components/QuoteAI.tsx';
import SpaceVisualizer from './components/SpaceVisualizer.tsx';
import VideoVisualizer from './components/VideoVisualizer.tsx';
import VoiceConsultant from './components/VoiceConsultant.tsx';
import Testimonials from './components/Testimonials.tsx';
import Footer from './components/Footer.tsx';
import { Phone } from 'lucide-react';
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AboutCompany />
        <SpaceVisualizer />
        <VideoVisualizer />
        <VoiceConsultant />
        <QuoteAI />
        <Testimonials />
        
        {/* Floating Call CTA - Mobile Only */}
        <div className="md:hidden fixed bottom-8 right-8 z-40">
          <a 
            href="tel:010-1234-5678" 
            className="w-16 h-16 bg-purple-custom rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-purple-500/40 animate-bounce"
            aria-label="Call Now"
          >
            <Phone size={28} />
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
