import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const timeline = [
  { month: 'Month 1-2', tech: 'HTML & CSS', description: 'Mastered responsive design and modern layouts' },
  { month: 'Month 3-4', tech: 'JavaScript', description: 'Built interactive web applications' },
  { month: 'Month 5-6', tech: 'React & TypeScript', description: 'Created component-based architectures' },
  { month: 'Month 7-8', tech: 'Backend & Databases', description: 'Developed full-stack applications' },
];

export const LearningTimeline = () => {
  return (
    <div className="relative py-12">
      <h3 className="text-3xl font-bold mb-8 text-center">Learning Journey</h3>
      <div className="space-y-8">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="glass p-6 border-border hover:border-primary transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-24 text-sm text-muted-foreground font-semibold">
                  {item.month}
                </div>
                <div className="flex-grow">
                  <h4 className="text-xl font-bold text-primary mb-2">{item.tech}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
