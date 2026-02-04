import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Certificates from './Certificates'; 

function App() {
  return (
    <div className="bg-black min-h-screen text-zinc-300 selection:bg-green-500/30 relative overflow-hidden">
      
      {/* THE GREEN CIRCLE HAZE */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center">
        {/* Soft Outer Glow */}
        <div 
          className="w-[1000px] h-[1000px] opacity-20 blur-[140px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, transparent 70%)'
          }}
        />
        {/* Sharper Inner Haze */}
        <div className="absolute w-[500px] h-[500px] bg-green-500/10 blur-[100px] rounded-full" />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <section id="home"><Hero /></section>
          <section id="about"><About /></section>
          <section id="experience"><Experience /></section>
          <section id="projects"><Projects /></section>
          <section id="certificates"><Certificates /></section>
        </main>

        <footer className="py-12 border-t border-zinc-900 text-center font-mono text-xs text-zinc-600">
          <p>© 2026 KEITH ALAN SPEIRS // SYSTEM.SHUTDOWN()</p>
        </footer>
      </div>
    </div>
  );
}

export default App;