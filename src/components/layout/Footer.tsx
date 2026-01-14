import { Link, useNavigate } from "react-router-dom";
import { Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground dark:bg-card text-background dark:text-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <button onClick={() => handleNavClick("/")} className="flex items-center gap-2">
              <img 
                src="/images/Lampstacks-logo.svg" 
                alt="Lamstacks" 
                className={`h-8 w-auto ${theme === 'dark' ? '' : 'brightness-0 invert'}`}
              />
            </button>
            <p className="text-sm text-gray-400 dark:text-muted-foreground leading-relaxed">
              We provide exceptional IT services with expertise in DevOps, IT Consulting, Mobile App Development, and Digital Transformation. Building the future, one solution at a time.
            </p>
            <div>
              <h4 className="font-semibold mb-3 text-background dark:text-foreground">Social Media</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#0A66C2] flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#1DA1F2] flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-background dark:text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Jobs", path: "/jobs" },
                { name: "About Us", path: "/about" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.path)}
                    className="text-sm text-gray-400 dark:text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-background dark:text-foreground">Services</h4>
            <ul className="space-y-3">
              {["Recruitment", "DevOps", "IT Consulting", "Mobile Development", "Digital Transformation"].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleNavClick("/services")}
                    className="text-sm text-gray-400 dark:text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-background dark:text-foreground">Contact</h4>
            <div className="space-y-4 text-sm text-gray-400 dark:text-muted-foreground">
              <p>+234 (9013 - 4173 - 48)</p>
              <p>Info@Lamstacks.Com</p>
              <div>
                <p className="font-medium text-background dark:text-foreground">DHWARCO BUSINESS CENTER</p>
                <p>21-B, 5th Cross St, South Phase</p>
                <p>Thiru Vi Ka Industrial Estate</p>
                <p>Guindy, Chennai – 600032</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 dark:border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 dark:text-muted-foreground">
            © 2025 Lamstacks. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <button onClick={() => handleNavClick("/terms")} className="text-gray-400 dark:text-muted-foreground hover:text-primary transition-colors">
              Term Of Service
            </button>
            <button onClick={() => handleNavClick("/privacy")} className="text-gray-400 dark:text-muted-foreground hover:text-primary transition-colors">
              Policy Service
            </button>
            <button onClick={() => handleNavClick("/cookies")} className="text-gray-400 dark:text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </button>
            <button onClick={() => handleNavClick("/faq")} className="text-gray-400 dark:text-muted-foreground hover:text-primary transition-colors">
              FAQ
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
