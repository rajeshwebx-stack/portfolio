import { Scene3D } from '@/components/Scene3D';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { CustomCursor } from '@/components/CustomCursor';
import { FloatingShapes } from '@/components/FloatingShapes';
import { BackToTop } from '@/components/BackToTop';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <FloatingShapes />
      <Scene3D />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <BackToTop />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>&copy; 2024 Creative Developer. Built with React & Framer Motion</p>
      </footer>
      
      <Toaster />
    </div>
  );
};

export default Index;
