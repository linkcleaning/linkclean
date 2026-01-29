import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutCompany from './components/AboutCompany';
import SpaceVisualizer from './components/SpaceVisualizer';
import VideoVisualizer from './components/VideoVisualizer';
// VoiceConsultant는 라이브러리 문제 해결 후 나중에 추가하겠습니다.
// import VoiceConsultant from './components/VoiceConsultant'; 
import QuoteAI from './components/QuoteAI';
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
        {/* <VoiceConsultant /> - 에러 방지를 위해 잠시 주석 처리 */}
        <QuoteAI />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
