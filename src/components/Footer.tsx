import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="text-2xl font-bold gradient-text mb-2">
              Jahnavi Banoth
            </div>
            <p className="text-muted-foreground">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div className="flex items-center gap-8">

            <button
              onClick={scrollToTop}
              className="p-3 rounded-full glass-card hover:scale-110 transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} className="text-primary" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-muted-foreground">
          <p>&copy; 2024 Jahnavi Banoth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;