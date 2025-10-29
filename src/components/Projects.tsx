import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Portfolio',
    description: 'A stunning portfolio website featuring Three.js 3D graphics, smooth animations, and glassmorphism design.',
    tech: ['React', 'Three.js', 'Framer Motion'],
    link: '#',
    github: '#',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with advanced filtering, real-time search, and seamless checkout experience.',
    tech: ['Next.js', 'TypeScript', 'Stripe'],
    link: '#',
    github: '#',
  },
  {
    title: 'AI Dashboard',
    description: 'Analytics dashboard with AI-powered insights, real-time data visualization, and predictive analytics.',
    tech: ['React', 'D3.js', 'TensorFlow'],
    link: '#',
    github: '#',
  },
  {
    title: 'Social Media App',
    description: 'Full-stack social platform with real-time messaging, media sharing, and advanced user interactions.',
    tech: ['React', 'Node.js', 'Socket.io'],
    link: '#',
    github: '#',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <Card className="glass p-6 h-full hover:glow-purple hover:scale-105 transition-all duration-300">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button
                        size="sm"
                        className="bg-accent hover:bg-accent/90 text-accent-foreground"
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-accent text-foreground hover:bg-accent/10"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
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
