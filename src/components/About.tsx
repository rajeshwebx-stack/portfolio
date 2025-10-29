import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
            About Me
          </h2>
          
          <Card className="glass p-8 md:p-12 glow-purple">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate web developer specializing in creating beautiful, 
                performant, and user-friendly digital experiences. With expertise in 
                modern web technologies, I bring ideas to life through clean code and 
                creative problem-solving.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in web development has led me to master React, Three.js, 
                and the latest frontend technologies. I love experimenting with 3D 
                graphics, animations, and interactive elements to create memorable 
                user experiences.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new web technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
