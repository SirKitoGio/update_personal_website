import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Certificates from './Certificates'; 

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-300 selection:bg-green-500/30">
      
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="certificates">
          <Certificates />
        </section>
      </main>

      <footer className="py-12 border-t border-zinc-900 text-center font-mono text-xs text-zinc-600">
        <p>© 2026 KEITH ALAN SPEIRS // SYSTEM.SHUTDOWN()</p>
      </footer>
    </div>
  );
}

export default App;