import { motion } from 'framer-motion';

export const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Circle 1 */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 150, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: '10%', left: '10%' }}
      />
      
      {/* Circle 2 */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-accent/5 blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: '50%', right: '10%' }}
      />
      
      {/* Square */}
      <motion.div
        className="absolute w-72 h-72 bg-secondary/5 blur-3xl"
        animate={{
          rotate: [0, 90, 0],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: '20%', left: '30%' }}
      />
    </div>
  );
};
