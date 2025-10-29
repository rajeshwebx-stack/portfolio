import { Scene3D } from '@/components/Scene3D';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Scene3D />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>&copy; 2024 Creative Developer. Built with React & Three.js</p>
      </footer>
    </div>
  );
};

export default Index;
