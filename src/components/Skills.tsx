import { Code, Database, Palette, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Skills",
      icon: <Code size={24} />,
      skills: ["OOP", "Problem Solving"]
    },
    {
      title: "Languages",
      icon: <Database size={24} />,
      skills: ["Python", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Web Technologies",
      icon: <Palette size={24} />,
      skills: ["React.js", "UI/UX Design", "Frontend Development"]
    },
    {
      title: "Tools",
      icon: <Wrench size={24} />,
      skills: ["Git & GitHub", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/20 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-badge w-full text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Skills with Progress Bars */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Proficiency Levels
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { skill: "React.js", level: 70 },
              { skill: "Python", level: 75 },
              { skill: "UI/UX Design", level: 90 },
              { skill: "Problem Solving", level: 75 },
              { skill: "JavaScript", level: 75 },
              { skill: "Web Development", level: 90 }
            ].map((item, index) => (
              <div key={index} className="glass-card p-6 rounded-xl">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-foreground font-medium">{item.skill}</span>
                  <span className="text-primary font-bold">{item.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;