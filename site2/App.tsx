import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import FloatingTray from './components/FloatingTray';
import Location from './components/Location';
import { ThemeProvider } from './ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-300 font-sans selection:bg-azure-500/30 transition-colors duration-300">
        <Header />
        <FloatingTray />
        <main>
          <Hero />
          <Summary />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Location />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;