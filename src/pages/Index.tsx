import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Users, Server, Cloud, Cpu, Play, ChevronLeft, ChevronRight, Sparkles, Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { HeroBackground } from "@/components/common/HeroBackground";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { FadeInSection, StaggerContainer, StaggerItem } from "@/components/animations/PageTransition";
import { PageTransition } from "@/components/animations/PageTransition";
import { VideoModal } from "@/components/modals/VideoModal";
import { ScheduleCallModal } from "@/components/modals/ScheduleCallModal";
import { useTheme } from "@/contexts/ThemeContext";
import heroImage from "@/assets/hero-office.jpg";
import testimonialImage from "@/assets/testimonial-1.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const services = [
  {
    icon: Users,
    title: "Staff Recruitment",
    description: "Specialized recruitment solutions for engineering, product, and technical roles. We provide access to pre-vetted professionals who align with your company culture, technology stack, and long-term business goals.",
    color: "bg-blue-100 text-primary dark:bg-blue-900/30 dark:text-blue-400"
  },
  {
    icon: Server,
    title: "DevOps",
    description: "Optimize your development lifecycle with modern DevOps practices. From CI/CD automation to infrastructure management, we help teams deliver faster, more reliable, and scalable software solutions.",
    color: "bg-orange-100 text-brand-orange dark:bg-orange-900/30 dark:text-orange-400"
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    description: "Seamlessly transition your applications and data to the cloud with minimal disruption. Our cloud migration services ensure security, performance, and scalability while reducing operational complexity.",
    color: "bg-green-100 text-brand-green dark:bg-green-900/30 dark:text-green-400"
  },
  {
    icon: Cpu,
    title: "AI Services",
    description: "Leverage artificial intelligence to transform your business operations. We design and implement AI-driven solutions that enhance decision-making, automate workflows, and unlock valuable insights from data.",
    color: "bg-purple-100 text-brand-purple dark:bg-purple-900/30 dark:text-purple-400"
  }
];

const stats = [
  { value: 500, label: "Clients Worldwide", suffix: "+" },
  { value: 98, label: "Satisfaction Rate", suffix: "%" },
  { value: 500, label: "Successful Placements", suffix: "+" },
  { value: 15, label: "Years of Excellence", suffix: "+" }
];

const clientLogos = [
  { name: "LEAD", style: "text-yellow-500 font-bold" },
  { name: "aura", style: "bg-primary text-primary-foreground px-3 py-1 rounded text-sm" },
  { name: "ShriRam", style: "text-primary-foreground font-semibold" },
  { name: "Bajaj Finserv", style: "text-primary-foreground font-semibold" },
  { name: "Lohono", style: "text-primary-foreground font-semibold" }
];

