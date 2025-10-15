// src/Projects.tsx
const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            These are some cool projects I’ve built recently 🚀
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="glass-card p-6 rounded-xl space-y-2 shadow">
            <h3 className="text-xl font-bold">SceneWeaver</h3>
            <p>AI-powered collaborative story generator.</p>
            <p className="text-sm text-muted-foreground">React • Node.js • MongoDB</p>
            <a
              href="https://sceneweaver.vercel.app"
              target="_blank"
              className="text-primary underline"
            >
              Live Demo
            </a>
          </div>

          {/* Project 2 */}
          <div className="glass-card p-6 rounded-xl space-y-2 shadow">
            <h3 className="text-xl font-bold">ChickenFoodie</h3>
            <p>Food ordering site for chicken lovers 🐔</p>
            <p className="text-sm text-muted-foreground">HTML • CSS • JavaScript</p>
            <a
              href="https://github.com/jahnavi854janu/chickenfoodie"
              target="_blank"
              className="text-primary underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
