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
      company: 'BeMySocial',
      period: 'Feb 2024 – Present',
      description: 'Managed 100+ websites, enforced least privilege access, SSL/DNS configurations, led 5-person team, boosted uptime to 97.9%, cut downtime by 30%, migrated servers for 73% productivity increase.',
      technologies: ['Linux', 'Windows Server', 'SSL/DNS', 'Team Management', 'Server Migration'],
    },
    {
      icon: Code,
      title: 'IT Support Technician',
      company: 'IT Solutions',
      period: 'Apr 2023 – Jan 2024',
      description: 'Provided L2 support for 20+ clients, managed 60+ devices monthly, network troubleshooting, cut downtime by 40%, deployed endpoint monitoring across 12 branches.',
      technologies: ['L2 Support', 'Network Troubleshooting', 'Endpoint Monitoring', 'Device Management'],
    },
    {
      icon: Code,
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: '2021 – 2022',
      description: 'Built and optimized websites with React/WordPress/Shopify, improved security, boosted e-commerce cart value by 20%, enhanced UI/UX for mobile responsiveness.',
      technologies: ['React', 'WordPress', 'Shopify', 'UI/UX', 'E-commerce'],
    },
    {
      icon: Server,
      title: 'LAN Administrator Intern',
      company: 'Damelin College',
      period: '2020',
      description: 'Deployed LAN infrastructure, resolved system issues, performed malware scans, improved connectivity.',
      technologies: ['LAN Infrastructure', 'System Administration', 'Malware Analysis', 'Connectivity'],
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
                      <h3 className="text-2xl font-heading font-bold mb-2 text-foreground">
                        {exp.title}
                      </h3>
                      <div className="text-lg text-primary font-semibold mb-2">
                        {exp.company} • {exp.period}
                      </div>
                      
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