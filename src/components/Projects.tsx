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
      title: 'Enterprise Security Dashboard',
      description: 'Real-time cybersecurity monitoring dashboard with SIEM integration, threat intelligence feeds, and automated incident response workflows.',
      techStack: ['React', 'Node.js', 'Elasticsearch', 'Splunk API', 'D3.js'],
      category: 'Cybersecurity',
    },
    {
      title: 'Cloud Infrastructure Manager',
      description: 'Comprehensive cloud resource management platform for multi-cloud environments with cost optimization and automated scaling capabilities.',
      techStack: ['Python', 'AWS SDK', 'Terraform', 'Docker', 'PostgreSQL'],
      category: 'Systems Administration',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with modern payment integration, inventory management, and advanced analytics dashboard.',
      techStack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe API'],
      category: 'Web Development',
    },
    {
      title: 'Network Security Scanner',
      description: 'Automated vulnerability assessment tool with custom reporting, compliance checking, and integration with popular security frameworks.',
      techStack: ['Python', 'Nmap', 'Flask', 'SQLite', 'OWASP ZAP'],
      category: 'Cybersecurity',
    },
    {
      title: 'DevOps Automation Suite',
      description: 'Complete CI/CD pipeline automation with container orchestration, monitoring, and deployment strategies for enterprise applications.',
      techStack: ['Jenkins', 'Kubernetes', 'Ansible', 'Prometheus', 'Grafana'],
      category: 'Systems Administration',
    },
    {
      title: 'Portfolio Management App',
      description: 'Modern web application for investment portfolio tracking with real-time market data, analytics, and risk assessment tools.',
      techStack: ['Vue.js', 'FastAPI', 'Redis', 'WebSocket', 'Chart.js'],
      category: 'Web Development',
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
                <Button variant="outline" size="sm" className="flex-1 btn-luxury-outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button variant="outline" size="sm" className="flex-1 btn-luxury-outline">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;