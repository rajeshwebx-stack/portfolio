import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Code2, Server, Wrench } from 'lucide-react';
import { SkillsProgress } from './SkillsProgress';

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'HTML · CSS · JavaScript · React · TypeScript',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'REST API · MongoDB · MySQL',
  },
  {
    icon: Wrench,
    title: 'Tools',
    description: 'Git · npm · VS Code',
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
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Skills &amp; Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.2 } }}
              >
                <Card className="glass p-6 h-full hover:glow-white transition-all duration-300 border-border hover:border-primary hover:shadow-2xl">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300">
                      <skill.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{skill.title}</h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Skills Progress Section */}
          <div className="mt-16">
            <SkillsProgress />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
