
import React, { useState } from 'react';
import { Play, Video, Loader2, Sparkles, AlertCircle, Key, RefreshCcw } from 'lucide-react';
import { generateCleaningVideo } from '../services/gemini';

const VideoVisualizer: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loadingMsg, setLoadingMsg] = useState('');

  const handleOpenKeySelector = async () => {
    // @ts-ignore
    await window.aistudio.openSelectKey();
    alert("API 키 설정이 완료되었습니다.");
  };

  const handleGenerate = async () => {
    // @ts-ignore
    const hasKey = await window.aistudio.hasSelectedApiKey();
    if (!hasKey) {
      if (confirm("영상 생성 서비스는 API 키 설정이 필요합니다.")) {
        await handleOpenKeySelector();
      }
      return;
    }
    if (!prompt.trim() || isGenerating) return;
    setIsGenerating(true);
    setLoadingMsg("AI가 영상 제작을 준비하고 있습니다...");
    try {
      const result = await generateCleaningVideo(prompt, (msg) => setLoadingMsg(msg));
      if (result) setVideoUrl(result);
      else alert("영상 생성 오류가 발생했습니다.");
    } catch (error: any) {
      if (error.message === "KEY_RESET") {
        alert("API 키 재설정이 필요합니다.");
        await handleOpenKeySelector();
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="AI 시네마" className="py-20 md:py-32 bg-gray-950 text-white overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-purple-custom font-black tracking-[0.2em] md:tracking-[0.4em] uppercase text-xs md:text-sm block mb-3">Veo 3.1 Advanced AI</span>
          <h2 className="text-3xl md:text-7xl font-black tracking-tighter mb-4">공간의 변화를 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-custom to-sky-deep">영화처럼</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          {/* Controls Panel */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-[32px] md:rounded-[48px] flex flex-col order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="p-2 md:p-3 bg-purple-custom rounded-xl md:rounded-2xl">
                {/* Fix: Replaced md:size with responsive Tailwind classes */}
                <Video className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-lg md:text-2xl font-black">시네마틱 프롬프트</h3>
            </div>

            <textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="장면을 묘사해보세요..."
              className="w-full h-32 md:h-48 p-5 bg-white/5 rounded-2xl md:rounded-3xl border border-white/10 focus:outline-none focus:ring-4 focus:ring-purple-custom/30 focus:border-purple-custom transition-all text-base md:text-lg font-medium resize-none mb-6"
            />

            <div className="bg-purple-custom/10 border border-purple-custom/20 rounded-xl p-4 flex gap-3 items-start mb-6">
              <AlertCircle size={18} className="text-purple-custom shrink-0" />
              <p className="text-[10px] md:text-sm text-gray-300">약 2~3분이 소요됩니다. API 키 결제 계정이 필요합니다.</p>
            </div>

            <div className="space-y-3">
              <button 
                onClick={handleGenerate}
                disabled={isGenerating || !prompt.trim()}
                className={`w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all active:scale-95 ${!prompt.trim() || isGenerating ? 'bg-white/10 text-white/30' : 'bg-purple-custom text-white shadow-2xl hover:-translate-y-1'}`}
              >
                {isGenerating ? <Loader2 size={20} className="animate-spin" /> : <Sparkles size={20} />}
                생성하기
              </button>
              <button onClick={handleOpenKeySelector} className="w-full py-3 text-xs font-bold text-gray-500 flex items-center justify-center gap-2">
                <Key size={14} /> API 키 설정
              </button>
            </div>
          </div>

          {/* Video Display Panel */}
          <div className="lg:col-span-3 relative order-1 lg:order-2">
            <div className="w-full aspect-video bg-white/5 rounded-[32px] md:rounded-[48px] overflow-hidden border border-white/10 shadow-2xl relative flex items-center justify-center group">
              {videoUrl ? (
                <video src={videoUrl} controls autoPlay loop className="w-full h-full object-cover" />
              ) : isGenerating ? (
                <div className="text-center p-6 flex flex-col items-center">
                  <Loader2 size={48} className="text-purple-custom animate-spin mb-4" />
                  <p className="text-sm md:text-lg font-black italic">{loadingMsg}</p>
                </div>
              ) : (
                <div className="text-center p-6">
                  <Play size={32} className="text-gray-600 mx-auto mb-4" />
                  <p className="text-sm font-bold text-gray-500">당신만의 청소 시네마</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoVisualizer;
