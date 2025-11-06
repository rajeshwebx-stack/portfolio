import { motion } from 'framer-motion';

const skills = ['React', 'Tailwind CSS', 'JavaScript', 'Java', 'Python', 'AWS', 'Node.js', 'Express', 'MongoDB', 'SQL', 'TypeScript', 'Git'];

export const SkillCarousel = () => {
  return (
    <div className="relative overflow-hidden py-6">
      <motion.div
        className="flex gap-6"
        animate={{
          x: [0, -1920],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="px-6 py-3 rounded-full bg-primary/10 border border-primary/30 whitespace-nowrap text-foreground font-medium"
          >
            {skill}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
