import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <motion.div 
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="mb-4 text-8xl md:text-9xl font-bold gradient-text"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          404
        </motion.h1>
        <h2 className="mb-4 text-3xl md:text-4xl font-semibold">Page Not Found</h2>
        <p className="mb-8 text-xl text-muted-foreground">
          The page you're looking for seems to have wandered into another dimension.
        </p>
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
      </motion.div>
    </div>
  );
};

export default NotFound;
