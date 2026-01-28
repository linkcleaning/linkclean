import React from 'react';
import { Phone, CheckCircle, Star, ShieldCheck, Calendar } from 'lucide-react';

// 임시 통합 버전: 화면이 뜨는지 확인하는 용도입니다.
const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* 헤더 */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black text-[#7B39FD]">LINK CLEAN</div>
        <button className="bg-[#7B39FD] text-white px-5 py-2 rounded-full font-bold text-sm">상담신청</button>
      </header>

      {/* 히어로 섹션 */}
      <section className="pt-32 pb-20 px-6 text-center bg-gradient-to-b from-[#F2F7FF] to-white">
        <div className="inline-block bg-white border border-purple-100 px-4 py-1 rounded-full text-[#7B39FD] text-sm font-bold mb-6">
          제주 프리미엄 청소 솔루션
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          제주의 깨끗함,<br /><span className="text-[#7B39FD]">공간의 가치</span>를 올리다
        </h1>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto text-lg">
          링크클린은 보이지 않는 곳까지 케어합니다.<br />제주 전 지역 입주청소/이사청소 전문.
        </p>
        <div className="flex justify-center gap-4">
          <a href="tel:0504-763-6545" className="bg-[#7B39FD] text-white px-8 py-4 rounded-2xl font-bold shadow-lg flex items-center gap-2">
            <Phone size={20} /> 실시간 견적 문의
          </a>
        </div>
      </section>

      {/* 하단 정보 */}
      <footer className="py-10 border-t text-center text-gray-400 text-sm">
        <p>© 2026 링크클린. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
