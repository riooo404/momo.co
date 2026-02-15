
import React, { useState } from 'react';
import { getAIPairingRecommendation } from '../services/geminiService';
import { MomoRecommendation } from '../types';

const AISommelier: React.FC = () => {
  const [mood, setMood] = useState('');
  const [rec, setRec] = useState<MomoRecommendation | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRecommend = async () => {
    if (!mood) return;
    setLoading(true);
    try {
      const result = await getAIPairingRecommendation(mood);
      setRec(result);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-zinc-900/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 p-8 text-center transition-all duration-300 transform hover:scale-[1.02] max-w-md w-full">
      <h3 className="text-2xl font-bold text-white mb-2 italic font-serif">AI Sommelier</h3>
      <p className="text-gray-400 text-sm mb-6">Tell us your mood, we'll suggest a momo adventure.</p>
      
      {!rec ? (
        <div className="space-y-4">
          <input 
            type="text" 
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            placeholder="e.g. Daring and energetic"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
          <button 
            onClick={handleRecommend}
            disabled={loading}
            className="w-full bg-primary hover:bg-red-700 disabled:opacity-50 text-white font-bold py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(242,13,13,0.3)]"
          >
            {loading ? 'Consulting the Spirits...' : 'Get Suggestion'}
          </button>
        </div>
      ) : (
        <div className="text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-primary font-bold uppercase tracking-widest text-xs">Recommended</h4>
            <span className="text-white/40 text-[10px] font-mono">INTENSITY: {rec.intensity}%</span>
          </div>
          <h5 className="text-white text-xl font-bold mb-1">{rec.name}</h5>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">{rec.description}</p>
          <div className="bg-white/5 p-3 rounded-lg border border-white/5">
            <span className="text-[10px] text-primary font-bold uppercase block mb-1">Pairs Perfectly With</span>
            <p className="text-white text-sm italic">{rec.pairing}</p>
          </div>
          <button 
            onClick={() => { setRec(null); setMood(''); }}
            className="mt-6 text-white/50 hover:text-white text-xs uppercase tracking-widest transition-colors flex items-center gap-1"
          >
            <span className="material-icons-outlined text-sm">refresh</span> Start Over
          </button>
        </div>
      )}
    </div>
  );
};

export default AISommelier;
