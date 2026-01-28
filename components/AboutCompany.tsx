
import React from 'react';
import { ShieldCheck, Award, Zap, Leaf, MapPin, CheckCircle2, Sparkles, Building, Waves } from 'lucide-react';

const AboutCompany: React.FC = () => {
  return (
    <section id="회사 소개" className="bg-white overflow-hidden">
      {/* 1. Cinematic Intro Section */}
      <div className="relative py-24 md:py-40 bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000" 
            alt="Premium Interior" 
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-white"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 animate-bounce-slow">
            <Sparkles size={16} className="text-sky-custom" />
            <span className="text-[10px] md:text-xs font-black tracking-widest uppercase">The LinkClean Standard</span>
          </div>
          <h2 className="text-4xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter">
            공간에 <span className="text-sky-custom">숨결</span>을 불어넣는<br />
            <span className="italic font-light">Art of Cleaning</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-2xl text-slate-300 font-medium leading-relaxed opacity-90">
            링크클린은 제주의 푸른 자연만큼이나 깨끗한 삶의 터전을 위해<br className="hidden md:block" />
            보이지 않는 디테일까지 완벽하게 케어합니다.
          </p>
        </div>
      </div>

      {/* 2. Core Philosophy & Story */}
      <div className="container mx-auto px-6 md:px-8 -mt-20 md:-mt-32 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-[40px] md:rounded-[60px] shadow-2xl p-8 md:p-20 border border-gray-100">
          <div className="space-y-8 md:space-y-12">
            <div>
              <span className="text-purple-custom font-black tracking-[0.3em] uppercase text-xs md:text-sm block mb-4">Our Vision</span>
              <h3 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                제주의 습기와 염분,<br />
                <span className="text-purple-custom underline decoration-purple-100 underline-offset-8 font-serif italic">모든 환경적 변수</span>를 이깁니다.
              </h3>
            </div>
            <p className="text-base md:text-xl text-gray-500 font-medium leading-relaxed">
              링크클린은 단순히 먼지를 닦아내는 것을 넘어, 제주의 지리적 특성을 고려한 <b>전문 방습 및 살균 시스템</b>을 구축했습니다. 고객님의 소중한 자산인 공간의 수명을 연장하고 가치를 보존하는 것이 우리의 사명입니다.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <ShieldCheck className="text-sky-deep" />, text: "철저한 보안 및 안심 케어" },
                { icon: <Award className="text-purple-custom" />, text: "전문 자격 기술진 구성" },
                { icon: <Waves className="text-blue-400" />, text: "제주 특화 염분 제거 솔루션" },
                { icon: <Building className="text-indigo-400" />, text: "대형 공간 관리 노하우" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-lg transition-all">
                  <div className="shrink-0">{item.icon}</div>
                  <span className="text-sm md:text-base font-bold text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200" 
                alt="Expertise" 
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-purple-custom text-white p-8 md:p-12 rounded-[32px] md:rounded-[40px] shadow-2xl -rotate-3 hover:rotate-0 transition-transform">
              <div className="text-3xl md:text-5xl font-black mb-1">1,200+</div>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-80">Completed Projects in 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Global Standard Equipment */}
      <div className="py-24 md:py-40 bg-gray-50 mt-20">
        <div className="container mx-auto px-6 md:px-8 text-center mb-16 md:mb-24">
          <span className="text-purple-custom font-black tracking-[0.4em] uppercase text-xs md:text-sm block mb-4">Quality Assurance</span>
          <h2 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tight mb-8">최고의 결과는<br />최고의 도구에서 나옵니다.</h2>
          <p className="text-gray-500 font-medium text-sm md:text-lg max-w-2xl mx-auto">
            링크클린은 독일, 이탈리아 등 전 세계에서 검증된 최첨단 장비만을 사용합니다.<br />
            보이지 않는 진드기 한 마리까지 놓치지 않는 링크클린의 자부심입니다.
          </p>
        </div>

        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: <Zap size={32} />, title: "Hyper Speed", desc: "신속하고 정확한 팀워크", color: "bg-amber-50 text-amber-600" },
              { icon: <Leaf size={32} />, title: "Eco Shield", desc: "친환경 생분해 세제 사용", color: "bg-green-50 text-green-600" },
              { icon: <Award size={32} />, title: "Master Class", desc: "분야별 청소 마스터 배치", color: "bg-purple-50 text-purple-600" },
              { icon: <ShieldCheck size={32} />, title: "Safe Plus", desc: "철저한 사후 책임 보상제", color: "bg-sky-50 text-sky-deep" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 md:p-12 rounded-[32px] md:rounded-[48px] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all text-center flex flex-col items-center group">
                <div className={`w-14 h-14 md:w-20 md:h-20 rounded-[24px] md:rounded-[32px] flex items-center justify-center mb-6 md:mb-10 transition-transform group-hover:scale-110 ${item.color}`}>
                  {item.icon}
                </div>
                <h4 className="text-gray-400 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mb-3">{item.title}</h4>
                <p className="text-gray-900 font-black text-sm md:text-xl break-keep">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Presence Section */}
      <div className="py-24 md:py-40 bg-white relative">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
            <div className="flex-1 order-2 md:order-1">
              <div className="bg-sky-custom rounded-[48px] p-10 md:p-20 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <MapPin className="text-purple-custom" />
                    <span className="text-gray-900 font-black text-lg uppercase tracking-widest">Jeju Coverage</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                    제주 전역,<br />
                    어디서든 링크클린
                  </h3>
                  <div className="space-y-4">
                    {['제주시 전 지역', '서귀포시 전 지역', '도서 지역 별도 상담', '기업형 장기 유지 관리'].map((loc, i) => (
                      <div key={i} className="flex items-center gap-4 text-gray-700 font-bold text-lg md:text-xl">
                        <div className="w-2 h-2 rounded-full bg-purple-custom"></div>
                        {loc}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Visual Background Accent */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-white/40 rounded-full blur-3xl group-hover:bg-purple-custom/10 transition-colors duration-1000"></div>
              </div>
            </div>
            
            <div className="flex-1 order-1 md:order-2 text-center md:text-left">
              <h3 className="text-4xl md:text-6xl font-black text-gray-900 mb-10 tracking-tighter leading-tight">
                우리는 공간의<br />
                <span className="text-purple-custom">본연의 아름다움</span>을<br />
                찾아드립니다.
              </h3>
              <p className="text-lg md:text-2xl text-gray-500 font-medium leading-relaxed mb-12">
                단순히 쓸고 닦는 행위를 넘어, 고객님이 머무시는 모든 순간이 쾌적하고 행복할 수 있도록 링크클린의 진심을 담습니다.
              </p>
              <a href="tel:010-1234-5678" className="inline-flex items-center gap-3 px-10 py-5 bg-purple-custom text-white rounded-2xl md:rounded-3xl font-black text-xl shadow-2xl shadow-purple-200 hover:scale-105 transition-transform active:scale-95">
                지금 상담 시작하기
                <CheckCircle2 size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
