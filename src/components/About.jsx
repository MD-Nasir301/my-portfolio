import * as Icons from 'lucide-react';

export const About = () => {
  const Code2 = Icons.Code2 || Icons.Code;
  const Cpu = Icons.Cpu || Icons.Terminal;
  const Rocket = Icons.Rocket || Icons.Send;
  const UserCheck = Icons.UserCheck || Icons.CheckCircle;

  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing scalable, maintainable, and well-structured code."
    },
    {
      icon: Cpu,
      title: "Modern Tech Stack",
      description: "Proficient in React, Node.js, Express, and Tailwind CSS."
    },
    {
      icon: Rocket,
      title: "Fast Performance",
      description: "Optimizing web apps for maximum speed and SEO efficiency."
    },
    {
      icon: UserCheck,
      title: "User-Centric",
      description: "Designing intuitive UI/UX for seamless user interactions."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs sm:text-sm font-semibold text-cyan-400 tracking-widest uppercase">
            Get To Know Me
          </h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-2"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Story & Bio */}
          <div className="lg:col-span-6 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>
              Hello! I'm a passionate <strong className="text-cyan-400 font-semibold">Full-Stack Web Developer</strong> with a strong foundation in building interactive, high-performance web applications.
            </p>
            <p>
              My coding journey started with a curiosity for how websites work, which quickly evolved into a full-fledged career crafting robust frontend designs and powerful backend REST APIs.
            </p>
            <p>
              I thrive on solving complex programming challenges, continuously learning new technologies, and transforming creative ideas into real-world web solutions that drive value.
            </p>

            {/* Quick Stats Banner */}
            <div className="grid grid-cols-3 gap-4 pt-4 text-center">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
                <h4 className="text-2xl sm:text-3xl font-extrabold text-cyan-400">10+</h4>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Projects Done</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
                <h4 className="text-2xl sm:text-3xl font-extrabold text-cyan-400">100%</h4>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Dedication</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
                <h4 className="text-2xl sm:text-3xl font-extrabold text-cyan-400">24/7</h4>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Learning</p>
              </div>
            </div>
          </div>

          {/* Right Side: Feature Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 group backdrop-blur-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                    {IconComponent && <IconComponent size={24} />}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};