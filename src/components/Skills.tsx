import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Code2, Palette, Rocket, Database, Globe, Zap } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'React, TypeScript, Next.js',
  },
  {
    icon: Palette,
    title: '3D & Animation',
    description: 'Three.js, Framer Motion, GSAP',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimization, Web Vitals',
  },
  {
    icon: Database,
    title: 'Backend',
    description: 'Node.js, PostgreSQL, APIs',
  },
  {
    icon: Globe,
    title: 'Web Technologies',
    description: 'HTML5, CSS3, WebGL',
  },
  {
    icon: Zap,
    title: 'Modern Tools',
    description: 'Git, Vite, Tailwind CSS',
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
            Skills & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <Card className="glass p-6 h-full hover:glow-purple hover:scale-105 transition-all duration-300">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-accent/10">
                      <skill.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">{skill.title}</h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
