import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutCompany from './components/AboutCompany';
// 에러를 일으키는 AI 관련 기능들은 잠시 제외합니다.
// import SpaceVisualizer from './components/SpaceVisualizer';
// import VideoVisualizer from './components/VideoVisualizer';
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
        {/* 아래 기능들은 에러 해결 후 나중에 추가할 수 있습니다. */}
        <SpaceVisualizer />
        <VideoVisualizer />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
