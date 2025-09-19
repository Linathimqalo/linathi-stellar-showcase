const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-primary/5 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-heading font-bold text-primary mb-2">LM</div>
            <p className="text-muted-foreground font-body">
              Building secure, scalable, and modern solutions.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground font-body">
              © {currentYear} Linathi Mqalo. All rights reserved.
            </p>
          </div>
        </div>
        
        {/* Accent divider */}
        <div className="mt-8 w-full h-px bg-gradient-luxury opacity-30"></div>
      </div>
    </footer>
  );
};

export default Footer;