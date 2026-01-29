import React from 'react';
// 폴더에 있는 컴포넌트들을 모두 불러옵니다.
import Header from './components/Header';
import Hero from './components/Hero';
import AboutCompany from './components/AboutCompany';
import SpaceVisualizer from './components/SpaceVisualizer';
import VideoVisualizer from './components/VideoVisualizer';
import VoiceConsultant from './components/VoiceConsultant';
import QuoteAI from './components/QuoteAI';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. 상단 메뉴 */}
      <Header />
      
      {/* 2. 메인 히어로 화면 (인테리어 배경) */}
      <Hero />
      
      {/* 3. 아래로 이어지는 섹션들 */}
      <main>
        <AboutCompany />
        <SpaceVisualizer />
        <VideoVisualizer />
        <VoiceConsultant />
        <QuoteAI />
        <Services />
        <Testimonials />
      </main>
      
      {/* 4. 하단 정보 */}
      <Footer />
    </div>
  );
}

export default App;
