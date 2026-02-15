
import React, { useState } from 'react';
import { IMAGES } from '../constants';

interface SweetPathwayProps {
  onSwitchPath: () => void;
}

const SweetPathway: React.FC<SweetPathwayProps> = ({ onSwitchPath }) => {
  const [step, setStep] = useState(0);

  if (step === 0) {
    return (
      <div className="min-h-screen w-full bg-sweet-pink relative flex flex-col lg:flex-row items-stretch overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-sweet-pink to-[#fce4e8] opacity-100"></div>
        
        <section className="lg:w-7/12 relative h-[50vh] lg:h-full overflow-hidden group">
          <img 
            src={IMAGES.SWEET_PLATE} 
            alt="Sweet Momo" 
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" 
          />
          <div className="absolute bottom-8 left-8">
            <span className="bg-white/20 backdrop-blur-md border border-white/40 px-4 py-2 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">Signature Series</span>
          </div>
        </section>

        <section className="lg:w-5/12 bg-white/80 backdrop-blur-xl relative p-12 lg:p-20 flex flex-col justify-center">
          <div className="space-y-12 animate-in slide-in-from-right-12 fade-in duration-1000">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-0.5 bg-cocoa-dark/20 rounded-full"></span>
              <span className="text-[10px] font-bold tracking-widest text-cocoa-dark/40 uppercase">Chapter 01</span>
            </div>

            <div className="space-y-6">
              <h1 className="font-serif text-5xl lg:text-7xl text-cocoa-dark leading-tight">
                A Gentle <br/><span className="italic text-primary/80">Embrace</span>
              </h1>
              <div className="w-12 h-1 bg-primary rounded-full"></div>
              <p className="text-cocoa-dark/70 text-lg leading-relaxed font-light">
                Stuffed with dark chocolate and cardamom-infused khoya, wrapped in a silken dough. A dessert that feels like home.
              </p>
            </div>

            <div className="flex gap-6">
              {[
                { name: 'Coconut', img: IMAGES.COCONUT },
                { name: 'Cocoa 70%', img: IMAGES.COCOA },
                { name: 'Khoya', img: IMAGES.CARDAMOM }
              ].map((ing) => (
                <div key={ing.name} className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-16 rounded-full border border-pink-200 overflow-hidden group-hover:scale-110 transition-transform shadow-lg">
                    <img src={ing.img} className="w-full h-full object-cover" alt={ing.name} />
                  </div>
                  <span className="text-[10px] font-bold text-cocoa-dark/40 uppercase">{ing.name}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setStep(1)}
              className="flex items-center gap-4 group pl-8 pr-2 py-2 bg-cocoa-dark text-white rounded-full hover:bg-primary transition-all shadow-xl self-start"
            >
              <span className="text-sm font-bold tracking-wider">Next Chapter</span>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors">
                <span className="material-icons text-sm">arrow_forward</span>
              </div>
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-background-dark flex flex-col items-center justify-center p-6 lg:p-12 animate-in fade-in duration-1000">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Visual Box */}
        <div className="lg:col-span-7 relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50 to-pink-100 rounded-3xl opacity-10"></div>
          <div className="relative bg-zinc-900/50 backdrop-blur-2xl p-12 rounded-3xl border border-white/5 shadow-2xl overflow-hidden flex items-center justify-center min-h-[500px]">
            <img 
              src={IMAGES.CLASSIC_DUMPLINGS} 
              alt="Sweet Revolution" 
              className="w-3/4 h-auto object-contain transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute bottom-8 left-8 flex gap-2">
              {['Velvety', 'Indulgent', 'Artisanal'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-primary/80 uppercase">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Info Content */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Sweet Series</span>
            <h1 className="text-5xl font-bold text-white leading-tight font-serif">The Sweet Revolution</h1>
            <p className="text-primary italic font-serif text-xl opacity-80">Redefining the boundaries of tradition.</p>
            <p className="text-zinc-400 leading-relaxed font-light">
              Imagine molten Belgian chocolate encased in a hand-folded wrapper, infused with cardamom and sea salt. It's not just dessert; it's an awakening of the palate.
            </p>
          </div>

          <div className="bg-zinc-900/40 p-6 rounded-2xl border border-primary/20 relative group overflow-hidden">
            <div className="absolute left-0 top-6 bottom-6 w-1 bg-primary rounded-r-full"></div>
            <h4 className="text-white font-bold mb-2 flex items-center justify-between">
              Cultural Meaning
              <span className="material-icons-outlined text-primary/40">info</span>
            </h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Traditionally savory, we've introduced a modern patisserie twist that celebrates the fusion of East and West on a single ceramic plate. This experiment challenges the concept of what a dumpling can be.
            </p>
          </div>

          <div className="pt-8 border-t border-zinc-800 space-y-4">
            <p className="text-xs text-zinc-500 italic">"Flavor is a universal language, spoken through the steam of a freshly folded momo."</p>
            <button 
              onClick={onSwitchPath}
              className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px] hover:text-white transition-colors group"
            >
              Back to the Heat
              <span className="material-icons-round text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SweetPathway;
