
import React from 'react';
import { IMAGES } from '../constants';

interface LandingPageProps {
  onChoosePath: (path: 'spicy' | 'sweet') => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onChoosePath }) => {
  return (
    <main className="h-screen w-full flex relative overflow-hidden group/main">
      {/* Spicy Side */}
      <section 
        onClick={() => onChoosePath('spicy')}
        className="relative flex-1 bg-chilli-dark flex flex-col justify-center items-center overflow-hidden cursor-pointer group/chilli border-r border-white/5 transition-all duration-700 hover:flex-[1.5]"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.SPICY_HERO} 
            alt="Spicy Dumplings" 
            className="w-full h-full object-cover opacity-60 group-hover/chilli:scale-110 transition-transform duration-1000 ease-in-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-primary/20 to-black/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover/chilli:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white drop-shadow-2xl mb-2 group-hover/chilli:text-primary transition-colors duration-300">
            THE HEAT
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-light tracking-widest uppercase mb-8 opacity-80 group-hover/chilli:opacity-100 transition-opacity">
            Sichuan Chilli • Ghost Pepper
          </p>
          <button className="bg-primary hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(242,13,13,0.5)] opacity-0 translate-y-4 group-hover/chilli:opacity-100 group-hover/chilli:translate-y-0 duration-500">
            Explore Chilli
          </button>
        </div>
        
        <div className="absolute bottom-12 left-12 opacity-30 group-hover/chilli:opacity-80 transition-opacity duration-500 pointer-events-none">
          <span className="block text-9xl font-bold text-transparent stroke-text">SPICY</span>
        </div>
      </section>

      {/* Sweet Side */}
      <section 
        onClick={() => onChoosePath('sweet')}
        className="relative flex-1 bg-sweet-dark flex flex-col justify-center items-center overflow-hidden cursor-pointer group/sweet border-l border-white/5 transition-all duration-700 hover:flex-[1.5]"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.SWEET_HERO} 
            alt="Sweet Dumplings" 
            className="w-full h-full object-cover opacity-60 group-hover/sweet:scale-110 transition-transform duration-1000 ease-in-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-white/5 to-black mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-pink-900/30 to-background-dark/80 mix-blend-screen opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white drop-shadow-2xl mb-2 group-hover/sweet:text-pink-300 transition-colors duration-300">
            THE SWEET
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-light tracking-widest uppercase mb-8 opacity-80 group-hover/sweet:opacity-100 transition-opacity">
            Chocolate Lava • Berry Bliss
          </p>
          <button className="bg-white text-background-dark hover:bg-pink-100 font-bold py-4 px-10 rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.3)] opacity-0 translate-y-4 group-hover/sweet:opacity-100 group-hover/sweet:translate-y-0 duration-500">
            Explore Sweet
          </button>
        </div>

        <div className="absolute top-32 right-12 opacity-30 group-hover/sweet:opacity-80 transition-opacity duration-500 pointer-events-none">
          <span className="block text-9xl font-bold text-transparent stroke-text">SUGAR</span>
        </div>
      </section>

      {/* Decorative center line/OR divider */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
        <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-background-dark border border-white/10 text-xs font-bold text-gray-400">
          VS
        </div>
      </div>

      <div className="absolute bottom-8 left-0 w-full px-8 flex justify-between items-end pointer-events-none z-40 text-xs text-gray-500 mix-blend-difference">
        <div className="flex gap-4 pointer-events-auto">
          <a className="hover:text-white transition-colors" href="#">Instagram</a>
          <a className="hover:text-white transition-colors" href="#">TikTok</a>
        </div>
        <div className="text-right">
          <p>© 2024 Momo Fusion Inc.</p>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
