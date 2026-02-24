import React, { useRef, useState, useEffect } from 'react';
import { Upload, Download, Eye, EyeOff, Smartphone, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SHORTS_ASPECT_RATIO = 9 / 16;
const PREVIEW_WIDTH = 360;
const PREVIEW_HEIGHT = 640;

export default function ShortsPreviewer() {
  const [image, setImage] = useState<string | null>(null);
  const [showOverlay, setShowOverlay] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (image && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const img = new Image();
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const imgRatio = img.width / img.height;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (imgRatio > SHORTS_ASPECT_RATIO) {
          drawHeight = canvas.height;
          drawWidth = canvas.height * imgRatio;
          offsetX = -(drawWidth - canvas.width) / 2;
          offsetY = 0;
        } else {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgRatio;
          offsetX = 0;
          offsetY = -(drawHeight - canvas.height) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      };
      img.src = image;
    }
  }, [image]);

  const downloadPreview = () => {
    if (!canvasRef.current) return;
    const link = document.createElement('a');
    link.download = 'shorts-preview.png';
    link.href = canvasRef.current.toDataURL();
    link.click();
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Tool Controls */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <div className="w-2 h-8 bg-emerald-500 rounded-full" />
              Creator Studio
            </h2>
            <p className="text-zinc-400 text-sm">Upload your creative and verify the safe zones instantly.</p>
          </div>
          
          <div className="space-y-4">
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="w-full group relative py-5 px-6 bg-white text-black rounded-2xl font-bold transition-all hover:bg-emerald-400 active:scale-[0.98] overflow-hidden"
            >
              <div className="relative z-10 flex items-center justify-center gap-3">
                <Upload className="w-5 h-5" />
                Upload Content
              </div>
            </button>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileUpload} 
              className="hidden" 
              accept="image/*"
            />

            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => setShowOverlay(!showOverlay)}
                className={`py-4 px-4 rounded-2xl font-semibold transition-all flex items-center justify-center gap-2 border ${
                  showOverlay 
                  ? 'bg-white/5 border-white/10 text-white' 
                  : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                }`}
              >
                {showOverlay ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                Overlay
              </button>
              
              <button 
                onClick={downloadPreview}
                disabled={!image}
                className="py-4 px-4 bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-2xl font-semibold transition-all flex items-center justify-center gap-2 border border-white/10"
              >
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>

          <div className="glass rounded-3xl p-6 space-y-4">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                <Info className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">Safe Zone Tip</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Keep your captions within the center 60% of the screen. Avoid the bottom 200px where the description sits.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Right: Preview Canvas */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Phone Frame - Ultra Sleek */}
            <div className="relative w-[320px] h-[680px] bg-[#0a0a0a] rounded-[3.5rem] p-3 shadow-[0_0_100px_rgba(0,0,0,0.8),inset_0_0_2px_rgba(255,255,255,0.1)] border border-white/10">
              {/* Dynamic Island */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-50 border border-white/5" />
              
              <div className="relative w-full h-full rounded-[2.8rem] overflow-hidden bg-zinc-900">
                <canvas 
                  ref={canvasRef}
                  width={PREVIEW_WIDTH}
                  height={PREVIEW_HEIGHT}
                  className="w-full h-full object-cover"
                />
                
                {!image && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20 p-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center">
                      <Smartphone className="w-8 h-8 opacity-50" />
                    </div>
                    <p className="text-xs font-medium uppercase tracking-widest">Awaiting Content</p>
                  </div>
                )}

                {/* YouTube Shorts UI Overlay */}
                <AnimatePresence>
                  {showOverlay && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 pointer-events-none select-none"
                    >
                      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                      {/* Right Sidebar Buttons */}
                      <div className="absolute right-3 bottom-32 flex flex-col gap-5 items-center">
                        {[
                          { label: '1.2M', icon: '👍' },
                          { label: 'Dislike', icon: '👎' },
                          { label: '45K', icon: '💬' },
                          { label: 'Share', icon: '↗️' },
                          { label: 'Remix', icon: '💿' }
                        ].map((btn, i) => (
                          <div key={i} className="flex flex-col items-center gap-1">
                            <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/10">
                              <span className="text-lg">{btn.icon}</span>
                            </div>
                            <span className="text-[10px] text-white font-bold drop-shadow-md">{btn.label}</span>
                          </div>
                        ))}
                      </div>

                      {/* Bottom Info */}
                      <div className="absolute bottom-8 left-4 right-16 text-white space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 p-0.5">
                            <div className="w-full h-full rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-bold">YT</div>
                          </div>
                          <span className="font-bold text-sm tracking-tight">@CreatorName</span>
                          <button className="bg-white text-black text-[10px] font-black px-4 py-1.5 rounded-full">SUBSCRIBE</button>
                        </div>
                        <p className="text-xs font-medium leading-relaxed line-clamp-2 opacity-90">
                          Master the YouTube Shorts Safe Zone with this professional preview tool! 🚀 #Shorts #CreatorTips #Viral
                        </p>
                        <div className="flex items-center gap-2 text-[10px] font-bold bg-black/20 backdrop-blur-md w-fit px-3 py-1.5 rounded-full border border-white/10">
                          <span className="animate-pulse">🎵</span>
                          <span className="truncate max-w-[120px]">Original Audio • Trending Sound</span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                        <div className="h-full bg-red-600 w-1/3 shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute -inset-20 bg-emerald-500/10 blur-[100px] -z-10 rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
}
