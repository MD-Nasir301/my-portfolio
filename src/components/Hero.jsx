import { useState, useEffect } from "react";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/projectsData";
import myPhoto from "../assets/my-photo.jpg";

export const Hero = () => {
  const ArrowRight = Icons.ArrowRight || Icons.ChevronRight;
  const Download = Icons.Download || Icons.FileText;

  // Typewriter effect logic with Designation & Tech Stack Keywords
  const roles = [
    personalInfo.designation || "Full-Stack Web Developer",
    "Next.js & React Specialist",
    "Node.js & Express Architecture",
    "MongoDB & REST API Engineer",
    "TypeScript & Tailwind Master"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(80);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(120);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  return (
    <section
      id="about"
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-900"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Text & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6 text-center lg:text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span className="text-xs sm:text-sm font-medium text-slate-300">
              Available for Opportunities
            </span>
          </div>

          {/* Main Title */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-cyan-400 tracking-wide min-h-[38px] flex items-center justify-center lg:justify-start">
              <span>{currentText}</span>
              <span className="animate-pulse text-white ml-1 font-bold">|</span>
            </p>
          </div>

          {/* Bio Description */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
            Passionate Full-Stack Web Developer dedicated to engineering clean, responsive, and high-performance applications. Focused on scalable backend systems and modern frontend architectures.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            {/* Explore Projects Button */}
            <a
              href="#projects"
              className="relative p-[1.55px] rounded-full overflow-hidden group inline-block"
            >
              <div className="absolute inset-[-100%] animate-border-beam bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_200deg,#06b6d4_300deg,#3b82f6_360deg)]"></div>
              <span className="relative px-8 py-3.5 rounded-full text-base font-semibold text-slate-950 bg-cyan-400 group-hover:bg-cyan-300 shadow-lg shadow-cyan-400/25 transition-all flex items-center space-x-2">
                <span>Explore Projects</span>
                {ArrowRight && <ArrowRight size={18} />}
              </span>
            </a>

            {/* Download Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-[1.55px] rounded-full overflow-hidden group inline-block"
            >
              <div className="absolute inset-[-100%] animate-border-beam bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_200deg,#06b6d4_300deg,#3b82f6_360deg)]"></div>
              <span className="relative px-8 py-3.5 rounded-full text-base font-semibold text-slate-200 bg-slate-900 group-hover:bg-slate-800 shadow-lg transition-all flex items-center space-x-2">
                {Download && <Download size={18} className="text-cyan-400" />}
                <span>Download Resume</span>
              </span>
            </a>
          </div>

          {/* Social Links with Tooltips */}
          <div className="flex items-center justify-center lg:justify-start space-x-4 pt-4">
            {/* GitHub */}
            <div className="relative group">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center shadow-lg justify-center"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-cyan-400 text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-slate-700 shadow-lg">
                GitHub Profile
              </span>
            </div>

            {/* LinkedIn */}
            <div className="relative group">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center justify-center shadow-lg"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.57 1.57 0 1 0 0 3.14 1.57 1.57 0 0 0 0-3.14z" />
                </svg>
              </a>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-cyan-400 text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-slate-700 shadow-lg">
                LinkedIn Profile
              </span>
            </div>

            {/* Email */}
            <div className="relative group">
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center justify-center shadow-lg"
              >
                <svg
                  className="w-5 h-5 fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-cyan-400 text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-slate-700 shadow-lg">
                Send Email
              </span>
            </div>

            {/* WhatsApp */}
            <div className="relative group">
              <a
                href={`https://wa.me/${personalInfo.phone?.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center justify-center shadow-lg"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
              </a>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-cyan-400 text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-slate-700 shadow-lg">
                WhatsApp
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Visual / Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-80 h-96 sm:w-96 sm:h-[420px] p-[2px] rounded-3xl overflow-hidden group">
            {/* Rotating Border Beam Element */}
            <div className="absolute inset-[-100%] animate-border-beam bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_200deg,#06b6d4_300deg,#3b82f6_360deg)]"></div>

            {/* Inner Content Box */}
            <div className="relative w-full h-full rounded-[23px] bg-slate-900/95 p-6 shadow-2xl flex flex-col items-center justify-center text-center backdrop-blur-md">
              <div className="w-56 h-64 sm:w-64 sm:h-72 rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-900 border border-cyan-500/30 shadow-inner mb-4 overflow-hidden group">
                <img
                  src={myPhoto}
                  alt="Profile"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h3 className="text-xl font-bold text-white">
                {personalInfo.name}
              </h3>
              <p className="text-sm text-cyan-400 mt-1 font-medium">
                {personalInfo.designation || "Full-Stack Web Developer"}
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};