import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import one from "@/assets/one.jpg";
import two from "@/assets/two.jpg";
import four from "@/assets/four.jpg";
import three from "@/assets/three.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Routine Management",
      description:
        "A productivity-focused application designed to help users organize daily tasks, set reminders, track habits, and manage schedules with ease.",
      tags: ["React", "Node.js", "Tailwind", "Typescript"],
      image: one, // ✅ image reference
    },
    {
      title: "Shopify Jewellery Store",
      description:
        "An elegant Shopify-based online store for jewellery, featuring custom product pages, secure checkout, responsive design, and seamless integration with payment gateways.",
      tags: ["Shopify", "Html", "CSS", "Javascript"],
      image: two, // ✅ image reference
    },
    {
      title: "Code Cleaner (HTML & CSS)",
      description:
        "A utility tool that scans and optimizes HTML & CSS code by removing unused styles, formatting markup, and improving overall readability and performance.",
      tags: ["React", "Typescript", "Tailwind", "AI"],
      image: four, // ✅ image reference
    },
    {
      title: "Game Play to Reels",
      description:
        "A creative tool that captures gameplay highlights and automatically converts them into short-form video reels, optimized for sharing on platforms like Instagram, TikTok, and YouTube Shorts. (Under Process)",
      tags: ["React", "Typescript", "Tailwind", "APIs Integration"],
      image: three, // ✅ image reference
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 gradient-primary mx-auto mb-6" />
            <p className="text-muted-foreground text-lg">
              Some of my recent work
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl overflow-hidden hover-lift group cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-0">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Optional buttons */}
                  {/* <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button variant="gradient" size="sm" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
