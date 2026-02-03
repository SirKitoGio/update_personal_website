import React from 'react';
import Hero from './Hero';
import Experience from './Experience';
import Projects from './Projects';
import About from './About';
import Certificates from './Certificates'; // <--- 1. Import it

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#09090b_100%)]" />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience /> 
        <Projects />
        <Certificates />
        
        <footer className="bg-transparent border-t border-zinc-900 text-zinc-500 py-8 text-center font-mono text-sm">
          <p>&copy; 2026 Keith Alan Speirs. System.End_Process()</p>
        </footer>
      </div>
      
    </div>
  );
}

export default App;