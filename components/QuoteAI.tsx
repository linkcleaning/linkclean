
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Info } from 'lucide-react';
import { getCleaningAdvice } from '../services/gemini';
import { ChatMessage } from '../types';

const QuoteAI: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '반갑습니다! 링크클린의 AI 시니어 컨설턴트입니다.\n\n고객님의 소중한 공간을 위한 맞춤형 케어 솔루션을 제안해 드립니다. 청소가 필요한 공간의 유형이나 특별히 신경 쓰이는 부분을 말씀해 주시면 상세히 상담해 드리겠습니다. 😊' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const aiResponse = await getCleaningAdvice(userMessage);
    setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <section id="AI 견적 상담" className="py-24 md:py-40 bg-gray-50/30">
      <div className="container mx-auto px-6 md:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-purple-custom font-black tracking-[0.4em] uppercase text-xs md:text-sm block mb-4">AI Smart Consulting</span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter">프라이빗 맞춤 상담</h2>
        </div>

        <div className="bg-white rounded-[48px] md:rounded-[64px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col h-[650px] md:h-[750px] border border-gray-100 relative">
          
          {/* Header */}
          <div className="px-8 py-6 border-b border-gray-50 flex items-center justify-between bg-white/50 backdrop-blur-md sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-custom/10 rounded-2xl flex items-center justify-center text-purple-custom shadow-inner">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="font-black text-gray-900 text-lg tracking-tight">AI 클린 컨설턴트</h3>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Online & Ready</span>
                </div>
              </div>
            </div>
            <button className="text-gray-300 hover:text-gray-500 transition-colors">
              <Info size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 md:p-12 space-y-10 bg-[#FAFAFB]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-4 md:gap-6 max-w-[85%] md:max-w-[75%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm mt-1 ${msg.role === 'user' ? 'bg-white text-purple-custom border border-purple-100' : 'bg-purple-custom text-white'}`}>
                    {msg.role === 'user' ? <User size={20} /> : <Bot size={24} />}
                  </div>
                  <div className={`group relative p-6 md:p-8 rounded-[32px] text-base md:text-lg leading-loose font-medium whitespace-pre-wrap shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-gradient-to-br from-purple-custom to-purple-dark text-white rounded-tr-none' 
                      : 'bg-white text-gray-700 rounded-tl-none border border-gray-100/50'
                  }`}>
                    {msg.text}
                    <span className={`absolute bottom-[-24px] text-[10px] font-bold text-gray-300 uppercase tracking-widest ${msg.role === 'user' ? 'right-2' : 'left-2'}`}>
                      {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-2xl bg-purple-custom text-white flex items-center justify-center shadow-lg animate-bounce">
                    <Loader2 size={24} className="animate-spin" />
                  </div>
                  <div className="px-6 py-4 bg-white/50 border border-gray-100 rounded-[24px] rounded-tl-none text-gray-400 text-sm font-bold tracking-tight">
                    공간 분석 정보를 바탕으로 답변을 구성 중입니다...
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-8 md:p-10 bg-white border-t border-gray-50">
            <div className="max-w-3xl mx-auto relative flex items-center">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="상담 내용을 입력해주세요 (예: 30평형 아파트 입주 청소 과정이 궁금해요)"
                className="w-full pl-8 pr-20 py-5 md:py-6 bg-gray-50 rounded-[32px] border border-transparent focus:bg-white focus:border-purple-custom/30 focus:ring-4 focus:ring-purple-500/5 transition-all text-gray-800 font-medium text-base md:text-lg placeholder:text-gray-300"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className={`absolute right-2 p-4 md:p-5 rounded-[24px] transition-all active:scale-90 ${
                  input.trim() 
                    ? 'bg-purple-custom text-white shadow-xl shadow-purple-200 hover:bg-purple-dark' 
                    : 'bg-gray-100 text-gray-300'
                }`}
              >
                <Send size={24} />
              </button>
            </div>
            <p className="text-center mt-6 text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em]">
              All conversations are encrypted and private
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteAI;
