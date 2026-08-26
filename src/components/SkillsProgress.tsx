import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

const skills = [
  // Frontend
  { name: 'HTML', level: 92 },
  { name: 'CSS', level: 88 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 83 },
  { name: 'TypeScript', level: 78 },
  // Backend
  { name: 'REST API', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'MySQL', level: 72 },
  // Tools
  { name: 'Git', level: 85 },
  { name: 'npm', level: 80 },
  { name: 'VS Code', level: 90 },
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
          transition={{ duration: 0.5, delay: index * 0.07 }}
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