const testimonials = [
  {
    quote: "Partnering with Lamstacks was one of the best decisions we've made for our business. Their website template is sleek, easy to customize, and optimizes performance on all devices.",
    author: "MICHAEL TURNER",
    role: "Product Manager at CloudSync",
    image: testimonialImage
  },
  {
    quote: "The team at Lamstacks delivered exceptional results. Their expertise in cloud migration saved us months of development time and reduced our operational costs significantly.",
    author: "SARAH JOHNSON",
    role: "CTO at TechFlow",
    image: testimonialImage
  },
  {
    quote: "Outstanding recruitment services! They helped us build our entire engineering team with top-tier talent. The quality of candidates exceeded our expectations.",
    author: "DAVID CHEN",
    role: "VP Engineering at InnovateTech",
    image: testimonialImage
  }
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Jobs", path: "/jobs" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Blog", path: "/blog" },
];

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNavClick = (path: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== path) {
      navigate(path);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Layout hideHeader>
      <PageTransition>
        {/* Announcement Bar - First */}
        <div className="bg-primary py-2 text-center">
          <p className="text-primary-foreground text-sm">
            Big news — a better HR experience is on the way with our upcoming HRMA launch.
          </p>
        </div>

        {/* Hero Section with Header inside */}
        <HeroBackground className="py-6 md:py-12" showDecoration={false}>
          {/* Header Inside Hero - Fixed visibility with proper z-index and colors */}
          <header className="mb-8 relative z-50">
            <div className="container-custom">
              <div className="flex items-center justify-between h-16 md:h-20 bg-white/10 backdrop-blur-md rounded-full px-6 border border-white/20 shadow-lg">
                <Link to="/" className="flex items-center gap-2">
                  <img 
                    src="/images/Lampstacks-logo.svg" 
                    alt="Lamstacks" 
                    className="h-8 w-auto brightness-0 invert"
                  />
                </Link>
                <nav className="hidden lg:flex items-center gap-8">
                  {navLinks.map((link) => (
                    <button
                      key={link.path}
                      onClick={() => handleNavClick(link.path)}
                      className={`text-sm font-medium transition-colors hover:text-primary ${
                        location.pathname === link.path ? "text-primary" : "text-white"
                      }`}
                    >
                      {link.name}
                    </button>
                  ))}
                </nav>
                <div className="hidden lg:flex items-center gap-4">
                  <Button 
                    onClick={() => setIsScheduleModalOpen(true)}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
                  >
                    Let's Talk
                  </Button>
                  <button 
                    onClick={toggleTheme}
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30 hover:bg-white/10 transition-colors text-white"
                    aria-label="Toggle theme"
                  >
                    {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden items-center gap-2">
                  <button 
                    onClick={toggleTheme}
                    className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                    aria-label="Toggle theme"
                  >
                    {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                  </button>
                  <button
                    className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                  >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </button>
                </div>
              </div>

              {/* Mobile Navigation */}
              {isMenuOpen && (
                <motion.nav
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="lg:hidden overflow-hidden"
                >
                  <div className="py-4 space-y-2 bg-card rounded-2xl px-4 mb-4 border border-border mt-2">
                    {navLinks.map((link) => (
                      <button
                        key={link.path}
                        onClick={() => handleNavClick(link.path)}
                        className={`block w-full text-left py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                          location.pathname === link.path
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        {link.name}
                      </button>
                    ))}
                    <div className="pt-4 px-4">
                      <Button 
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsScheduleModalOpen(true);
                        }}
                        className="w-full bg-primary hover:bg-primary/90 rounded-full"
                      >
                        Let's Talk
                      </Button>
                    </div>
                  </div>
                </motion.nav>
              )}
            </div>
          </header>

          <div className="container-custom">
            {/* HRMA Chip - Now inside hero, before heading */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <motion.div 
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(139, 92, 246, 0.3)",
                    "0 0 40px rgba(139, 92, 246, 0.5)",
                    "0 0 20px rgba(139, 92, 246, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-3 px-5 py-2 bg-white/10 border border-purple-400/50 rounded-full backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 text-sm font-medium">New: Our HRMA Product Launch Soon</span>
              </motion.div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="initial"
                animate="animate"
                variants={stagger}
                className="space-y-6"
              >
                <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                  Transform Your Business with{" "}
                  <span className="text-primary-foreground">Expert Tech Solutions</span>
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-lg text-gray-300 max-w-xl">
                  From finding world-class talent to building scalable cloud infrastructure, we're your end-to-end technology partner for growth and innovation.
                </motion.p>
                
                <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8">
                    <Link to="/jobs">Find Talent or Jobs</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-white/50 text-white bg-transparent hover:bg-white/10 hover:text-white">
                    <Link to="/services">Browse Opportunities</Link>
                  </Button>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="pt-4">
                  <p className="text-sm text-gray-400 mb-4">Trusted by 75,000+ businesses worldwide</p>
                  <div className="flex flex-wrap items-center gap-6 bg-white/5 backdrop-blur-sm rounded-full px-6 py-4 border border-white/10">
                    {clientLogos.map((logo) => (
                      <span key={logo.name} className={logo.style || "text-muted-foreground font-semibold text-sm"}>
                        {logo.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Service Cards - With transparent container background */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20"
              >
                <div className="space-y-3">
                  {[
                    { title: "Staff Recruitment", desc: "Pre-vetted tech professionals matched to your business needs.", icon: Users },
                    { title: "DevOps", desc: "Automated CI/CD pipelines for faster, reliable software delivery.", icon: Server },
                    { title: "Cloud Migration", desc: "Securely move applications and data to scalable cloud platforms.", icon: Cloud },
                    { title: "AI Services", desc: "Smart AI solutions to automate, analyze, and optimize operations.", icon: Cpu }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-4 p-4 bg-white dark:bg-card rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground truncate">{item.desc}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </HeroBackground>

        {/* Video Section - Touching hero section */}
        <FadeInSection>
          <section className="-mt-8 md:-mt-12 relative z-20 px-4 md:px-8 lg:px-16">
            <div 
              className="relative h-[300px] md:h-[350px] w-full overflow-hidden rounded-3xl"
              style={{ backgroundImage: "url('/images/bg.svg')", backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
              <img src={heroImage} alt="Office" className="w-full h-full object-cover mix-blend-overlay opacity-60" />
              <div className="absolute inset-0 flex items-center px-8 md:px-16">
                <div className="max-w-2xl">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
                  >
                    Empowering Businesses Through Technology
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-white/80 max-w-xl"
                  >
                    Discover how we've helped hundreds of companies transform their operations, scale their teams, and accelerate growth through innovative tech solutions.
                  </motion.p>
                </div>
                <motion.button
                  onClick={() => setIsVideoModalOpen(true)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                >
                  <Play className="w-6 h-6 text-primary ml-1" />
                </motion.button>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Services Section - Dark mode compatible */}
        <section className="section-padding bg-[#F2FFF7] dark:bg-muted/10">
          <div className="container-custom">
            <FadeInSection>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Services</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">
                  Comprehensive Tech Solutions for{" "}
                  <span className="bg-gradient-to-r from-brand-green to-brand-purple bg-clip-text text-transparent">Modern Businesses</span>
                </h2>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                  We deliver end-to-end technology services designed to help businesses scale efficiently, innovate faster, and stay competitive in a rapidly evolving digital landscape.
                </p>
              </div>
            </FadeInSection>

            <StaggerContainer>
              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service) => (
                  <StaggerItem key={service.title}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="p-8 bg-white dark:bg-card rounded-2xl border border-border hover:shadow-lg transition-all group h-full flex flex-col"
                    >
                      <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 flex-shrink-0`}>
                        <service.icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                      <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                      <Link
                        to="/services"
                        className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all mt-auto"
                      >
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Testimonials Section with Auto-rotating Carousel */}
        <section className="section-padding bg-muted/30 dark:bg-muted/10">
          <div className="container-custom">
            <FadeInSection>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">Testimonials</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">What Our Clients Say</h2>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                  Real experiences from companies that have transformed their teams and technology with LamStacks
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="relative max-w-5xl mx-auto">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative">
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt="Client testimonial"
                        className="rounded-2xl w-full aspect-[4/3] object-cover"
                      />
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-xl p-4 cursor-pointer"
                      >
                        <div className="flex items-center gap-2 text-primary">
                          <Play className="w-8 h-8" />
                          <span className="font-medium">Watch Story</span>
                        </div>
                      </motion.div>
                    </div>
                    <div className="space-y-6">
                      <div className="text-4xl text-primary">"</div>
                      <p className="text-lg text-foreground leading-relaxed">
                        {testimonials[currentTestimonial].quote}
                      </p>
                      <div>
                        <p className="font-bold text-foreground">{testimonials[currentTestimonial].author}</p>
                        <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeInSection>

            {/* Improved testimonial navigation with progress indicator */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <motion.button 
                whileHover={{ scale: 1.1, x: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <div className="flex gap-3 items-center">
                {testimonials.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentTestimonial(i);
                    }}
                    whileHover={{ scale: 1.3 }}
                    className={`rounded-full transition-all cursor-pointer relative overflow-hidden ${
                      i === currentTestimonial ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-muted-foreground/30 hover:bg-primary/50"
                    }`}
                  >
                    {i === currentTestimonial && isAutoPlaying && (
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5, ease: "linear" }}
                        className="absolute inset-0 bg-primary/80"
                      />
                    )}
                  </motion.button>
                ))}
              </div>
              <motion.button 
                whileHover={{ scale: 1.1, x: 3 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </section>

        {/* Stats Section - Background with map.svg - proper spacing and dark mode text fix */}
        <section 
          className="section-padding relative overflow-hidden bg-[#EDF5F4] dark:bg-muted/20"
        >
          {/* Globe Map Background - Responsive with proper padding and transparency */}
          <div 
            className="absolute inset-x-0 top-16 bottom-16 opacity-[0.08] dark:opacity-[0.05]"
            style={{ 
              backgroundImage: "url('/images/map.svg')",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          />
          <div className="container-custom relative z-10">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-white">
                  Built in India, trusted worldwide
                </h2>
                <p className="mt-2 text-xl font-semibold bg-gradient-to-r from-primary via-brand-purple to-brand-green bg-clip-text text-transparent">
                  we're here 24/7 support.
                </p>
                <p className="mt-4 text-muted-foreground dark:text-gray-300 max-w-xl mx-auto">
                  The core values and principles that drive us to deliver excellence across continents
                </p>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <FadeInSection key={stat.label} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2000} />
                    </div>
                    <div className="text-muted-foreground dark:text-gray-300">{stat.label}</div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - With proper styling */}
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="container-custom">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl"
              style={{ 
                background: "linear-gradient(135deg, #0F5F4B 0%, #09152F 100%)"
              }}
            >
              <div className="text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Struggling To Find The Right IT Solutions?
                </h2>
                <p className="text-white/80 max-w-md">
                  Let us help you build the team and technology stack that will take your business to the next level.
                </p>
              </div>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-white/50 text-white bg-transparent hover:bg-white/10 hover:text-white">
                <Link to="/jobs">Browse Opportunities</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Video Modal */}
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          videoUrl="https://vimeo.com/1154243348"
        />

        {/* Schedule Call Modal */}
        <ScheduleCallModal
          isOpen={isScheduleModalOpen}
          onClose={() => setIsScheduleModalOpen(false)}
        />
      </PageTransition>
    </Layout>
  );
};

export default Index;
