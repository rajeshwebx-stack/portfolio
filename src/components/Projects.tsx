import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { VStack, HStack } from '@/components/ui/stack';

import skillTreeImage from '@/assets/project-skill-tree.jpg';
import aiInterviewImage from '@/assets/project-ai-interview.jpg';
import xoStoreImage from '@/assets/project-xo-store.jpg';
import bmiImage from '@/assets/project-bmi.jpg';

const projects = [
  {
    title: 'InterviewerAI — Mock Interview Platform',
    description: 'Voice-enabled AI interview web app that parses resumes, conducts real-time spoken interviews using Groq Whisper AI & LLaMA 3.3 70B, and provides instant audio-visual scoring reports.',
    tech: ['React 19', 'Groq Whisper', 'LLaMA 3.3', 'TanStack Start', 'Zustand', 'Tailwind CSS'],
    link: 'https://github.com/rajeshwebx-stack/recruiter-ai',
    github: 'https://github.com/rajeshwebx-stack/recruiter-ai',
    image: aiInterviewImage,
    category: 'Full-Stack',
    difficulty: 'Advanced',
  },
  {
    title: 'Cyber-RPG Resume Skill Tree',
    description: 'Spatial node-graph portfolio inspired by cyberpunk RPGs. Visitors explore skill trees, interactive operative dossiers, live stat meters, and project nodes built on React Flow.',
    tech: ['React 19', '@xyflow/react', 'Tailwind CSS v4', 'Framer Motion', 'Vite'],
    link: 'https://github.com/rajeshwebx-stack/rajesh-skill-tree',
    github: 'https://github.com/rajeshwebx-stack/rajesh-skill-tree',
    image: skillTreeImage,
    category: 'Frontend',
    difficulty: 'Advanced',
  },
  {
    title: 'XO Store Clone',
    description: 'A fully functional e-commerce store clone featuring modern UI design, product catalog, and seamless shopping cart functionality.',
    tech: ['React', 'CSS', 'JavaScript'],
    link: 'https://xo-store-clone.netlify.app/',
    github: 'https://github.com/rajeshwebx-stack',
    image: xoStoreImage,
    category: 'Frontend',
    difficulty: 'Intermediate',
  },
  {
    title: 'BMI Calculator',
    description: 'Interactive health tracking application that calculates Body Mass Index with real-time results and personalized health recommendations.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://rajshub00.github.io/BMI-Track/',
    github: 'https://github.com/rajeshwebx-stack',
    image: bmiImage,
    category: 'Frontend',
    difficulty: 'Beginner',
  },
];

const difficultyColors = {
  Beginner: 'bg-green-500/20 text-green-400 border-green-500/30',
  Intermediate: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  Advanced: 'bg-primary/20 text-primary border-primary/40 glow-subtle',
};

export const Projects = () => {
  const [filter, setFilter] = useState<string>('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const filters = ['All', 'Frontend', 'Full-Stack'];

  return (
    <section id="projects" className="py-20 px-4">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <VStack align="center" gap={4} className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
              Explore my latest work spanning AI voice applications, interactive spatial graphs, and modern web apps.
            </p>
          </VStack>

          {/* Filter Buttons */}
          <HStack justify="center" gap={3} wrap className="mb-12">
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
          </HStack>
          
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <Card className="glass p-6 h-full flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 border-border hover:border-primary glow-white group">
                  <div className="space-y-4">
                    {project.image && (
                      <div className="aspect-video w-full overflow-hidden rounded-lg relative">
                        <img 
                          src={project.image} 
                          alt={`${project.title} preview`} 
                          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    )}
                    
                    <div className="flex justify-between items-start gap-3">
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge className={difficultyColors[project.difficulty as keyof typeof difficultyColors]}>
                        {project.difficulty}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="hover:bg-primary/20 transition-colors duration-200 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <HStack gap={3} className="pt-6">
                    {project.link && project.link !== '#' && (
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
                    )}
                    {project.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-border hover:bg-accent hover:text-accent-foreground"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </HStack>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
