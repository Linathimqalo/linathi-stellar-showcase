import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="text-8xl font-heading font-bold text-primary mb-4">404</div>
        <h1 className="text-2xl font-heading font-bold text-foreground mb-4">Page Not Found</h1>
        <p className="text-lg text-muted-foreground font-body mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button 
          onClick={() => window.location.href = '/'}
          className="btn-luxury"
        >
          Return Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
