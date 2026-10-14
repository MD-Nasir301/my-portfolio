import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Certifications } from "./components/Certifications";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
