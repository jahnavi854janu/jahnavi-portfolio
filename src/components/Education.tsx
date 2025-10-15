import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering (AIML)",
      institution: "KG Reddy College of Engineering and Technology, Moinabad",
      period: "Oct 2022 – Present",
      status: "Current",
      description: "Specializing in Artificial Intelligence and Machine Learning with focus on full-stack development and problem-solving."
    },
    {
      degree: "Intermediate",
      institution: "Sri Chaitanya Junior College, Manikonda",
      period: "June 2020 – April 2022",
      status: "Completed",
      description: "Completed intermediate education with strong foundation in Mathematics and Science."
    },
    {
      degree: "SSC",
      institution: "Sri Triveni Techno School, Langerhouse",
      period: "July 2017 – Oct 2020",
      status: "Completed",
      description: "Completed secondary education with excellent academic performance."
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {educationData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center gap-3 mb-2 md:mb-0">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <GraduationCap className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {item.degree}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {item.period}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Current' 
                        ? 'bg-primary/20 text-primary' 
                        : 'bg-success/20 text-success'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;