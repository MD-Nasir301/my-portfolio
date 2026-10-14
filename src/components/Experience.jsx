
import * as Icons from 'lucide-react';

export const Experience = () => {
  const Briefcase = Icons.Briefcase || Icons.Folder;
  const GraduationCap = Icons.GraduationCap || Icons.BookOpen;

  const experiences = [
    {
      role: "Frontend / Full-Stack Web Developer",
      company: "Self-Employed / Freelance",
      period: "2023 - Present",
      description: "Developing modern, high-performance web applications using React, Tailwind CSS, and Node.js. Building customized UI components and integrating REST APIs."
    },
    {
      role: "Trainee Web Developer",
      company: "Programming Hero",
      period: "2023",
      description: "Completed intensive web development training covering HTML5, CSS3, JavaScript (ES6+), React.js, Express.js, MongoDB, and Git workflow through hands-on projects."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science / HSC / Degree Name",
      institution: "Your University / College Name",
      period: "Passing Year or Running",
      description: "Focused on core education and computer fundamentals, problem solving, and software development practices."
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-950/60">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs sm:text-sm font-semibold text-cyan-400 tracking-widest uppercase">
            My Journey
          </h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Experience & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Education</span>
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Work Experience */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 text-cyan-400 mb-6">
              {Briefcase && <Briefcase size={26} />}
              <h4 className="text-2xl font-bold text-white">Work Experience</h4>
            </div>

            <div className="space-y-6 border-l-2 border-slate-800 pl-6 ml-3">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors"></div>
                  
                  <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all backdrop-blur-md space-y-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {exp.period}
                    </span>
                    <h5 className="text-lg font-bold text-white pt-2">{exp.role}</h5>
                    <p className="text-sm font-medium text-slate-400">{exp.company}</p>
                    <p className="text-sm text-slate-400 leading-relaxed pt-2">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 text-cyan-400 mb-6">
              {GraduationCap && <GraduationCap size={26} />}
              <h4 className="text-2xl font-bold text-white">Education</h4>
            </div>

            <div className="space-y-6 border-l-2 border-slate-800 pl-6 ml-3">
              {education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors"></div>
                  
                  <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all backdrop-blur-md space-y-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {edu.period}
                    </span>
                    <h5 className="text-lg font-bold text-white pt-2">{edu.degree}</h5>
                    <p className="text-sm font-medium text-slate-400">{edu.institution}</p>
                    <p className="text-sm text-slate-400 leading-relaxed pt-2">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};