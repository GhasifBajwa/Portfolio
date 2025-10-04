import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "San Francisco, CA",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-20 h-1 gradient-primary mx-auto mb-6" />
            <p className="text-muted-foreground text-lg">
              Let's work together on your next project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-slide-up">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Feel free to reach out through any of these channels. I'm always
                  open to discussing new projects, creative ideas, or opportunities.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      className="flex items-center gap-4 group"
                    >
                      <div className="text-primary">{info.icon}</div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">
                          {info.title}
                        </div>
                        <div className="font-medium group-hover:text-primary transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="text-primary">{info.icon}</div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">
                          {info.title}
                        </div>
                        <div className="font-medium">{info.value}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="animate-slide-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                    className="bg-card border-border"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="bg-card border-border"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Project inquiry"
                    required
                    className="bg-card border-border"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="bg-card border-border resize-none"
                  />
                </div>

                <Button variant="gradient" type="submit" className="w-full" size="lg">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
