import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/images/Lampstacks-logo.svg" 
                alt="Lamstacks" 
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              We provide exceptional IT services with expertise in DevOps, IT Consulting, Mobile App Development, and Digital Transformation. Building the future, one solution at a time.
            </p>
            <div>
              <h4 className="font-semibold mb-3">Social Media</h4>
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
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Jobs", "About Us", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {["Recruitment", "DevOps", "IT Consulting", "Mobile Development", "Digital Transformation"].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6">Contact</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <p>+234 (9013 - 4173 - 48)</p>
              <p>Info@Lamstacks.Com</p>
              <div>
                <p className="font-medium text-white">DHWARCO BUSINESS CENTER</p>
                <p>21-B, 5th Cross St, South Phase</p>
                <p>Thiru Vi Ka Industrial Estate</p>
                <p>Guindy, Chennai – 600032</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2025 Lamstacks. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/terms" className="text-gray-400 hover:text-primary transition-colors">
              Term Of Service
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-primary transition-colors">
              Policy Service
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-primary transition-colors">
              Cookie Policy
            </Link>
            <Link to="/faq" className="text-gray-400 hover:text-primary transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
