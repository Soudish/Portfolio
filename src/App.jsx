import React, { useState, useEffect } from 'react';
import ParticlesBackground from './components/Background';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import SkillsSection from './components/SkillSection';
import SystemBridge from './components/SystemBridge'; 
import PageLoader from './components/PageLoader'; // Ensure path is correct
import CertificateStream from './components/CertificatesStream';
import ProjectSection from './components/ProjectSection';
import InterestsSection from './components/InterestSection';
import ContactSection from './components/ContactSection';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., 3 seconds) 
    // This allows the "System Boot" animations to play out
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-slate-950">
      {isLoading ? (
        /* 1. Show only the loader while isLoading is true */
        <PageLoader />
      ) : (
        /* 2. Show the main content after loading is complete */
        <div className="animate-fade-in">
          {/* Background stays fixed behind everything */}
          <ParticlesBackground />

          {/* Content Layer */}
          <main className="relative z-10 bg-transparent">
            <Navbar />
            <HeroSection />
            <SystemBridge />
            <SkillsSection />
            <CertificateStream/>
            <ProjectSection />
            <InterestsSection />
            <ContactSection />
            <Footer/>
            {/* Add more sections here as you build them */}
          </main>
          <ScrollToTop />
        </div>
      )}

      {/* Basic Fade-in Animation for the transition */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 1.2s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default App;