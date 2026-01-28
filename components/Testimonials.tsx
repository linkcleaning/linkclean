
import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="이용 후기" className="py-24 md:py-40 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-20 md:mb-32">
          <span className="text-purple-custom font-black tracking-[0.4em] uppercase text-xs md:text-sm block mb-6">The Verified Voices</span>
          <h2 className="text-4xl md:text-8xl font-black text-gray-900 leading-tight tracking-tighter">
            우리가 만드는<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-custom to-sky-deep">변화의 기록들</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="relative group">
              {/* Card Decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-custom/5 to-sky-deep/5 rounded-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative bg-white border border-gray-100 p-10 md:p-16 rounded-[48px] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                <div className="flex justify-between items-start mb-10">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-purple-custom text-purple-custom" />
                    ))}
                  </div>
                  <Quote size={40} className="text-gray-100 group-hover:text-purple-custom/10 transition-colors" />
                </div>

                <p className="text-xl md:text-3xl font-medium leading-relaxed mb-12 text-gray-800 tracking-tight flex-1">
                  "{t.content}"
                </p>

                <div className="flex items-center gap-6 pt-10 border-t border-gray-50">
                  <div className="w-14 h-14 md:w-20 md:h-20 bg-gray-50 rounded-[28px] flex items-center justify-center font-black text-2xl text-purple-custom">
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-black text-xl text-gray-900">{t.author} 고객님</span>
                      <CheckCircle size={16} className="text-sky-deep" />
                    </div>
                    <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">{t.location} • Verified Review</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 md:mt-40 p-10 md:p-20 bg-slate-900 rounded-[60px] text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-8">당신의 공간도<br />놀라운 변화를 맞이할 준비가 되었나요?</h3>
            <button className="px-12 py-6 bg-white text-gray-900 rounded-2xl font-black text-xl hover:scale-105 transition-transform active:scale-95 shadow-2xl">
              지금 바로 예약 문의
            </button>
          </div>
          {/* Background visual */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10">
             <img src="https://images.unsplash.com/photo-1603614486387-276f74fcbe2a?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
