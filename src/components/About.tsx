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
              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
                Detail-oriented professional with 3+ years managing IT infrastructure for 100+ websites 
                and supporting end-users, emphasizing cybersecurity principles to enhance performance, 
                reduce risks, and ensure compliance. Skilled in server management, threat detection, and 
                incident response across on-premises and cloud environments. Proven in leading teams, 
                streamlining operations, and minimizing downtime while supporting innovation.
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