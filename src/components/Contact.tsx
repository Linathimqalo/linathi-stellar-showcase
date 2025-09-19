import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/linathi-mqalo-8ab653194',
      color: 'hover:text-blue-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Linathimqalo',
      color: 'hover:text-gray-900',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:mqalolinathi@gmail.com',
      color: 'hover:text-primary',
    },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-in-up' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            Ready to collaborate on your next project? Let's discuss how we can build something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-left' : ''}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium font-body text-foreground mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium font-body text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium font-body text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>
              
              <Button type="submit" className="btn-luxury w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'fade-in-right' : ''}`}>
            <div className="luxury-card h-full flex flex-col justify-center">
              <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">
                Get In Touch
              </h3>
              
              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, innovative projects, and connecting with fellow technology enthusiasts. Whether you have a specific project in mind or just want to say hello, I'd love to hear from you.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-muted-foreground">
                  <Mail className="w-5 h-5 mr-3 text-primary" />
                  <span className="font-body">mqalolinathi@gmail.com</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-body">(+27) 084 796 3615</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-heading font-semibold mb-4 text-foreground">
                  Connect with me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-muted rounded-full flex items-center justify-center text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-luxury hover:scale-110`}
                        aria-label={link.label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;