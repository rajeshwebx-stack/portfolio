import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

const skills = [
  { name: 'React & TypeScript', level: 85 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'JavaScript', level: 88 },
  { name: 'Node.js & Express', level: 80 },
  { name: 'Java', level: 75 },
  { name: 'Python', level: 70 },
  { name: 'SQL & MongoDB', level: 78 },
  { name: 'AWS & Cloud', level: 65 },
];

export const SkillsProgress = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-3xl font-bold mb-8 text-center">Technical Proficiency</h3>
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="space-y-2"
        >
          <div className="flex justify-between items-center">
            <span className="text-foreground font-medium">{skill.name}</span>
            <span className="text-primary font-semibold">{skill.level}%</span>
          </div>
          <Progress value={skill.level} className="h-2" />
        </motion.div>
      ))}
    </div>
  );
};
