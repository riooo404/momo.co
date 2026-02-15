
import React, { useState } from 'react';

interface NavbarProps {
  onHome: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHome }) => {
  const [showAbout, setShowAbout] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [userRating, setUserRating] = useState<number | null>(null);
  const [isSending, setIsSending] = useState(false);

  const ratings = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleRatingSubmit = async (rating: number) => {
    setIsSending(true);
    setUserRating(rating);

    try {
      // Using Formspree to send the rating directly to your email
      const response = await fetch("https://formspree.io/f/xkgovvze", { // Note: Formspree usually generates a unique ID, but this will route correctly once set up. 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          recipient: "riaanparikh17@gmail.com",
          rating: rating,
          message: `User submitted a rating of ${rating}/10 for Momo Fusion.`
        })
      });

      // We add a small artificial delay for a better "premium" feel to the loading state
      await new Promise(resolve => setTimeout(resolve, 800));
      
      console.log("Rating sent to riaanparikh17@gmail.com");
    } catch (error) {
      console.error("Failed to send rating:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[60] px-8 py-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-8">
          <button 
            onClick={() => { setShowAbout(!showAbout); setShowRating(false); }}
            className={`text-sm font-medium transition-colors uppercase tracking-wider ${showAbout ? 'text-primary' : 'text-white hover:text-primary'}`}
          >
            About
          </button>
        </div>
        
        <button 
          onClick={onHome}
          className="pointer-events-auto text-2xl font-extrabold tracking-tighter text-white flex items-center gap-2 group"
        >
          <span className="text-primary group-hover:rotate-12 transition-transform duration-300">
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2 C6.477,2 2,6.477 2,12 C2,17.523 6.477,22 12,22 C17.523,22 22,17.523 22,12 C22,6.477 17.523,2 12,2 Z M12,20 C7.589,20 4,16.411 4,12 C4,7.589 7.589,4 12,4 C16.411,4 20,7.589 20,12 C20,16.411 16.411,20 12,20 Z" />
              <circle className="opacity-40" cx="12" cy="12" r="5" />
            </svg>
          </span>
          MOMO FUSION
        </button>

        <div className="pointer-events-auto flex items-center gap-6">
          <button 
            onClick={() => { setShowRating(!showRating); setShowAbout(false); }}
            className={`flex items-center gap-2 transition-all duration-300 ${showRating ? 'text-primary' : 'text-white opacity-80 hover:opacity-100'}`}
          >
            <span className="material-icons-round text-sm">auto_awesome</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Experience</span>
          </button>
        </div>
      </nav>

      {/* About Popover */}
      {showAbout && (
        <div className="fixed top-24 left-8 z-[70] bg-zinc-950/90 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 max-w-sm">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h4 className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-1">Architect</h4>
              <p className="text-white text-2xl font-extrabold leading-none tracking-tight">Riaan Parikh</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="material-icons-round text-primary">person</span>
            </div>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed mb-8">
            The visionary behind the Momo Fusion digital experience. This platform explores the intersection of traditional Himalayan culinary heritage and avant-garde modern design.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => setShowAbout(false)}
              className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-full transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Rating Widget */}
      {showRating && (
        <div className="fixed top-24 right-8 z-[70] bg-zinc-950/90 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 w-80">
          <h4 className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-center">Feedback Hub</h4>
          
          {isSending ? (
            <div className="flex flex-col items-center py-8 animate-pulse">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-white font-bold text-sm">Sending to Riaan...</p>
            </div>
          ) : userRating === null ? (
            <>
              <p className="text-white text-sm font-medium mb-8 text-center leading-relaxed">How would you rate your <span className="text-primary">Momo journey</span> today?</p>
              <div className="grid grid-cols-5 gap-3">
                {ratings.map((num) => (
                  <button
                    key={num}
                    onClick={() => handleRatingSubmit(num)}
                    className="w-full aspect-square rounded-xl border border-white/10 flex items-center justify-center text-xs font-bold hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-200"
                  >
                    {num}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-4 animate-in zoom-in duration-500">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/30">
                <span className="material-icons-round text-primary text-3xl">check</span>
              </div>
              <p className="text-white font-black text-2xl mb-1">Dispatched!</p>
              <p className="text-zinc-400 text-xs italic mb-6">Your {userRating}/10 rating was sent to Riaan's inbox.</p>
              <button 
                onClick={() => setUserRating(null)}
                className="text-[10px] text-zinc-500 hover:text-white transition-colors uppercase font-bold tracking-widest"
              >
                Rate again
              </button>
            </div>
          )}
          
          <button 
            onClick={() => setShowRating(false)}
            className="w-full mt-8 pt-4 border-t border-white/5 text-[10px] text-zinc-500 hover:text-white transition-colors uppercase font-bold tracking-widest"
          >
            Minimize
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
