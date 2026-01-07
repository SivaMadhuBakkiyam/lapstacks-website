import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Server, Cloud, Cpu, ArrowRight, Shield, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const services = [
  {
    icon: Users,
    title: "Staff Recruitment",
    description: "Specialized recruitment solutions for engineering, product, and technical roles. We provide access to pre-vetted professionals who align with your company culture, technology stack, and long-term business goals.",
    features: ["Technical Screening", "Culture Fit Assessment", "Salary Benchmarking", "Onboarding Support"],
    color: "bg-blue-100 text-primary"
  },
  {
    icon: Server,
    title: "DevOps Services",
    description: "Optimize your development lifecycle with modern DevOps practices. From CI/CD automation to infrastructure management, we help teams deliver faster, more reliable, and scalable software solutions.",
    features: ["CI/CD Pipeline Setup", "Infrastructure as Code", "Container Orchestration", "Monitoring & Alerting"],
    color: "bg-orange-100 text-brand-orange"
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    description: "Seamlessly transition your applications and data to the cloud with minimal disruption. Our cloud migration services ensure security, performance, and scalability while reducing operational complexity.",
    features: ["Cloud Assessment", "Migration Strategy", "Data Transfer", "Post-Migration Support"],
    color: "bg-green-100 text-brand-green"
  },
  {
    icon: Cpu,
    title: "AI Services",
    description: "Leverage artificial intelligence to transform your business operations. We design and implement AI-driven solutions that enhance decision-making, automate workflows, and unlock valuable insights from data.",
    features: ["ML Model Development", "NLP Solutions", "Computer Vision", "Predictive Analytics"],
    color: "bg-purple-100 text-brand-purple"
  },
  {
    icon: Shield,
    title: "IT Consulting",
    description: "Strategic IT consulting to help you navigate complex technology decisions. We provide expert guidance on architecture, security, compliance, and digital transformation initiatives.",
    features: ["Technology Assessment", "Security Audits", "Compliance Consulting", "Digital Strategy"],
    color: "bg-red-100 text-brand-red"
  },
  {
    icon: Zap,
    title: "Mobile Development",
    description: "Build high-performance mobile applications that deliver exceptional user experiences. Our team specializes in native and cross-platform development for iOS and Android.",
    features: ["Native iOS/Android", "React Native", "Flutter Development", "App Store Optimization"],
    color: "bg-blue-100 text-primary"
  }
];

const processSteps = [
  { number: "01", title: "Discovery", description: "We start by understanding your business goals, challenges, and requirements through in-depth consultations." },
  { number: "02", title: "Strategy", description: "Our experts develop a tailored strategy that aligns with your objectives and maximizes ROI." },
  { number: "03", title: "Implementation", description: "We execute the plan with precision, keeping you informed at every step of the process." },
  { number: "04", title: "Support", description: "Post-implementation, we provide ongoing support and optimization to ensure continued success." }
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-diagonal py-16 md:py-24">
        <div className="container-custom text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4"
          >
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Comprehensive Tech Solutions for{" "}
            <span className="text-gradient">Modern Businesses</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            We deliver end-to-end technology services designed to help businesses scale efficiently, innovate faster, and stay competitive in a rapidly evolving digital landscape.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">How We Work</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Our proven methodology ensures successful project delivery every time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-cta">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Let's discuss how our services can help you achieve your technology goals.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
