import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SkillCarousel } from './SkillCarousel';
import { LearningTimeline } from './LearningTimeline';
import { Container } from '@/components/ui/container';
import { VStack, HStack } from '@/components/ui/stack';
import { GraduationCap, Code2, Database, Rocket } from 'lucide-react';
import aboutPortrait from '@/assets/about-portrait.png';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <VStack align="center" gap={4} className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              About Me
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient max-w-3xl">
              Passionate Full-Stack Developer Crafting Seamless Digital Experiences
            </h3>
          </VStack>

          {/* Skill Carousel */}
          <div className="mb-12">
            <SkillCarousel />
          </div>
          
          {/* Main Bio Card with Photo & Metrics */}
          <Card className="glass p-8 md:p-12 glow-white border-border hover:border-primary transition-all duration-300 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Photo Column */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden glass border border-primary/30 shadow-xl group">
                  <img
                    src={aboutPortrait}
                    alt="Rajesh - Final Year IT Student"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <HStack gap={2} wrap>
                      <Badge className="bg-primary text-primary-foreground font-semibold">
                        4th Year / Final Year
                      </Badge>
                      <Badge variant="outline" className="bg-background/80 backdrop-blur-md">
                        IT Engineering
                      </Badge>
                    </HStack>
                  </div>
                </div>
              </div>

              {/* Bio Content Column */}
              <div className="lg:col-span-7">
                <VStack gap={6}>
                  <HStack gap={3} className="text-primary font-semibold text-sm tracking-wider uppercase">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <span>Final-Year (4th Year) Information Technology Student</span>
                  </HStack>

                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    I'm a <strong className="text-foreground font-semibold">Final-Year (4th-Year) IT student</strong> with a dedicated focus on modern full-stack web development. 
                    I engineer fast, responsive, and aesthetically immersive web interfaces using <strong className="text-foreground">React</strong>, <strong className="text-foreground">TypeScript</strong>, <strong className="text-foreground">HTML5/CSS3</strong>, and <strong className="text-foreground">Tailwind CSS</strong>.
                  </p>
                  
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    On the backend, I design and build secure <strong className="text-foreground">RESTful APIs</strong> and work with databases like 
                    <strong className="text-foreground"> MongoDB</strong>, <strong className="text-foreground">MySQL</strong>, and <strong className="text-foreground">Supabase</strong> to architect reliable, data-driven applications from client to database.
                  </p>

                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Equipped with modern engineering workflows including <strong className="text-foreground">Git/GitHub</strong>, 
                    <strong className="text-foreground"> npm</strong>, and <strong className="text-foreground">VS Code</strong>, I love turning complex technical ideas into impactful, user-centric products.
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                    <div className="p-4 rounded-xl glass border border-border">
                      <VStack gap={1}>
                        <Code2 className="w-5 h-5 text-primary" />
                        <span className="font-bold text-lg text-foreground">Frontend</span>
                        <span className="text-xs text-muted-foreground">React & TypeScript</span>
                      </VStack>
                    </div>

                    <div className="p-4 rounded-xl glass border border-border">
                      <VStack gap={1}>
                        <Database className="w-5 h-5 text-accent" />
                        <span className="font-bold text-lg text-foreground">Backend</span>
                        <span className="text-xs text-muted-foreground">REST APIs & DBs</span>
                      </VStack>
                    </div>

                    <div className="p-4 rounded-xl glass border border-border col-span-2 sm:col-span-1">
                      <VStack gap={1}>
                        <Rocket className="w-5 h-5 text-green-400" />
                        <span className="font-bold text-lg text-foreground">Status</span>
                        <span className="text-xs text-muted-foreground">Ready for Roles</span>
                      </VStack>
                    </div>
                  </div>
                </VStack>
              </div>
            </div>
          </Card>

          {/* Learning Timeline */}
          <LearningTimeline />
        </motion.div>
      </Container>
    </section>
  );
};
