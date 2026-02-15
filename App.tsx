
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import SpicyPathway from './components/SpicyPathway';
import SweetPathway from './components/SweetPathway';
import { TastePreference } from './types';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<TastePreference>('none');

  const handleHome = () => setCurrentPath('none');

  return (
    <div className="min-h-screen bg-background-dark text-white selection:bg-primary selection:text-white">
      <Navbar onHome={handleHome} />
      
      {currentPath === 'none' && (
        <LandingPage onChoosePath={(path) => setCurrentPath(path)} />
      )}
      
      {currentPath === 'spicy' && (
        <SpicyPathway onSwitchPath={() => setCurrentPath('sweet')} />
      )}
      
      {currentPath === 'sweet' && (
        <SweetPathway onSwitchPath={() => setCurrentPath('spicy')} />
      )}
    </div>
  );
};

export default App;
