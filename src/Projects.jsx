import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Kape4U",
      techStack: ["Flutter", "Dart", "Google Maps"],
      description: "Geolocation-based mobile app for finding coffee shops. Because caffeine is a requirement.",
      link: "https://github.com/SirKitoGio/Kape4u---Kape-Lovers"
    },
    {
      id: 2,
      title: "Coffe Shop Analytics Pipeline",
      techStack: ["Python(Pandas)", "AWS S3", "ETL", "Google API"],
      description: "Automated ETL pipeline extracting review data for 50+ shops. Turning unstructured ranting into structured data.",
      link: "https://github.com/SirKitoGio/coffee-shop-analytics"
    },
    {
      id: 3,
      title: "IHM Website Prototype",
      techStack: ["React", "Vite", "TailwindCSS"],
      description: "A responsive website prototype for IHM Marine Services. Built with modern web technologies. When finished they will publish it on their domain.",
      link: "https://ihmmarineservices.vercel.app"
    }
  ];

  return (
    <section className="py-24 bg-transparent border-t border-zinc-800" id="projects">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16 border-l-2 border-green-500 pl-6">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Selected_Works</h2>
          <p className="mt-2 text-zinc-500 font-mono">Index of deployed artifacts.</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {projectData.map((project) => (
            <div key={project.id} className="bg-zinc-900 border border-zinc-800 p-8 hover:border-green-500 transition-colors duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-green-500 transition-colors">{project.title}</h3>
                <span className="text-xs text-zinc-600 border border-zinc-800 px-2 py-1">0{project.id}</span>
              </div>
              <p className="text-zinc-400 mb-8 leading-relaxed text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="text-xs font-mono text-zinc-500 uppercase">
                    [{tech}]
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;