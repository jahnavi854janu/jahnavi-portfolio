import { ArrowDown, Download, Mail } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/50"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl float-animation"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-secondary/20 blur-xl float-animation delay-300"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-primary-glow/30 blur-lg float-animation delay-500"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in-up delay-200">
          <span className="block text-foreground mb-2">Halo, I'm</span>
          <span className="block gradient-text">Jahnavi Banoth</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 fade-in-up delay-300">
          UI/UX Designer | Front-end Developer
        </p>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto fade-in-up delay-500">
          Final-year Computer Science student passionate about solving real-world problems 
          through innovative technology and creating meaningful digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 fade-in-up delay-500">
          <button
            onClick={() => scrollToSection('#contact')}
            className="hero-button flex items-center gap-2"
          >
            <Mail size={20} />   Contact Me
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('#about')}
          className="animate-bounce fade-in-up delay-700"
        >
          <ArrowDown size={32} className="text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;