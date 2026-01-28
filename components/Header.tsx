
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-custom rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-purple-200">L</div>
          <span className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-gray-900' : 'text-white'}`}>LINK CLEAN</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['회사 소개', '공간 시각화', 'AI 시네마', 'AI 음성 상담', '이용 후기'].map((item) => (
            <a key={item} href={`#${item}`} className={`text-xs font-bold tracking-tight hover:text-purple-custom transition-colors uppercase ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>
              {item}
            </a>
          ))}
          <a href="tel:010-1234-5678" className="bg-purple-custom text-white px-6 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-purple-dark transition-all shadow-xl shadow-purple-500/20 active:scale-95">
            <Phone size={14} />
            상담문의
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 transition-transform active:scale-90">
          {isMobileMenuOpen ? 
            <X size={28} className={isScrolled ? 'text-gray-900' : 'text-white'} /> : 
            <Menu size={28} className={isScrolled ? 'text-gray-900' : 'text-white'} />
          }
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-2xl py-8 px-6 animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-6 text-center">
            {['회사 소개', '공간 시각화', 'AI 시네마', 'AI 음성 상담', '이용 후기', 'AI 견적 상담'].map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-gray-800 py-3 border-b border-gray-50 last:border-0 hover:text-purple-custom">
                {item}
              </a>
            ))}
            <a href="tel:010-1234-5678" className="bg-purple-custom text-white py-4 rounded-2xl font-bold mt-4 shadow-xl shadow-purple-200">
              실시간 전화 상담하기
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
