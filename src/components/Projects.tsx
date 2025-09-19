import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: 'TPOT Honeypot Deployment',
      description: 'Deployed honeypots on Azure/GCP/Ubuntu platforms, successfully captured 441k+ attacks for threat intelligence analysis.',
      techStack: ['Azure', 'GCP', 'Ubuntu', 'T-Pot', 'Threat Intelligence'],
      category: 'Cybersecurity',
      github: 'https://github.com/Linathimqalo/tpot-honeypot',
      demo: null,
    },
    {
      title: 'Zeus Malware Analysis',
      description: 'Comprehensive static and dynamic malware analysis using FLAREVM and Kali Linux environments for cybersecurity research.',
      techStack: ['FLAREVM', 'Kali Linux', 'Malware Analysis', 'Static Analysis', 'Dynamic Analysis'],
      category: 'Cybersecurity',
      github: 'https://github.com/Linathimqalo/zeus-analysis',
      demo: null,
    },
    {
      title: 'SIEM/SOC Lab Environment',
      description: 'Built comprehensive security lab with Wazuh, Security Onion, Splunk, and TheHive5. Implemented automated responses for 500+ log entries.',
      techStack: ['Wazuh', 'Security Onion', 'Splunk', 'TheHive5', 'Automated Response'],
      category: 'Cybersecurity',
      github: null,
      demo: null,
    },
    {
      title: 'SharePoint Migration',
      description: 'Led client migration to SharePoint environment, improving collaboration workflows and document management efficiency.',
      techStack: ['SharePoint', 'Migration', 'Collaboration', 'Document Management'],
      category: 'Systems Administration',
      github: null,
      demo: null,
    },
    {
      title: 'Deloitte Cybersecurity Job Simulation',
      description: 'Analyzed security breach logs and documented comprehensive findings for incident response and forensic investigation.',
      techStack: ['Log Analysis', 'Incident Response', 'Forensics', 'Documentation'],
      category: 'Cybersecurity',
      github: null,
      demo: null,
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Cybersecurity':
        return 'text-accent bg-accent/10';
      case 'Systems Administration':
        return 'text-primary bg-primary/10';
      case 'Web Development':
        return 'text-gradient-mid bg-gradient-mid/10';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-in-up' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            A showcase of innovative solutions across cybersecurity, systems administration, and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`luxury-card group transition-all duration-1000 ${
                isVisible ? 'fade-in-up' : ''
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium font-body ${getCategoryColor(project.category)}`}>
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-xl font-heading font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-muted text-muted-foreground rounded text-sm font-body"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                {project.demo && (
                  <Button variant="outline" size="sm" className="flex-1 btn-luxury-outline" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button variant="outline" size="sm" className="flex-1 btn-luxury-outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                )}
                {!project.demo && !project.github && (
                  <div className="flex-1 text-center text-sm text-muted-foreground py-2">
                    Internal/Academic Project
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;