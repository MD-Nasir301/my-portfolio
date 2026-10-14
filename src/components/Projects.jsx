import * as Icons from 'lucide-react';
import { projectsData } from '../data/projectsData';

export const Projects = () => {
  const ExternalLink = Icons.ExternalLink || Icons.Share2;
  const Github = Icons.Code2 || Icons.Code;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs sm:text-sm font-semibold text-cyan-400 tracking-widest uppercase">
            My Portfolio
          </h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-2"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md overflow-hidden group flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Project Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800 text-cyan-400 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links (Live Demo & Github) */}
              <div className="p-6 pt-0 flex items-center justify-between gap-4 border-t border-slate-800/60 mt-4">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all border border-cyan-400/20"
                >
                  <span>Live Demo</span>
                  {ExternalLink && <ExternalLink size={16} />}
                </a>

                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-all border border-slate-700/60"
                  title="Source Code"
                >
                  {Github && <Github size={18} />}
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};