import { personalInfo } from '../data/projectsData';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-cyan-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Bio (4 Columns) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-2xl font-extrabold text-white tracking-wide">
              {personalInfo.name.split(' ')[0]} <span className="text-cyan-400">{personalInfo.name.split(' ').slice(1).join(' ')}</span>
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Passionate Full-Stack Developer specializing in React, Node.js, and modern web applications. Focused on delivering high-performance, user-centric digital experiences.
            </p>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>Available for Freelance & Full-time</span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills & Tech</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info (3 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Get In Touch</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center space-x-2">
                <span className="text-cyan-400 font-medium">Email:</span>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400 transition-colors truncate">
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-cyan-400 font-medium">Phone:</span>
                <span>{personalInfo.phone}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-cyan-400 font-medium">Location:</span>
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Back To Top / CTA (3 Columns) */}
          <div className="lg:col-span-3 space-y-4 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">Let's Connect</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ready to take your digital product to the next level? Feel free to reach out anytime.
              </p>
            </div>

            <button 
              onClick={scrollToTop}
              className="inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all text-xs font-semibold shadow-lg group w-fit"
            >
              <span>Back To Top</span>
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} <span className="text-slate-300 font-medium">{personalInfo.name}</span>. All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Crafted with React & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
};