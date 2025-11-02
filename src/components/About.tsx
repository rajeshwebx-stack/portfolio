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
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About Me
          </h2>
          
          <Card className="glass p-8 md:p-12 glow-white border-white/20">
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
        </motion.div>
      </div>
    </section>
  );
};
