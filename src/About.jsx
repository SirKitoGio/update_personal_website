import React from 'react';
import { Coffee, Database, Globe, Zap, Smartphone, Terminal } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 bg-transparent border-t border-zinc-800 text-zinc-300">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        
        {/* LEFT COLUMN: The Personal "Log" */}
        <div className="space-y-8">
          <div className="border-l-2 border-purple-500 pl-6">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
              Personal_Log
            </h2>
            <p className="mt-2 text-zinc-500 font-mono text-sm">
              Beyond the terminal.
            </p>
          </div>

          <div className="space-y-6 text-lg leading-relaxed font-light">
            <p>
              <strong className="text-white font-bold">CURRENT STATUS:</strong><br/>
              When I'm not optimizing SQL queries or architecting pipelines for UnionDigital Bank, I'm usually head first into Python scripts. I believe data isn't just numbers—it's the architecture of modern truth. 
            </p>

            <p>
              <strong className="text-white font-bold">OFFLINE MODE:</strong><br/>
              The physical keeps the mental sharp. You can find me exploring the city, hunting for the perfect coffee spot (hence the Kape4U app), or breaking new tech stacks just to see how they work.
            </p>

            {/* THE GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              {/* Card 1: Fuel */}
              <div className="p-4 border border-zinc-800 bg-zinc-900 hover:border-purple-500 transition-colors duration-300">
                <Coffee className="w-5 h-5 text-purple-500 mb-2" />
                <span className="text-xs font-mono text-zinc-500 uppercase">Fuel Source</span>
                <p className="font-bold text-white text-sm">Hazelnul Mocha Macchiato</p>
              </div>

              {/* Card 2: Data Stack */}
              <div className="p-4 border border-zinc-800 bg-zinc-900 hover:border-green-500 transition-colors duration-300">
                <Database className="w-5 h-5 text-green-500 mb-2" />
                <span className="text-xs font-mono text-zinc-500 uppercase">Data Stack</span>
                <p className="font-bold text-white text-sm">Python, Pandas, SQL, AWS</p>
              </div>

              {/* Card 3: Full Stack */}
              <div className="p-4 border border-zinc-800 bg-zinc-900 hover:border-blue-500 transition-colors duration-300">
                <Globe className="w-5 h-5 text-blue-500 mb-2" />
                <span className="text-xs font-mono text-zinc-500 uppercase">Full Stack</span>
                <p className="font-bold text-white text-sm">React, Node.js, Spring Boot</p>
              </div>

              {/* Card 4: Mobile Stack */}
              <div className="p-4 border border-zinc-800 bg-zinc-900 hover:border-cyan-500 transition-colors duration-300">
                <Smartphone className="w-5 h-5 text-cyan-500 mb-2" />
                <span className="text-xs font-mono text-zinc-500 uppercase">Mobile Stack</span>
                <p className="font-bold text-white text-sm">Flutter & React Native</p>
              </div>

              {/* Card 5: Tools */}
              <div className="p-4 border border-zinc-800 bg-zinc-900 hover:border-orange-500 transition-colors duration-300">
                <Terminal className="w-5 h-5 text-orange-500 mb-2" />
                <span className="text-xs font-mono text-zinc-500 uppercase">Dev Toolkit</span>
                <p className="font-bold text-white text-sm">Git, Ubuntu, Postman</p>
              </div>

              {/* Card 6: Motivation */}
              <div className="p-4 border border-zinc-800 bg-zinc-900 hover:border-yellow-500 transition-colors duration-300">
                <Zap className="w-5 h-5 text-yellow-500 mb-2" />
                <span className="text-xs font-mono text-zinc-500 uppercase">Motivation</span>
                <p className="font-bold text-white text-sm">My Mum & My Girlfriend</p>
              </div>

            </div>
          </div>
        </div>

        {/* The Photo Stack */}
        <div className="space-y-8">
          
          {/* PHOTO 1: ME */}
          <div className="relative group">
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-zinc-600 group-hover:border-purple-500 transition-colors"></div>
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-zinc-600 group-hover:border-purple-500 transition-colors"></div>
            
            <div className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer overflow-hidden border border-zinc-800">
              <img 
                src="/2ME.JPG" 
                alt="Keith Alan Speirs" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex justify-between items-center mt-2 text-xs font-mono text-zinc-500 uppercase">
              <span>me.jpg</span>
              <span>100% Rendered</span>
            </div>
          </div>

          {/* PHOTO 2: US */}
          <div className="relative group">
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-zinc-600 group-hover:border-green-500 transition-colors"></div>
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-zinc-600 group-hover:border-green-500 transition-colors"></div>
            
            <div className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer overflow-hidden border border-zinc-800">
              <img 
                src="/us.jpg" 
                alt="Keith and Girlfriend" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex justify-between items-center mt-2 text-xs font-mono text-zinc-500 uppercase">
              <span>us.jpg</span>
              <span>Partner in Crime</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;