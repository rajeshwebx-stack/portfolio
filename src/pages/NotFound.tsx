import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

import { Container } from "@/components/ui/container";
import { VStack } from "@/components/ui/stack";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Container size="full" className="flex min-h-screen items-center justify-center bg-background px-4">
      <Container size="sm">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <VStack align="center" gap={6} className="text-center">
            <motion.h1 
              className="text-8xl md:text-9xl font-bold gradient-text"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              404
            </motion.h1>
            <VStack align="center" gap={2}>
              <h2 className="text-3xl md:text-4xl font-semibold">Page Not Found</h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                The page you're looking for seems to have wandered into another dimension.
              </p>
            </VStack>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground glow-cyan"
              asChild
            >
              <a href="/">
                <Home className="w-5 h-5 mr-2" />
                Return Home
              </a>
            </Button>
          </VStack>
        </motion.div>
      </Container>
    </Container>
  );
};

export default NotFound;
