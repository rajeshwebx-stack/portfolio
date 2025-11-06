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
                I'm a 3rd-year IT student specializing in full-stack web development, passionate about 
                building scalable and user-centric applications. With a strong foundation in both 
                frontend and backend technologies, I create seamless digital experiences from concept 
                to deployment.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My technical expertise spans modern frameworks like React, Node.js, and Express, 
                along with database management using SQL and MongoDB. I'm proficient in REST API 
                development, authentication systems, and responsive UI design using Tailwind CSS 
                and modern JavaScript/TypeScript.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond coursework, I actively work on personal projects that solve real-world problems, 
                continuously expanding my skill set in areas like cloud deployment, version control with 
                Git, and agile development practices. I'm always eager to learn emerging technologies 
                and collaborate on innovative solutions.
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
