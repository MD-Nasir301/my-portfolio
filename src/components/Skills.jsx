export const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 / CSS3", "Bootstrap"]
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Express.js", "RESTful APIs", "Authentication (JWT)"]
    },
    {
      category: "Database & Cloud",
      skills: ["MongoDB", "Mongoose", "Firebase", "MySQL (Basic)"]
    },
    {
      category: "Tools & Workflow",
      skills: ["Git & GitHub", "VS Code", "Postman", "Vite", "Vercel / Netlify"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-950/40">
      {/* Background Glow Effect */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs sm:text-sm font-semibold text-cyan-400 tracking-widest uppercase">
            What I Bring To The Table
          </h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-2"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((group, index) => (
            <div 
              key={index}
              className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md shadow-xl"
            >
              <h4 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                <span>{group.category}</span>
              </h4>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 rounded-xl text-sm font-medium bg-slate-800/90 text-cyan-300 border border-slate-700/80 shadow-sm hover:border-cyan-400/50 hover:bg-slate-800 transition-all cursor-default"
                  >
                    {skill}
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