import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.png';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Creative Developer
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-white mb-4 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Software Developer
            </motion.p>
            
            <motion.p
              className="text-base md:text-lg text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Building immersive digital experiences with modern web technologies
            </motion.p>

            <motion.div
              className="flex gap-4 justify-center lg:justify-start items-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-white hover:bg-white/90 text-black font-semibold glow-white hover:scale-105 transition-transform"
                asChild
              >
                <a href="#projects">View Work</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <a 
                href="https://github.com/rajshub00" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/rajesh-a-521bb2337/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:rajeshwebx@gmail.com"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* 3D Frame Effect */}
              <div className="absolute inset-0 glass rounded-2xl glow-white transform rotate-3 transition-transform hover:rotate-6 border-white/20" />
              <div className="absolute inset-0 glass rounded-2xl glow-subtle transform -rotate-3 transition-transform hover:-rotate-6 border-white/20" />
              
              {/* Main Image Container */}
              <div className="relative glass rounded-2xl overflow-hidden h-full flex items-center justify-center backdrop-blur-xl border-white/20">
                <img 
                  src={profileImage} 
                  alt="Rajesh - Software Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { duration: 1, delay: 1 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <ArrowDown className="w-6 h-6 text-white" />
        </motion.div>
      </div>
    </section>
  );
};
