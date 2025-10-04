import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices and modern standards.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Beautiful Design",
      description: "Creating visually stunning interfaces with attention to detail and user experience.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Building fast, optimized applications that deliver exceptional user experiences.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 gradient-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slide-up">
              <div className="glass-card p-8 rounded-2xl shadow-[var(--shadow-card)]">
                <h3 className="text-2xl font-bold mb-4">Hello!</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a passionate developer and designer who loves creating beautiful,
                  functional web experiences. With a keen eye for design and a deep
                  understanding of modern web technologies, I bring ideas to life through
                  code.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My journey in web development has been driven by curiosity and a
                  constant desire to learn. I believe in writing clean, efficient code
                  and creating interfaces that users love to interact with.
                </p>
              </div>
            </div>

            <div className="space-y-6 animate-slide-up">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl hover-lift cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-primary">{feature.icon}</div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
