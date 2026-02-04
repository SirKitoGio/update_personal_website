import React from 'react';
import { FolderGit2, ExternalLink } from 'lucide-react'; // Assuming you use Lucide for icons

const ProjectCard = ({ title, techStack, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      
      {/* Card Header */}
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-blue-50 rounded-full">
            <FolderGit2 className="w-6 h-6 text-blue-600" />
          </div>
          {/* Optional: specific link to the repo if you have it */}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Tech Stack Footer */}
      <div className="px-6 pb-6 pt-0">
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full border border-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;