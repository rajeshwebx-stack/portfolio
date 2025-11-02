import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Github, Linkedin } from 'lucide-react';
import contactProfile from '@/assets/contact-profile.png';

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Get In Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Profile Photo - Circular with Face Focus */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="relative w-56 h-56 mx-auto overflow-hidden rounded-full border-4 border-primary/30 shadow-lg shadow-primary/20">
                  <img
                    src={contactProfile}
                    alt="Contact Profile"
                    className="w-full h-full object-cover scale-150 object-[center_30%]"
                  />
                </div>
              </motion.div>

              <Card className="glass p-8 border-border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-background/50 border-border focus:border-accent"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-background/50 border-border focus:border-accent"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={5}
                      className="bg-background/50 border-border focus:border-accent resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>

            <div className="space-y-6">
              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="glass p-6 border-border">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-white/10">
                      <Mail className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a 
                        href="mailto:rajeshwebx@gmail.com"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        rajeshwebx@gmail.com
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* LinkedIn */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="glass p-6 border-border">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-white/10">
                      <Linkedin className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">LinkedIn</h3>
                      <a 
                        href="https://www.linkedin.com/in/rajesh-a-521bb2337/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        linkedin.com/in/rajesh-a
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* GitHub */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card className="glass p-6 border-border">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-white/10">
                      <Github className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">GitHub</h3>
                      <a 
                        href="https://github.com/rajshub00"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        github.com/rajshub00
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
