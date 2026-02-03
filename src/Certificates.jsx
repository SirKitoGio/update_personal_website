import React from 'react';
import { Award, ExternalLink, CheckCircle, Database, Cpu, Globe } from 'lucide-react';

const Certificates = () => {
  const certData = [
    {
      id: 1,
      name: "IT Specialist in Java",
      issuer: "Certiport / Pearson VUE",
      date: "Nov 2025",
      id_ref: "ID: JpLz-4wbh",
      type: "exam", 
      link: "https://www.credly.com/badges/88c26088-047a-4cc0-bccf-1bcfed814c0b/public_url" 
    },
    {
      id: 2,
      name: "CompTIA IT Fundamentals+",
      issuer: "CompTIA",
      date: "Verified",
      id_ref: "ID: COMP001022675452",
      type: "exam",
      link: "https://www.credly.com/badges/d20151f7-705b-4b8a-bca0-da5a3608837e/public_url"
    },

    // --- TIER 2: DATA & CLOUD (GREEN) ---
    {
      id: 3,
      name: "Understanding Data Engineering",
      issuer: "DataCamp",
      date: "Nov 2025",
      id_ref: "ID: #44,629,925",
      type: "data", 
    },
    {
      id: 4,
      name: "Data Manipulation in SQL",
      issuer: "DataCamp",
      date: "Jan 2026",
      id_ref: "ID: #45,160,303",
      type: "data",
    },
    {
      id: 5,
      name: "Understanding Cloud Computing",
      issuer: "DataCamp",
      date: "Jan 2026",
      id_ref: "ID: #44,901,925",
      type: "data",
      
    },

    {
      id: 6,
      name: "Python",
      issuer: "Codédex",
      date: "2025",
      id_ref: "Data Science Track",
      type: "code",
      
    },
    {
      id: 7,
      name: "Pandas",
      issuer: "Codédex",
      date: "2025",
      id_ref: "Data Science Track",
      type: "code",
      
    },
    {
      id: 8,
      name: "JavaScript",
      issuer: "Codédex",
      date: "2025",
      id_ref: "Frontend Track",
      type: "code",
      
    },
    {
      id: 9,
      name: "React",
      issuer: "Codédex",
      date: "2026",
      id_ref: "Frontend Track",
      type: "code",
      
    },
    {
      id: 10,
      name: "Java",
      issuer: "Codédex",
      date: "Nov 2025",
      id_ref: "Backend Track",
      type: "code",
      
    },
    {
      id: 11,
      name: "SQL",
      issuer: "Codédex",
      date: "2025",
      id_ref: "Database Track",
      type: "code",
      
    }
  ];

  const getTheme = (type) => {
    if (type === 'exam') return { border: 'group-hover:border-yellow-500', icon: 'text-yellow-500', bg: 'group-hover:bg-yellow-500', text: 'text-yellow-500' };
    if (type === 'data') return { border: 'group-hover:border-green-500', icon: 'text-green-500', bg: 'group-hover:bg-green-500', text: 'text-green-500' };
    return { border: 'group-hover:border-blue-500', icon: 'text-blue-500', bg: 'group-hover:bg-blue-500', text: 'text-blue-500' };
  };

  return (
    <section className="py-24 bg-transparent border-t border-zinc-800" id="certificates">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-12 border-l-2 border-white pl-6">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
            Credentials_Log
          </h2>
          <p className="mt-2 text-zinc-500 font-mono text-sm">
            Official exams, verified badges, and technical completions.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certData.map((cert) => {
            const theme = getTheme(cert.type);
            
            return (
              <a 
                key={cert.id}
                href={cert.link}
                target="_blank" 
                rel="noopener noreferrer"
                className={`group relative p-5 bg-zinc-900 border border-zinc-800 ${theme.border} transition-all duration-300 block`}
              >
                <div className="relative z-10 flex flex-col h-full">
                  
                  {/* Icon Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-2 bg-zinc-950 border border-zinc-800 rounded ${theme.icon} ${theme.bg} group-hover:text-white transition-colors`}>
                      {cert.type === 'exam' ? <Award className="w-5 h-5" /> : 
                       cert.type === 'data' ? <Database className="w-5 h-5" /> : 
                       <Cpu className="w-5 h-5" />}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-mono uppercase text-zinc-500 border border-zinc-800 px-2 py-1 rounded-full">
                      <CheckCircle className="w-3 h-3" /> Verified
                    </div>
                  </div>

                  {/* Title & Info */}
                  <h3 className="text-md font-bold text-white mb-1 group-hover:text-white transition-colors">
                    {cert.name}
                  </h3>
                  
                  <p className="text-xs text-zinc-400 font-mono">
                    {cert.issuer}
                  </p>
                  <p className="text-[10px] text-zinc-600 font-mono mt-1 mb-6 uppercase tracking-wider">
                    {cert.date} // {cert.id_ref}
                  </p>

                  {/* "View Cert" Button */}
                  <div className={`mt-auto flex items-center text-xs font-bold text-zinc-600 ${theme.text} transition-colors`}>
                    VIEW_CERT <ExternalLink className="w-3 h-3 ml-2" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Certificates;