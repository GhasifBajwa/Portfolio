import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "Html & Shopify", level: 100, color: "hsl(263, 70%, 50%)" },
    { name: "Wordpress", level: 90, color: "hsl(220, 90%, 60%)" },
    { name: "CSS, Bootstrap & Tailwind", level: 92, color: "hsl(220, 90%, 60%)" },
    { name: "React & JavaScript", level: 80, color: "hsl(263, 70%, 50%)" },
    { name: "Node.js & APIs", level: 85, color: "hsl(220, 90%, 60%)" },
    { name: "Database Design", level: 80, color: "hsl(263, 70%, 50%)" },
    { name: "Performance Optimization", level: 97, color: "hsl(220, 90%, 60%)" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
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

  return (
    <section id="skills" className="py-20 md:py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 gradient-primary mx-auto mb-6" />
            <p className="text-muted-foreground text-lg">
              Technologies and tools I work with
            </p>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-2xl shadow-[var(--shadow-card)]">
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color.replace(")", ", 0.8)")})`,
                        boxShadow: `0 0 10px ${skill.color.replace(")", ", 0.5)")}`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {["React", "JavaScript", "Tailwind", "Bootstrap", "Node.js", "PostgreSQL", "Figma", "APIs", "Wordpress", "Shopify", "Html", "CSS"].map(
              (tech, index) => (
                <div
                  key={index}
                  className="glass-card p-4 rounded-xl text-center hover-lift cursor-pointer"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="font-medium">{tech}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;