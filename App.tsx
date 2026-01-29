import React from 'react';

const App = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans">
      {/* 배경 이미지 (unsplash의 고화질 인테리어 사진 사용) */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')`,
          filter: 'brightness(0.6)' 
        }}
      />
      
      {/* 보라색 오버레이 필터 (이미지 느낌 재현) */}
      <div className="absolute inset-0 bg-purple-900/20 z-10" />

      {/* 콘텐츠 레이어 */}
      <div className="relative z-20 text-white">
        {/* 네비게이션 헤더 */}
        <header className="flex justify-between items-center px-6 md:px-12 py-6">
          <div className="text-xl font-black flex items-center gap-2 tracking-tighter">
            <span className="bg-[#7B39FD] px-2 py-0.5 rounded text-white">L</span> LINK CLEAN
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium opacity-90">
            <a href="#" className="hover:opacity-100">회사 소개</a>
            <a href="#" className="hover:opacity-100">공간 시각화</a>
            <a href="#" className="hover:opacity-100">AI 시네마</a>
            <a href="#" className="hover:opacity-100">AI 음성 상담</a>
            <a href="#" className="hover:opacity-100">이용 후기</a>
          </nav>
          <button className="bg-[#7B39FD] hover:bg-[#6629e0] px-5 py-2 rounded-full text-sm font-bold transition-all">
            상담신청
          </button>
        </header>

        {/* 메인 섹션 */}
        <main className="flex flex-col items-center justify-center min-h-[85vh] text-center px-6">
          <div className="mb-6 flex flex-col items-center">
             <div className="w-12 h-[1px] bg-white/50 mb-2"></div>
             <p className="text-[10px] md:text-xs tracking-[0.3em] font-light opacity-90">JEJU'S FINEST SPACE CURATION</p>
             <div className="w-12 h-[1px] bg-white/50 mt-2"></div>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
            완벽을 넘어선<br />
            <span className="font-light italic">순수의 미학</span>
          </h1>
          
          <p className="max-w-xl text-sm md:text-lg opacity-80 mb-12 leading-relaxed font-light">
            링크클린은 보이지 않는 먼지 너머,<br />
            공간이 가진 본연의 가치와 숨결을 복원합니다.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-white text-[#1a1a1a] px-10 py-4 rounded-full font-bold text-sm hover:bg-gray-100 transition-all">
              AI 컨설팅 시작하기 &nbsp; &gt;
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold text-sm hover:bg-white/20 transition-all">
              포트폴리오 감상
            </button>
          </div>
          
          <div className="mt-20 opacity-50 text-[10px] tracking-widest">
            SCROLL TO EXPLORE
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
