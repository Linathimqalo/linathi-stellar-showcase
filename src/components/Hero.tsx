import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-starry opacity-5 dark:opacity-20"></div>
      
      {/* Starry background for dark mode */}
      <div className="absolute inset-0 dark:block hidden">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'fade-in-up' : ''}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 bg-gradient-luxury bg-clip-text text-transparent">
            Linathi Mqalo
          </h1>
        </div>
        
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="text-xl md:text-2xl lg:text-3xl font-heading font-medium mb-4 text-foreground">
            <span className="text-primary">Systems Administrator</span>
            <span className="mx-2 text-muted-foreground">|</span>
            <span className="text-accent">Web Developer</span>
            <span className="mx-2 text-muted-foreground">|</span>
            <span className="text-primary">Cybersecurity Analyst</span>
          </div>
        </div>
        
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'fade-in-up' : ''}`}>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto font-body">
            Building secure, scalable, and modern solutions
          </p>
        </div>
        
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'fade-in-up' : ''}`}>
          <Button
            onClick={scrollToProjects}
            className="btn-luxury text-lg px-12 py-6"
          >
            View My Work
          </Button>
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse delay-500"></div>
      <div className="absolute bottom-40 right-10 w-3 h-3 bg-accent rounded-full animate-pulse delay-1500"></div>
    </section>
  );
};

export default Hero;