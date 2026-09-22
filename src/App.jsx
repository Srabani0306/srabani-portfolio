import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import CSBackground from './components/CSBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ArchitectureVisualizer from './components/ArchitectureVisualizer';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#060913] text-slate-100 transition-colors duration-300 relative overflow-hidden">
        {/* Computer Science Animated Network Canvas Background (No space/stars) */}
        <CSBackground />

        {/* Single Page Application Main Content */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <ArchitectureVisualizer />
            <Experience />
            <Services />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
