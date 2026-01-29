import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutCompany from './components/AboutCompany';
import SpaceVisualizer from './components/SpaceVisualizer';
import VideoVisualizer from './components/VideoVisualizer';
import VoiceConsultant from './components/VoiceConsultant'; // 음성 상담 불러오기
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <main>
        <AboutCompany />
        <SpaceVisualizer />
        <VideoVisualizer />
        <VoiceConsultant /> {/* 화면에 음성 상담 섹션 표시 */}
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
