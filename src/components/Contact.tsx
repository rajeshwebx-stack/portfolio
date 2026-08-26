import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Github, Linkedin, Download, Loader2, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Container } from '@/components/ui/container';
import { VStack, HStack } from '@/components/ui/stack';
import contactProfile from '@/assets/contact-portrait.png';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Web3Forms API endpoint (free tier, delivers directly to target email)
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "0428bb42-b0ef-4d4e-8498-e3a1b70d34b0";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Message from ${formData.name}`,
          from_name: `${formData.name} (Portfolio)`,
          to_email: "rajeshwebx@gmail.com",
        }),
      });

      const result = await response.json();

      if (result.success || response.ok) {
        setIsSuccess(true);
        toast({
          title: "Message Sent Successfully! 🎉",
          description: "Thank you for reaching out. Your message has been delivered to Rajesh.",
        });
        setFormData({ name: '', email: '', message: '' });
        setErrors({ name: '', email: '', message: '' });
      } else {
        // Fallback: If no API key is configured yet, launch user's mail client directly
        const mailtoUrl = `mailto:rajeshwebx@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
          formData.name
        )}&body=${encodeURIComponent(
          `Hi Rajesh,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
        )}`;
        window.location.href = mailtoUrl;

        toast({
          title: "Opening Email Client",
          description: "Redirecting your message directly to rajeshwebx@gmail.com.",
        });
      }
    } catch (err) {
      console.error("Submission error:", err);
      // Fallback on network failure
      const mailtoUrl = `mailto:rajeshwebx@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(
        `Hi Rajesh,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      )}`;
      window.location.href = mailtoUrl;

      toast({
        title: "Message Prepared",
        description: "Redirecting to your email client to send to rajeshwebx@gmail.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadCV = () => {
    toast({
      title: "CV Download",
      description: "Downloading CV...",
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <VStack align="center" gap={4} className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Get In Touch
            </h2>
            <p className="text-muted-foreground max-w-xl text-base md:text-lg">
              Have a question, project proposal, or just want to connect? Send me a message below.
            </p>
          </VStack>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center">
            {/* Profile Photo & CV Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <VStack align="center" justify="center" gap={6} className="h-full p-6">
                <div className="relative w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-primary/30 shadow-xl shadow-primary/20 hover:border-primary transition-all duration-300 group">
                  <img
                    src={contactProfile}
                    alt="Rajesh"
                    className="w-full h-full object-cover scale-125 object-[center_25%] group-hover:scale-130 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <VStack align="center" gap={2} className="text-center">
                  <h3 className="text-2xl font-bold">Rajesh</h3>
                  <p className="text-sm text-muted-foreground">Frontend & Backend Developer</p>
                </VStack>

                <Button
                  onClick={handleDownloadCV}
                  className="bg-accent hover:bg-accent/90 text-black font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                  size="lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
              </VStack>
            </motion.div>

            {/* Contact Form Card */}
            <Card className="glass p-8 border-border hover:border-primary transition-all duration-300 shadow-xl">
              <form onSubmit={handleSubmit}>
                <VStack gap={5}>
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={isSubmitting}
                      className={`bg-background/50 border-border focus:border-accent transition-all duration-200 ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={isSubmitting}
                      className={`bg-background/50 border-border focus:border-accent transition-all duration-200 ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or inquiry..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      disabled={isSubmitting}
                      className={`bg-background/50 border-border focus:border-accent resize-none transition-all duration-200 ${errors.message ? 'border-red-500' : ''}`}
                    />
                    {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover:shadow-lg transition-all duration-300 h-11"
                  >
                    {isSubmitting ? (
                      <HStack align="center" justify="center" gap={2}>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </HStack>
                    ) : isSuccess ? (
                      <HStack align="center" justify="center" gap={2}>
                        <CheckCircle2 className="w-4 h-4 text-green-300" />
                        <span>Message Sent!</span>
                      </HStack>
                    ) : (
                      <HStack align="center" justify="center" gap={2}>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </HStack>
                    )}
                  </Button>
                </VStack>
              </form>
            </Card>
          </div>

          {/* Social / Direct Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="glass p-6 border-border hover:border-primary transition-all duration-300 hover:shadow-lg h-full">
                <VStack align="center" gap={3} className="text-center">
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
                </VStack>
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
                <VStack align="center" gap={3} className="text-center">
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
                </VStack>
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
                <VStack align="center" gap={3} className="text-center">
                  <div className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">GitHub</h3>
                  <a 
                    href="https://github.com/rajeshwebx-stack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    github.com/rajeshwebx-stack
                  </a>
                </VStack>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
