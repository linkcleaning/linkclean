import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutCompany from './components/AboutCompany';
import SpaceVisualizer from './components/SpaceVisualizer';
import VideoVisualizer from './components/VideoVisualizer';
import VoiceConsultant from './components/VoiceConsultant';
// import Services from './components/Services'; // 사용하지 않는 컴포넌트는 제외합니다.
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
        <VoiceConsultant />
        {/* <Services />  <-- 이 줄을 삭제하여 '청소 라인업' 섹션을 제거했습니다. */}
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
