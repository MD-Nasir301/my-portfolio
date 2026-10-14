import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
   <nav className="sticky top-0 left-0 w-full z-50 bg-[#080C14]/80 backdrop-blur-md border-b border-cyan-500/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand (Left) */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="p-2.5 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition-transform">
              <Code2 size={24} />
            </div>
            <span className="text-2xl font-bold tracking-wide bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
              Portfolio<span className="text-cyan-400">.</span>
            </span>
          </a>

          {/* Desktop Menu (Centered) */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors text-base font-medium tracking-wide">About</a>
            <a href="#skills" className="text-slate-300 hover:text-cyan-400 transition-colors text-base font-medium tracking-wide">Skills</a>
            <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-colors text-base font-medium tracking-wide">Projects</a>
            <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors text-base font-medium tracking-wide">Contact</a>
          </div>

          {/* Hire Me Button (Right) */}
          <div className="hidden md:flex items-center">
            <a 
              href="#contact" 
              className="px-6 py-2.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0b0f19]/95 backdrop-blur-2xl border-b border-slate-800 px-6 pt-4 pb-6 space-y-4">
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-lg font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50"
          >
            About
          </a>
          <a 
            href="#skills" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-lg font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50"
          >
            Skills
          </a>
          <a 
            href="#projects" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-lg font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-lg font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50"
          >
            Contact
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="block text-center w-full mt-2 px-6 py-3 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};