import React from 'react';

const App = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* 배경 이미지 섹션 */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url('이미지주소')`, // 여기에 인테리어 사진 주소를 넣으세요
          filter: 'brightness(0.7)' 
        }}
      />
      
      {/* 보라색 오버레이 필터 */}
      <div className="absolute inset-0 bg-purple-900/30 z-10" />

      {/* 헤더 및 콘텐츠 */}
      <div className="relative z-20 text-white">
        <header className="flex justify-between items-center px-10 py-6">
          <div className="text-xl font-bold flex items-center gap-2">
            <span className="bg-purple-600 p-1 rounded">L</span> LINK CLEAN
          </div>
          <nav className="hidden md:flex gap-6 text-sm opacity-80">
            <span>회사소개</span><span>공간 시각화</span><span>AI 시네마</span><span>AI 음성 상담</span><span>이용 후기</span>
          </nav>
          <button className="bg-purple-600 px-4 py-2 rounded-full text-sm">상담신청</button>
        </header>

        <main className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
          <p className="text-xs tracking-widest opacity-80 mb-4 border-t border-b py-1">JEJU'S FINEST SPACE CURATION</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            완벽을 넘어선<br />순수의 미학
          </h1>
          <p className="max-w-xl opacity-70 mb-10">
            링크클린은 보이지 않는 먼지 너머, 공간이 가진 본연의 가치와 숨결을 복원합니다.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-purple-900 px-8 py-3 rounded-md font-bold">AI 컨설팅 시작하기 &gt;</button>
            <button className="border border-white/50 px-8 py-3 rounded-md font-bold">포트폴리오 감상</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
