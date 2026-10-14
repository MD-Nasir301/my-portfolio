import * as Icons from 'lucide-react';
import { aboutData } from '../data/aboutData';

export const About = () => {
  const Code = Icons.Code2 || Icons.Code;
  const Cpu = Icons.Cpu || Icons.Terminal;
  const ShieldCheck = Icons.ShieldCheck || Icons.CheckCircle;
  const Award = Icons.Award || Icons.Sparkles;
  const Download = Icons.Download || Icons.FileText;
  const Flame = Icons.Flame || Icons.Zap;

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-900">
      {/* Background Cyberpunk Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-widest uppercase">
            <Icons.UserCheck size={14} />
            <span>Developer Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Nasirullah Babu</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Architecting Scalable Web Applications with Persistence, Clean Code, & Backend Mastery.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-3"></div>
        </div>

        {/* Main Grid: Bio Story (Left) & Stats / Core Strengths (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: My Story & Journey (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-8 rounded-3xl bg-slate-850/90 border border-slate-700/80 backdrop-blur-md shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none"></div>

              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Flame size={24} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    The Story of Grit & Resilience
                  </h3>
                  <span className="text-xs text-cyan-400 font-medium">
                    Passion Overcomes Obstacles
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {aboutData.bio.map((paragraph, index) => (
                  <p key={index} className="font-normal">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Call to Action Buttons */}
              <div className="pt-8 mt-6 border-t border-slate-700/60 flex flex-wrap gap-4 items-center">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm flex items-center space-x-2 shadow-lg shadow-cyan-400/20 transition-all hover:-translate-y-0.5"
                >
                  <span>Get In Touch</span>
                  <Icons.ArrowRight size={16} />
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm flex items-center space-x-2 transition-all hover:-translate-y-0.5"
                >
                  <Download size={16} className="text-cyan-400" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

            {/* Core Strengths Section */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">
                Core Competencies & Mindset
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutData.strengths.map((strength, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-850/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 space-y-2 backdrop-blur-sm"
                  >
                    <div className="flex items-center space-x-2 text-cyan-400">
                      <ShieldCheck size={18} />
                      <h5 className="text-sm font-bold text-white">{strength.title}</h5>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {strength.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Quick Stats Grid & Education Badges (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {aboutData.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-850/90 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 text-center space-y-1 shadow-lg backdrop-blur-md group"
                >
                  <span className="text-3xl sm:text-4xl font-black text-white group-hover:text-cyan-400 transition-colors">
                    {stat.value}
                  </span>
                  <p className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bootcamp Credentials / Badges Box */}
            <div className="p-6 rounded-3xl bg-slate-850/90 border border-slate-700/80 backdrop-blur-md shadow-2xl space-y-4">
              <div className="flex items-center space-x-3 border-b border-slate-700/60 pb-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Verified Certifications</h4>
                  <span className="text-xs text-slate-400">Programming Hero Graduate</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start space-x-3">
                  <Cpu size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white">
                      Next Level AI-Driven Software Engineering (2026)
                    </h5>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Advanced Architecture, AI Tooling, Modern Next.js & Server Systems.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start space-x-3">
                  <Code size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white">
                      Full Stack Web Development - Level 1 (2020)
                    </h5>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Core Web Technologies, React, Express, MongoDB, & Authentication.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};