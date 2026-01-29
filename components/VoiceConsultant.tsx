import React, { useState } from 'react';
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
      setMessages(prev => [...prev, { role: 'bot', content: result.response.text() }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'bot', content: '잠시 후 다시 시도해주세요.' }]);
    }
  };
  // ... 하단 디자인 코드는 그대로 유지 ...
