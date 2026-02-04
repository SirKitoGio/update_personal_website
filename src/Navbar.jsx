import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    const sectionIds = ['home', 'experience', 'projects', 'about', 'certificates'];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 p-4">
      <div className="max-w-5xl mx-auto flex justify-between text-xs font-mono uppercase tracking-widest">
        <span className="text-green-500">System.Ready</span>
        <div className="flex gap-6">
          {['home', 'about', 'experience', 'projects', 'certificates'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`transition-all duration-300 pb-1 ${
                activeSection === item 
                  ? 'text-white border-b-2 border-green-500' 
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 