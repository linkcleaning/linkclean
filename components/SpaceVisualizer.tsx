
import React, { useState } from 'react';
import { Wand2, Download, RefreshCw, Image as ImageIcon, Loader2, Sparkles, RefreshCcw } from 'lucide-react';
import { generateCleanImage } from '../services/gemini';

const PRESETS = [
  { id: 'jeju', label: '제주 미니멀', prompt: 'Jeju island minimalist house with basalt stone walls and large windows overlooking the ocean' },
  { id: 'luxury', label: '럭셔리 스위트', prompt: 'Ultra-modern luxury hotel suite with marble floors and golden hour lighting' },
  { id: 'zen', label: '젠 스타일', prompt: 'Japanese zen style living room with natural wood and soft paper lamps' }
];

const SpaceVisualizer: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [aspectRatio, setAspectRatio] = useState<"1:1" | "16:9" | "9:16">("1:1");

  const handleGenerate = async (overridePrompt?: string) => {
    const finalPrompt = overridePrompt || prompt;
    if (!finalPrompt.trim() || isGenerating) return;
    setIsGenerating(true);
    const result = await generateCleanImage(finalPrompt, aspectRatio);
    if (result) {
      setGeneratedImage(result);
    } else {
      alert("이미지 생성 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
    setIsGenerating(false);
  };

  const handleReset = () => {
    setPrompt('');
    setGeneratedImage(null);
  };

  return (
    <section id="공간 시각화" className="py-24 md:py-40 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Text Content Area */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="text-purple-custom font-black tracking-[0.4em] uppercase text-xs md:text-sm block mb-6">Visual Intelligence</span>
              <h2 className="text-4xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tighter">
                당신의 공간,<br />
                <span className="text-purple-custom italic">상상</span> 그 이상의<br />현실로.
              </h2>
              <p className="mt-8 text-gray-500 font-medium text-lg leading-relaxed">
                링크클린의 AI 비주얼라이저는 고객님이 꿈꾸는 가장 깨끗하고 이상적인 공간을 단 몇 초 만에 고해상도 이미지로 구현합니다.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {PRESETS.map(p => (
                  <button 
                    key={p.id}
                    onClick={() => { setPrompt(p.prompt); handleGenerate(p.prompt); }}
                    className="px-4 py-2 bg-gray-50 hover:bg-purple-custom hover:text-white rounded-full text-xs font-bold transition-all border border-gray-100"
                  >
                    #{p.label}
                  </button>
                ))}
              </div>

              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="공간의 분위기를 설명해주세요. (예: 쏟아지는 햇살 아래 하얀 커튼이 흩날리는 거실)"
                className="w-full p-6 bg-gray-50 rounded-[32px] border border-gray-100 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-custom transition-all text-gray-800 font-medium min-h-[160px] resize-none text-base"
              />

              <div className="flex gap-3">
                <button 
                  onClick={() => handleGenerate()}
                  disabled={isGenerating || !prompt.trim()}
                  className="flex-[4] py-6 bg-purple-custom text-white rounded-[24px] font-black text-xl flex items-center justify-center gap-3 shadow-2xl shadow-purple-200 active:scale-95 disabled:bg-gray-200 transition-all"
                >
                  {isGenerating ? <Loader2 className="animate-spin" /> : <Sparkles />}
                  공간 렌더링 시작
                </button>
                <button 
                  onClick={handleReset}
                  title="초기화"
                  className="flex-1 py-6 bg-gray-100 text-gray-400 rounded-[24px] font-black flex items-center justify-center hover:bg-white hover:text-purple-custom border border-transparent hover:border-purple-custom/20 transition-all active:scale-90"
                >
                  <RefreshCcw size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Preview Panel Area */}
          <div className="lg:col-span-7 relative">
            <div className={`w-full bg-gray-50 rounded-[48px] overflow-hidden border border-gray-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] flex items-center justify-center relative ${aspectRatio === "1:1" ? "aspect-square" : aspectRatio === "16:9" ? "aspect-video" : "aspect-[9/16]"}`}>
              {generatedImage ? (
                <img src={generatedImage} alt="AI Created Space" className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-1000" />
              ) : (
                <div className="text-center p-12 space-y-4">
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-purple-custom mx-auto shadow-xl">
                    <ImageIcon size={32} />
                  </div>
                  <p className="text-gray-400 font-bold tracking-tight">AI가 디자인한 공간이 이곳에 표시됩니다.</p>
                </div>
              )}

              {isGenerating && (
                <div className="absolute inset-0 bg-white/90 backdrop-blur-xl flex flex-col items-center justify-center p-10 text-center z-30">
                  <Loader2 size={48} className="text-purple-custom animate-spin mb-6" />
                  <h4 className="text-2xl font-black text-gray-900 mb-2">Space Re-imagining...</h4>
                  <p className="text-gray-500 font-medium italic">가장 깨끗한 상태의 분자 구조를 계산하고 있습니다.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpaceVisualizer;
