import React, { useState, useEffect } from 'react';
import { Terminal, ArrowDownRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion'; 

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = ["Student Leader", "Developer", "Data", "Motivator", "Optimizer"];
  const typingSpeed = isDeleting ? 20 : 100;
  const pauseTime = 2000;

  useEffect(() => {
    const currentFullText = roles[roleIndex];
    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText === currentFullText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col justify-center px-6 relative border-b border-zinc-800"
      id="home"
    >
      <div className="absolute top-0 left-0 w-full p-4 border-b border-zinc-800 flex justify-between text-xs text-zinc-500 uppercase tracking-widest">
        <span>Hidden.System.Ready</span>
        <span>Kito_OS v1.0</span>
      </div>

      <div className="max-w-5xl w-full mx-auto pt-20">
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-green-500 mb-6 text-sm tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 animate-pulse"></span>
            ONLINE // USER_AUTH_SUCCESS
          </p>
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.85]">
            Keith Alan<br />
            <span className="text-zinc-700">Speirs.</span>
          </h1>
        </motion.div>

        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-zinc-800 pt-8"
        >
          {/* Status Column */}
          <div className="space-y-6">
            <h2 className="text-xl text-white font-bold flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              CURRENT STATUS
            </h2>
            <div className="flex items-stretch gap-4 my-4">
               <div className="w-1 bg-gradient-to-b from-green-400 to-green-600 shadow-[0_0_15px_rgba(74,222,128,0.5)]"></div>
               <div className="font-mono text-2xl uppercase">
                  <span className="text-zinc-500 block text-xs tracking-widest mb-1">Identity.Active</span>
                  <span className="text-white font-bold">{displayText}</span>
                  <span className="animate-pulse text-green-500">_</span>
               </div>
            </div>
            <p className="text-zinc-400 leading-relaxed max-w-md">
              Data Intern at <span className="text-white border-b border-green-500">UnionDigital Bank</span>.
              <br />
              Assisting in building pipelines and wrestling with SQL queries until they submit.
            </p>
          </div>

          <div className="space-y-6">
             <h2 className="text-xl text-white font-bold flex items-center gap-2">
              <ArrowDownRight className="w-5 h-5" />
              INITIATE CONTACT
            </h2>
            <div className="flex flex-col gap-3">
              <motion.a 
                whileHover={{ x: 10 }}
                href="https://github.com/SirkitoGio" target="_blank" rel="noreferrer" 
                className="group flex items-center justify-between p-4 border border-zinc-800 hover:bg-white hover:text-black transition-all duration-300"
              >
                <span className="flex items-center gap-3"><Github className="w-5 h-5" /> GITHUB</span>
                <ArrowDownRight className="w-4 h-4 opacity-0 group-hover:opacity-100" />
              </motion.a>
              
              <motion.a 
                whileHover={{ x: 10 }}
                href="https://www.linkedin.com/in/keith-speirs/" target="_blank" rel="noreferrer"
                className="group flex items-center justify-between p-4 border border-zinc-800 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <span className="flex items-center gap-3"><Linkedin className="w-5 h-5" /> LINKEDIN</span>
                <ArrowDownRight className="w-4 h-4 opacity-0 group-hover:opacity-100" />
              </motion.a>

              <motion.a 
                whileHover={{ x: 10 }}
                href="mailto:keithalan.speirs25@gmail.com" 
                className="group flex items-center justify-between p-4 border border-zinc-800 hover:bg-green-500 hover:text-black transition-all duration-300"
              >
                <span className="flex items-center gap-3"><Mail className="w-5 h-5" /> EMAIL_ME</span>
                <ArrowDownRight className="w-4 h-4 opacity-0 group-hover:opacity-100" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;