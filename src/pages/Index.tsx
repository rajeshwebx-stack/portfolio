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

import { Container } from '@/components/ui/container';
import { VStack } from '@/components/ui/stack';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <FloatingShapes />
      <Scene3D />
      <Header />
      <Container size="full" className="px-0">
        <main className="w-full">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <BackToTop />
        <footer className="py-8 border-t border-border">
          <Container size="lg">
            <VStack align="center" gap={2} className="text-center text-muted-foreground text-sm">
              <p>&copy; {new Date().getFullYear()} Rajesh (WEBx). Built with React, TypeScript & Framer Motion</p>
            </VStack>
          </Container>
        </footer>
      </Container>
      <Toaster />
    </div>
  );
};

export default Index;
