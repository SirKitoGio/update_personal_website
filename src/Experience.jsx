import React, { useState } from 'react';

const Experience = () => {
  const [filter, setFilter] = useState('All');

  const experiences = [
    {
      year: "2025",
      title: "Data Intern",
      company: "UnionDigital Bank",
      duration: "Sep 2025 – Present",
      category: "Work",
      description: "Creating and optimizing SQL queries and architecting data pipelines to ensure high-performance data processing and accuracy.",
      tags: ["SQL", "Data Pipelines", "AWS"]
    },
    {
      year: "2025",
      title: "Vice Chief of Relations",
      company: "AWS Learning Club - JRU Ch.",
      duration: "Aug 2025 – Present",
      category: "Leadership",
      description: "Co-organizing student-led workshops to introduce peers to Cloud Computing fundamentals and the AWS Global Infrastructure.",
      tags: ["Cloud Computing", "AWS", "Community Building"]
    },
    {
      year: "2024",
      title: "B.S. Information Technology",
      company: "José Rizal University",
      duration: "Aug 2024 – 2028",
      category: "Education",
      description: "Currently a 2nd year focusing on Software Development and Data Science. Active in the tech community and AWS JRU chapter.",
      tags: ["Java", "Python", "MySQL"]
    },
    {
      year: "2023",
      title: "B.S. Mechanical Engineering",
      company: "Rizal Technological University",
      duration: "Jul 2023 – Aug 2024",
      category: "Education",
      description: "Surived Integral Calculus and Completed foundation year with a focus on engineering mathematics and AutoCAD before pivoting to software technology.",
      tags: ["AutoCAD", "Engineering Math"]
    },
    {
      year: "2022",
      title: "Vice President",
      company: "The STEM Society - HSU",
      duration: "Jul 2022 – Jul 2023",
      category: "Leadership",
      description: "Led student initiatives and organized events to promote STEM education among high school students in Makati City.",
      tags: ["Leadership", "Event Planning", "Public Speaking"]
    }
  ];

  const categories = ['All', 'Work', 'Education', 'Leadership'];
  const filteredExp = filter === 'All' ? experiences : experiences.filter(ex => ex.category === filter);

  return (
    <section className="py-24 bg-transparent border-t border-zinc-800 text-zinc-300">
      <div className="max-w-5xl mx-auto px-6">
        
  {/* HEADER & FILTERS */}
<div className="mb-16">
  {/* The Glowing Vertical Bar + Title Group */}
  <div className="flex items-stretch gap-6 mb-8">
    {/* This is the Green Bar from the image */}
    <div className="w-1 bg-gradient-to-b from-green-400 to-green-900 shadow-[0_0_15px_rgba(74,222,128,0.5)]"></div>
    
    <div>
      <span className="text-purple-500 font-mono text-sm uppercase tracking-widest">Timeline</span>
      <h2 className="text-5xl font-black text-white mt-1 uppercase tracking-tighter">My_Journey</h2>
    </div>
  </div>
  
  <div className="flex flex-wrap gap-3">
    {categories.map(cat => (
      <button
        key={cat}
        onClick={() => setFilter(cat)}
        className={`px-6 py-2 rounded-full font-mono text-xs uppercase transition-all duration-300 border ${
          filter === cat 
          ? 'bg-purple-600 border-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]' 
          : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:border-zinc-700'
        }`}
      >
        {cat}
      </button>
    ))}
  </div>
</div>

        {/* TIMELINE GRID */}
        <div className="relative">
          {/* THE VERTICAL LINE (This is the purple line you were missing) */}
          <div className="absolute left-[7px] md:left-[31px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/50 via-zinc-800 to-transparent"></div>

          <div className="space-y-12">
            {filteredExp.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-24">
                
                {/* Glowing Dot */}
                <div className="absolute left-0 md:left-[24px] top-2 w-4 h-4 rounded-full bg-zinc-950 border-2 border-purple-500 z-10 shadow-[0_0_10px_rgba(168,85,247,0.8)]">
                   <div className="w-1.5 h-1.5 bg-purple-500 rounded-full m-auto mt-[1px]"></div>
                </div>

                <div className="grid md:grid-cols-[100px_1fr] gap-4 items-start">
                  {/* Year Label */}
                  <span className="text-2xl font-black text-white opacity-40 font-mono mt-1">
                    {exp.year}
                  </span>

                  {/* Experience Card */}
                  <div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 p-6 hover:border-purple-500/50 transition-all group">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-widest ${
                          exp.category === 'Work' ? 'bg-blue-500/10 text-blue-400' : 
                          exp.category === 'Education' ? 'bg-green-500/10 text-green-400' : 
                          'bg-yellow-500/10 text-yellow-400'
                        }`}>
                          {exp.category}
                        </span>
                        <h3 className="text-xl font-bold text-white mt-2 group-hover:text-purple-400 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-zinc-500 font-mono uppercase tracking-tight">
                          {exp.company} <span className="mx-2 text-zinc-800">|</span> {exp.duration}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-zinc-400 leading-relaxed font-light mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono text-zinc-500 border border-zinc-800/50 px-2 py-1 uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;