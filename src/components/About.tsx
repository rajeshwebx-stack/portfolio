import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { SkillCarousel } from './SkillCarousel';
import { LearningTimeline } from './LearningTimeline';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About Me
          </h2>
          
          {/* Animated Intro Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              I'm a passionate full-stack developer crafting seamless digital experiences
            </h3>
          </motion.div>

          {/* Skill Carousel */}
          <SkillCarousel />
          
          <Card className="glass p-8 md:p-12 glow-white border-border hover:border-primary transition-all duration-300 mb-12">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a 3rd-year IT student with a strong passion for frontend development. 
                I build modern, responsive web interfaces using <strong className="text-foreground">HTML</strong>, <strong className="text-foreground">CSS</strong>, and <strong className="text-foreground">JavaScript</strong>, 
                and I love crafting dynamic, component-driven UIs with <strong className="text-foreground">React</strong> and <strong className="text-foreground">TypeScript</strong>.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                On the backend, I design and build <strong className="text-foreground">REST APIs</strong> and work with databases like 
                <strong className="text-foreground"> MongoDB</strong> and <strong className="text-foreground">MySQL</strong> to create scalable, data-driven applications. 
                I'm comfortable handling full data flow from client to server to database.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I rely on industry-standard tools including <strong className="text-foreground">Git</strong> for version control, 
                <strong className="text-foreground"> npm</strong> for package management, and <strong className="text-foreground">VS Code</strong> as my primary development environment. 
                I'm always eager to build real-world projects and grow as a developer.
              </p>
            </div>
          </Card>

          {/* Learning Timeline */}
          <LearningTimeline />
        </motion.div>
      </div>
    </section>
  );
};
