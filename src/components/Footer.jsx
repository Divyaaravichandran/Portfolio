import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#home" className="text-2xl font-display font-bold">
              Divya<span className="text-primary">.</span>
            </a>
            <p className="text-background/60 text-sm mt-2">
              Developer | Creator | Problem Solver
            </p>
          </div>



          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center text-sm text-background/50">
          © {new Date().getFullYear()} Divya. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
