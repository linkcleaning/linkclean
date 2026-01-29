import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const VoiceConsultant = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'bot', content: '반갑습니다! 링크클린의 AI 시니어 컨설턴트입니다. 어떤 공간의 청소가 궁금하신가요?' }
  ]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    try {
      const genAI = new GoogleGenerativeAI("AIzaSyAI0BPPwdvDuyXmyTqDpqNE3qp6bEcp2tM");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(input);
      const response = await result.response;
      setMessages(prev => [...prev, { role: 'bot', content: response.text() }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'bot', content: '죄송합니다. 잠시 후 다시 시도해주세요.' }]);
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">프라이빗 맞춤 상담</h2>
        </div>
        <div className="bg-gray-50 rounded-3xl p-6 shadow-inner min-h-[500px] flex flex-col">
          <div className="flex-1 space-y-4 mb-6 overflow-y-auto">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl ${msg.role === 'user' ? 'bg-purple-600 text-white' : 'bg-white text-gray-800 border'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
          <div className="relative">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="상담 내용을 입력해 주세요..."
              className="w-full p-4 pr-12 rounded-xl border outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button onClick={handleSend} className="absolute right-3 top-3 text-purple-600">
              <Send size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceConsultant;
