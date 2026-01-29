import React, { useState } from 'react';
import { Play, Video, Loader2, Sparkles } from 'lucide-react';
import { generateCleaningVideo } from '../services/gemini'; // 연결 확인

const VideoVisualizer = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const response = await generateCleaningVideo("전문적인 청소 과정을 담은 시네마틱 영상 프롬프트를 만들어줘");
      setResult(response);
    } catch (e) {
      setResult("영상 생성 중 오류가 발생했습니다.");
    }
    setIsGenerating(false);
  };

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">AI 시네마틱 프롬프트</h2>
        <button 
          onClick={handleGenerate}
          disabled={isGenerating}
          className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full flex items-center mx-auto transition"
        >
          {isGenerating ? <Loader2 className="animate-spin mr-2" /> : <Play className="mr-2" />}
          시네마틱 영상 구상하기
        </button>
        {result && <div className="mt-8 p-6 bg-gray-800 rounded-2xl border border-gray-700">{result}</div>}
      </div>
    </section>
  );
};

export default VideoVisualizer;
