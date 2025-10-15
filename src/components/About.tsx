const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="glass-card p-8 rounded-3xl">
                <div className="w-full h-80 rounded-2xl overflow-hidden border border-primary/20">
                  <img 
                    src="/src/assets/profile.jpg" 
                    alt="Jahnavi Banoth" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-secondary/20 blur-xl"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Jahnavi Banoth
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm Jahnavi Banoth, a final-year Computer Science and Engineering student 
                passionate about solving real-world problems through innovative technology. 
                I specialize in full-stack development, machine learning, and UI/UX design.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I've built several hands-on projects addressing privacy, accessibility, 
                and community impact. I'm currently seeking opportunities to apply my skills 
                in a dynamic tech environment where I can continue learning.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                
                <a 
  href="/jahnavi-resume.pdf" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="glass-card p-4 rounded-xl text-center block hover:scale-[1.02] transition-all duration-300"
>
  <div className="text-2xl font-bold text-secondary mb-1">
    📄
  </div>
  <div className="text-sm text-muted-foreground">
    Resume
  </div>
</a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
