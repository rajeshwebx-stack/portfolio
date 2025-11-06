import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
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
    category: 'Frontend',
    difficulty: 'Intermediate',
  },
  {
    title: 'BMI Calculator',
    description: 'Interactive health tracking application that calculates Body Mass Index with real-time results and personalized health recommendations.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://rajshub00.github.io/BMI-Track/',
    image: bmiImage,
    category: 'Frontend',
    difficulty: 'Beginner',
  },
  {
    title: 'Weather App',
    description: 'Real-time weather forecast application displaying current conditions, 5-day predictions, and location-based weather data with intuitive UI.',
    tech: ['React', 'API', 'CSS'],
    link: '#',
    image: weatherImage,
    category: 'Full-Stack',
    difficulty: 'Intermediate',
  },
  {
    title: 'Task Manager',
    description: 'Productivity-focused to-do list application with task organization, completion tracking, and clean interface for efficient task management.',
    tech: ['JavaScript', 'LocalStorage', 'CSS'],
    link: '#',
    image: todoImage,
    category: 'Frontend',
    difficulty: 'Beginner',
  },
];

const difficultyColors = {
  Beginner: 'bg-green-500/20 text-green-400 border-green-500/30',
  Intermediate: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  Advanced: 'bg-red-500/20 text-red-400 border-red-500/30',
};

export const Projects = () => {
  const [filter, setFilter] = useState<string>('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const filters = ['All', 'Frontend', 'Backend', 'Full-Stack'];

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

          {/* Filter Buttons */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {filters.map((filterName) => (
              <Button
                key={filterName}
                onClick={() => setFilter(filterName)}
                variant={filter === filterName ? 'default' : 'outline'}
                className="transition-all duration-300 hover:scale-105"
              >
                {filterName}
              </Button>
            ))}
          </div>
          
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <Card className="glass p-6 h-full hover:scale-105 transition-all duration-300 border-border hover:border-primary glow-white">
                  <div className="space-y-4">
                    {project.image && (
                      <div className="aspect-video w-full overflow-hidden rounded-lg mb-4 relative group">
                        <img 
                          src={project.image} 
                          alt={`${project.title} preview`} 
                          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    )}
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-semibold">{project.title}</h3>
                      <Badge className={difficultyColors[project.difficulty as keyof typeof difficultyColors]}>
                        {project.difficulty}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="hover:bg-primary/20 transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover:shadow-lg transition-all duration-300"
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
