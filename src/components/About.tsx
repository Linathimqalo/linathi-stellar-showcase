import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <div className={`transition-all duration-1000 ${isVisible ? 'fade-in-left' : ''}`}>
            <div className="relative">
              <div className="w-full max-w-md mx-auto aspect-square bg-gradient-luxury rounded-2xl shadow-luxury-lg flex items-center justify-center">
                <div className="text-white text-6xl font-heading font-bold">LM</div>
              </div>
              {/* Decorative border */}
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-2xl -z-10"></div>
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-right' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-foreground">
              About Me
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground font-body leading-relaxed mb-6">
                I am a passionate technology professional with expertise spanning three critical areas of modern IT infrastructure.
              </p>
              
              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
                As a <span className="text-primary font-semibold">Systems Administrator</span>, I design and maintain robust IT infrastructures that power businesses forward. My approach combines traditional system management with modern cloud technologies.
              </p>
              
              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
                In my role as a <span className="text-accent font-semibold">Web Developer</span>, I've architected and delivered 100+ websites using cutting-edge technologies. I specialize in creating scalable, responsive applications that provide exceptional user experiences.
              </p>
              
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                As a <span className="text-primary font-semibold">Cybersecurity Analyst</span>, I protect digital assets through comprehensive security monitoring, penetration testing, and SOC analysis. I believe security should be built into every layer of technology.
              </p>
            </div>

            {/* Accent divider */}
            <div className="mt-8 w-24 h-1 bg-gradient-luxury rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;