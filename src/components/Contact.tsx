import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Github, Linkedin, Download } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import contactProfile from '@/assets/contact-profile.png';

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    }
  };

  const handleDownloadCV = () => {
    toast({
      title: "CV Download",
      description: "Your CV download will start shortly.",
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Get In Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Profile Photo - Circular with Face Focus */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-primary/30 shadow-lg shadow-primary/20 hover:border-primary transition-all duration-300">
                <img
                  src={contactProfile}
                  alt="Contact Profile"
                  className="w-full h-full object-cover scale-150 object-[center_30%]"
                />
              </div>
              
              {/* Download CV Button */}
              <Button
                onClick={handleDownloadCV}
                className="mt-8 bg-accent hover:bg-accent/90 text-black font-semibold hover:scale-110 transition-all duration-300 shadow-lg"
                size="lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </motion.div>

            <Card className="glass p-8 border-border hover:border-primary transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`bg-background/50 border-border focus:border-accent transition-all duration-200 ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`bg-background/50 border-border focus:border-accent transition-all duration-200 ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`bg-background/50 border-border focus:border-accent resize-none transition-all duration-200 ${errors.message ? 'border-red-500' : ''}`}
                  />
                  {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="glass p-6 border-border hover:border-primary transition-all duration-300 hover:shadow-lg h-full">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">Email</h3>
                    <a 
                      href="mailto:rajeshwebx@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm break-all"
                    >
                      rajeshwebx@gmail.com
                    </a>
                  </div>
                </Card>
              </motion.div>

              {/* LinkedIn */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="glass p-6 border-border hover:border-primary transition-all duration-300 hover:shadow-lg h-full">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300">
                      <Linkedin className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/rajesh-a-521bb2337/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      linkedin.com/in/rajesh-a
                    </a>
                  </div>
                </Card>
              </motion.div>

              {/* GitHub */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="glass p-6 border-border hover:border-primary transition-all duration-300 hover:shadow-lg h-full">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300">
                      <Github className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">GitHub</h3>
                    <a 
                      href="https://github.com/rajshub00"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      github.com/rajshub00
                    </a>
                  </div>
                </Card>
              </motion.div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};
