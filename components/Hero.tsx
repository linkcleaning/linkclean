
import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[95vh] md:h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Deep Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Luxury Interior" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-dark/95 via-purple-custom/40 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10 text-white">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-[1px] w-12 bg-sky-custom/50"></div>
            <span className="px-3 py-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-[10px] md:text-xs font-black tracking-[0.3em] uppercase text-sky-custom">
              Jeju's Finest Space Curation
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-[9rem] font-black mb-8 leading-[0.95] tracking-tighter">
            완벽을 넘어선<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-custom via-white to-purple-200">순수의 미학</span>
          </h1>
          <p className="text-xl md:text-3xl text-purple-100/80 mb-12 leading-tight font-light tracking-tight max-w-2xl">
            링크클린은 보이지 않는 먼지 너머,<br />
            공간이 가진 본연의 가치와 숨결을 복원합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <button className="bg-white text-purple-custom px-10 py-5 rounded-2xl font-black text-lg hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 active:scale-95">
              AI 컨설팅 시작하기
              <ChevronRight size={22} />
            </button>
            <button className="bg-white/5 backdrop-blur-2xl border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              포트폴리오 감상
            </button>
          </div>
        </div>
      </div>

      {/* Floating Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
        <span className="text-[10px] font-black tracking-widest uppercase">Scroll to Explore</span>
      </div>
    </section>
  );
};

export default Hero;
