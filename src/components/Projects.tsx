import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import xoStoreImage from '@/assets/project-xo-store.jpg';
import bmiImage from '@/assets/project-bmi.jpg';
import weatherImage from '@/assets/project-weather.jpg';
import todoImage from '@/assets/project-todo.jpg';

const projects = [
  {
    title: 'XO Store Clone',
    description: 'A fully functional e-commerce store clone featuring modern UI design, product catalog, and seamless shopping cart functionality.',
    tech: ['React', 'CSS', 'JavaScript'],
    link: 'https://xo-store-clone.netlify.app/',
    image: xoStoreImage,
  },
  {
    title: 'BMI Calculator',
    description: 'Interactive health tracking application that calculates Body Mass Index with real-time results and personalized health recommendations.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://rajshub00.github.io/BMI-Track/',
    image: bmiImage,
  },
  {
    title: 'Weather App',
    description: 'Real-time weather forecast application displaying current conditions, 5-day predictions, and location-based weather data with intuitive UI.',
    tech: ['React', 'API', 'CSS'],
    link: '#',
    image: weatherImage,
  },
  {
    title: 'Task Manager',
    description: 'Productivity-focused to-do list application with task organization, completion tracking, and clean interface for efficient task management.',
    tech: ['JavaScript', 'LocalStorage', 'CSS'],
    link: '#',
    image: todoImage,
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
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
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
                <Card className="glass p-6 h-full hover:scale-105 transition-all duration-300 border-border hover:border-accent">
                  <div className="space-y-4">
                    {project.image && (
                      <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                        <img 
                          src={project.image} 
                          alt={`${project.title} preview`} 
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    )}
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-secondary/20 text-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
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
