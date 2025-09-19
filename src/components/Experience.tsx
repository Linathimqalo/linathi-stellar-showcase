import { useEffect, useRef, useState } from 'react';
import { Server, Code, Shield } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      icon: Server,
      title: 'Systems Administrator',
      description: 'Managing servers, security protocols, and IT infrastructure with a focus on reliability and scalability. Implementing cloud solutions and maintaining 99.9% uptime across enterprise environments.',
      technologies: ['Linux', 'Windows Server', 'AWS', 'Docker', 'Kubernetes', 'VMware'],
    },
    {
      icon: Code,
      title: 'Web Developer',
      description: 'Built and managed 100+ websites using modern development stacks. Specialized in full-stack development with emphasis on performance, accessibility, and user experience.',
      technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'TypeScript'],
    },
    {
      icon: Shield,
      title: 'Cybersecurity Analyst',
      description: 'SIEM monitoring, penetration testing, and SOC analysis to protect digital assets. Implementing security frameworks and conducting vulnerability assessments.',
      technologies: ['Splunk', 'Wireshark', 'Nmap', 'Metasploit', 'OWASP', 'ISO 27001'],
    },
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-in-up' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            Three interconnected disciplines that form the foundation of modern digital infrastructure
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={index}
                className={`timeline-item mb-16 transition-all duration-1000 ${
                  isVisible ? 'fade-in-up' : ''
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="luxury-card ml-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-luxury rounded-2xl flex items-center justify-center shadow-luxury">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">
                        {exp.title}
                      </h3>
                      
                      <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium font-body"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;