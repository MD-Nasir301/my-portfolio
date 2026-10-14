import * as Icons from 'lucide-react';
import { personalInfo } from '../data/projectsData';

export const Contact = () => {
  const Mail = Icons.Mail || Icons.Send;
  const Phone = Icons.Phone || Icons.MessageSquare;
  const MapPin = Icons.MapPin || Icons.Compass;
  const Send = Icons.Send || Icons.ArrowRight;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("ধন্যবাদ! আপনার মেসেজটি সফলভাবে পাঠানো হয়েছে।");
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-950/50">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs sm:text-sm font-semibold text-cyan-400 tracking-widest uppercase">
            Get In Touch
          </h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-2xl font-bold text-white mb-2">Let's talk about everything!</h4>
            <p className="text-slate-400 text-base leading-relaxed">
              Have a project in mind, a question, or just want to say hi? Feel free to reach out. I am always open to discussing new projects or creative ideas!
            </p>

            <div className="space-y-4 pt-4">
              
              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center space-x-4 backdrop-blur-md">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  {Mail && <Mail size={22} />}
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Email Me At</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm sm:text-base font-semibold text-white hover:text-cyan-400 transition-colors">
                    {personalInfo.email || "nasirullahbabu@gmail.com"}
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center space-x-4 backdrop-blur-md">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  {Phone && <Phone size={22} />}
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Call / WhatsApp</p>
                  <p className="text-sm sm:text-base font-semibold text-white">
                    {personalInfo.phone || "+880 1700-000000"}
                  </p>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center space-x-4 backdrop-blur-md">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  {MapPin && <MapPin size={22} />}
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Location</p>
                  <p className="text-sm sm:text-base font-semibold text-white">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-md space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="John Doe"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Your Email</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Subject</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Project Collaboration"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  rows="4" 
                  required 
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 rounded-xl font-bold text-slate-900 bg-cyan-400 hover:bg-cyan-300 shadow-lg shadow-cyan-400/20 transition-all flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                {Send && <Send size={18} />}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};