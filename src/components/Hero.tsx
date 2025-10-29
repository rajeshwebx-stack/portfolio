import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Creative Developer
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building immersive digital experiences with modern web technologies
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground glow-cyan"
              asChild
            >
              <a href="#projects">View Work</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-accent text-foreground hover:bg-accent/10"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>

          <motion.div
            className="flex gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:hello@example.com"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { duration: 1, delay: 1 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <ArrowDown className="w-6 h-6 text-accent" />
        </motion.div>
      </div>
    </section>
  );
};
