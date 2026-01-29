import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutCompany from './components/AboutCompany';
import SpaceVisualizer from './components/SpaceVisualizer';
import VideoVisualizer from './components/VideoVisualizer';
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
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
