import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold gradient-text mb-2">
                Let's Build Something Amazing
              </h3>
              <p className="text-muted-foreground">
                © {currentYear} Ghasif Bajwaw. All rights reserved.
              </p>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/GhasifBajwa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:bajwaghasif@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300"
              >
                <Mail size={24} />
              </a>

            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            {/* <p className="flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> using
              React, TypeScript & Tailwind CSS
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
