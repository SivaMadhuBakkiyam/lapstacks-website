import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Server, Cloud, Cpu, Play, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
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
    color: "bg-blue-100 text-primary"
  },
  {
    icon: Server,
    title: "DevOps",
    description: "Optimize your development lifecycle with modern DevOps practices. From CI/CD automation to infrastructure management, we help teams deliver faster, more reliable, and scalable software solutions.",
    color: "bg-orange-100 text-brand-orange"
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    description: "Seamlessly transition your applications and data to the cloud with minimal disruption. Our cloud migration services ensure security, performance, and scalability while reducing operational complexity.",
    color: "bg-green-100 text-brand-green"
  },
  {
    icon: Cpu,
    title: "AI Services",
    description: "Leverage artificial intelligence to transform your business operations. We design and implement AI-driven solutions that enhance decision-making, automate workflows, and unlock valuable insights from data.",
    color: "bg-purple-100 text-brand-purple"
  }
];

const stats = [
  { value: "500+", label: "Clients Worldwide" },
  { value: "500+", label: "Satisfaction Rate" },
  { value: "500+", label: "Successful Placements" },
  { value: "15+", label: "Years of Excellence" }
];

const clientLogos = ["Layers", "Sisyphus", "Circooles", "Catalog", "Quotient"];

const Index = () => {
  return (
    <Layout>
      {/* Announcement Bar */}
      <div className="bg-primary py-2 text-center">
        <p className="text-primary-foreground text-sm">
          Big news — a better HR experience is on the way with our upcoming HRMA launch.
        </p>
      </div>

      {/* Hero Section */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="container-custom py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                <Star className="w-4 h-4" />
                New: Our HRMA Product Launch Soon
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Transform Your Business with{" "}
                <span className="text-gradient">Expert Tech Solutions</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-xl">
                From finding world-class talent to building scalable cloud infrastructure, we're your end-to-end technology partner for growth and innovation.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8">
                  <Link to="/jobs">Find Talent or Jobs</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                  <Link to="/services">Browse Opportunities</Link>
                </Button>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">Trusted by 75,000+ businesses worldwide</p>
                <div className="flex flex-wrap items-center gap-6">
                  {clientLogos.map((logo) => (
                    <span key={logo} className="text-muted-foreground font-semibold text-sm opacity-60">
                      {logo}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Service Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              {[
                { title: "Staff Recruitment", desc: "Pre-vetted tech professionals matched to your needs", icon: Users },
                { title: "DevOps", desc: "Automate CI/CD pipelines for faster software delivery", icon: Server },
                { title: "Cloud Migration", desc: "Securely move applications and data to scalable cloud platforms", icon: Cloud },
                { title: "AI Services", desc: "Gain insights to automate, analyze, and optimize operations seamlessly", icon: Cpu }
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative">
        <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70">
            <img src={heroImage} alt="Office" className="w-full h-full object-cover mix-blend-overlay" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4"
            >
              Empowering Businesses Through Technology
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-primary-foreground/90 max-w-2xl mb-8"
            >
              Discover how we've helped hundreds of companies transform their operations, scale their teams, and accelerate growth through innovative tech solutions.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 bg-primary-foreground rounded-full flex items-center justify-center shadow-lg"
            >
              <Play className="w-6 h-6 text-primary ml-1" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Comprehensive Tech Solutions for{" "}
              <span className="text-gradient">Modern Businesses</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We deliver end-to-end technology services designed to help businesses scale efficiently, innovate faster, and stay competitive in a rapidly evolving digital landscape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-card rounded-2xl border border-border hover:shadow-lg transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">What Our Clients Say</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Real experiences from companies that have transformed their teams and technology with LamStacks
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border max-w-5xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <img
                  src={testimonialImage}
                  alt="Client testimonial"
                  className="rounded-2xl w-full aspect-[4/3] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-primary-foreground/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-2 text-primary">
                    <Play className="w-8 h-8" />
                    <span className="font-medium">Watch Story</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="text-4xl text-primary">"</div>
                <p className="text-lg text-foreground leading-relaxed">
                  Partnering with Lamstacks was one of the best decisions we've made for our business. Their website template is sleek, easy to customize, and optimizes performance on all devices. Our customers have been praising the new design, and we've noticed improved engagement metrics across the board.
                </p>
                <div>
                  <p className="font-bold text-foreground">MICHAEL TURNER</p>
                  <p className="text-sm text-muted-foreground">Product Manager at CloudSync</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2 items-center">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === 0 ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Built in India, trusted worldwide
            </h2>
            <p className="text-primary mt-2 text-xl font-semibold">we're here 24/7 support.</p>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              The core values and principles that drive us to deliver excellence across continents
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-cta">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                Struggling To Find The Right IT Solutions?
              </h2>
              <p className="text-primary-foreground/80">
                We'll Help You Connect With The Right Talent And Technology Partners For Your Business Needs.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="secondary" size="lg" className="rounded-full px-8">
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/jobs">Browse Opportunities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
