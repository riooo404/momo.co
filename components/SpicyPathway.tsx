
import React, { useState } from 'react';
import { IMAGES } from '../constants';

interface SpicyPathwayProps {
  onSwitchPath: () => void;
}

const SpicyPathway: React.FC<SpicyPathwayProps> = ({ onSwitchPath }) => {
  const [step, setStep] = useState(0);

  if (step === 0) {
    return (
      <div className="min-h-screen w-full bg-chilli-dark relative flex flex-col lg:flex-row items-center justify-center overflow-hidden">
        {/* Ambient Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen opacity-50 translate-x-1/2 -translate-y-1/4"></div>
        
        <main className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Narrative */}
          <div className="w-full lg:w-1/2 space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-primary"></div>
              <span className="text-primary text-sm font-bold tracking-widest uppercase">The Origin • 01</span>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-primary font-medium text-lg uppercase tracking-wider">Ignite your senses</h2>
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-white">
                THE INFERNO <br/>
                <span className="text-primary relative inline-block">BITE</span>
              </h1>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed max-w-xl border-l-2 border-primary/30 pl-6">
              Hand-folded, steam-seared, and tossed in our signature Szechuan ghost pepper oil. This isn't just heat; it's a <span className="text-white font-semibold">flavor revolution</span>.
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-md">
              {['Bird\'s Eye Chili', 'Roasted Garlic', 'Szechuan Pepper'].map((item) => (
                <div key={item} className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-4 flex flex-col items-center gap-2 border border-white/5 hover:border-primary/50 transition-all group">
                  <span className="material-icons-outlined text-primary group-hover:scale-110 transition-transform">whatshot</span>
                  <span className="text-[10px] font-bold text-slate-300 uppercase text-center">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-center">
            <div className="absolute w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full border border-primary/20"></div>
            <div className="relative z-10 w-full max-w-md aspect-square">
              <img 
                src={IMAGES.SPICY_BASKET} 
                alt="Inferno Momo" 
                className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(242,13,13,0.3)]" 
              />
              <div className="absolute bottom-10 left-0 bg-zinc-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-primary/30 flex items-center gap-2 shadow-xl">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-xs font-bold text-white uppercase">Extra Spicy</span>
              </div>
            </div>
          </div>
        </main>

        <button 
          onClick={() => setStep(1)}
          className="fixed bottom-12 right-12 z-50 bg-primary hover:bg-red-700 text-white pl-8 pr-6 py-5 rounded-full flex items-center gap-4 transition-all hover:translate-x-1 group shadow-[0_0_30px_rgba(242,13,13,0.4)]"
        >
          <div className="text-left leading-none">
            <span className="text-[10px] opacity-80 uppercase tracking-widest font-semibold mb-1 block">Next Chapter</span>
            <span className="text-lg font-bold">Flavor Profile</span>
          </div>
          <span className="material-icons-round group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex bg-background-dark antialiased animate-in fade-in duration-1000">
      {/* Sidebar Profile */}
      <aside className="w-full lg:w-[35%] h-full flex flex-col bg-background-dark border-r border-zinc-800 shadow-2xl z-20 overflow-y-auto">
        <div className="px-8 py-12 space-y-12">
          <div>
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Technical specs</h2>
            <h3 className="text-4xl font-extrabold text-white leading-tight">The Heat<br/>Spectrum</h3>
            <p className="mt-4 text-zinc-400 text-sm leading-relaxed">
              A complex profile starting with aromatic numbing heat, followed by a slow-burn ghost pepper finish.
            </p>
          </div>

          <div className="bg-zinc-900/50 rounded-2xl p-6 border border-zinc-800 backdrop-blur-sm">
            <div className="flex justify-between items-end mb-4">
              <span className="text-white font-bold text-lg">Spice Intensity</span>
              <div className="text-right">
                <div className="text-primary font-extrabold text-xl">50,000</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-wide">Scoville Units</div>
              </div>
            </div>
            <div className="h-3 w-full bg-zinc-800 rounded-full overflow-hidden relative">
              <div className="absolute top-0 left-0 h-full w-[85%] bg-gradient-to-r from-orange-500 to-primary"></div>
            </div>
            <div className="flex justify-between mt-2 text-[10px] font-bold text-zinc-500 uppercase">
              <span>Mild</span>
              <span className="text-white">Extreme</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold flex items-center gap-2">
              <span className="material-icons-round text-primary">auto_awesome</span>
              Cultural Heritage
            </h4>
            <p className="text-zinc-400 text-sm italic leading-relaxed">
              "In the Himalayas, we don't just eat for sustenance; we eat to survive the cold. This momo is our hearth in a bite, a testament to resilience and flavor."
            </p>
          </div>
        </div>

        <div className="mt-auto p-8 border-t border-zinc-800 bg-zinc-900/30">
          <button 
            onClick={onSwitchPath}
            className="w-full group py-4 flex flex-col items-center justify-center transition-all hover:bg-white/5 rounded-xl border border-white/5"
          >
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2 font-bold group-hover:text-primary transition-colors">Balance the heat</span>
            <div className="flex items-center gap-2 text-white font-extrabold text-sm uppercase">
              Discover the Sweet
              <span className="material-icons-round text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </button>
        </div>
      </aside>

      {/* Hero Visual */}
      <main className="hidden lg:block flex-1 relative bg-zinc-900 overflow-hidden">
        <img 
          src={IMAGES.CHILLI_TEXTURE} 
          alt="Chilli Texture" 
          className="w-full h-full object-cover opacity-60 scale-105 hover:scale-110 transition-transform duration-10000"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background-dark/30 to-background-dark"></div>
        
        <div className="absolute top-1/2 left-20 -translate-y-1/2 z-10 pointer-events-none mix-blend-overlay">
          <h2 className="text-[15rem] font-black leading-none text-white opacity-20">BOLD</h2>
          <h2 className="text-[10rem] font-black leading-none text-primary opacity-40 ml-40">SPICE</h2>
        </div>
      </main>
    </div>
  );
};

export default SpicyPathway;
