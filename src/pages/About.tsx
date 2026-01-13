import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Lightbulb, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { LightHeroBackground } from "@/components/common/HeroBackground";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { PageTransition, FadeInSection, StaggerContainer, StaggerItem } from "@/components/animations/PageTransition";
import officeImage from "@/assets/office-interior.jpg";
import teamCollab from "@/assets/team-collab.jpg";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import teamMember4 from "@/assets/team-member-4.jpg";

const values = [
  {
    icon: Heart,
    title: "Trust & Integrity",
    description: "We build lasting relationships through transparency, honesty, and accountability. Every decision we make is guided by ethical practices and mutual respect."
  },
  {
    icon: Lightbulb,
    title: "Innovation Mindset",
    description: "We continuously push boundaries and challenge the status quo. Our commitment to innovation drives us to find creative solutions for complex challenges."
  },
  {
    icon: Users,
    title: "Collaboration & Teamwork",
    description: "Our success is built together. We foster open communication, shared ownership, and collective effort – within our team and with our clients."
  },
  {
    icon: Heart,
    title: "People First",
    description: "Our people are our greatest strength. We value our clients, employees, and communities equally – prioritizing growth, well-being, and long-term success."
  },
  {
    icon: Award,
    title: "Excellence in Execution",
    description: "Quality is never optional. We are committed to delivering reliable, high-performance solutions that exceed expectations and drive results."
  },
  {
    icon: Target,
    title: "Customer-Centric Impact",
    description: "We focus on what matters: Every solution is designed with our clients' goals in mind, delivering measurable value and meaningful impact."
  }
];

const stats = [
  { value: 400, label: "Projects Across Sectors", suffix: "+" },
  { value: 3, label: "Countries in Service", suffix: "+" },
  { value: 98, label: "Satisfied Clients", suffix: "%" },
  { value: 200, label: "5-Star Reviews", suffix: "+" }
];

const teamMembers = [
  { 
    name: "Olivia Rhye", 
    role: "Founder & CEO", 
    image: teamMember1,
    gifUrl: "https://media.tenor.com/baIfiNZMfXEAAAAi/enjoy-liam-scott-edwards.gif"
  },
  { 
    name: "Phoenix Baker", 
    role: "Engineering Manager", 
    image: teamMember2,
    gifUrl: "https://media.tenor.com/baIfiNZMfXEAAAAi/enjoy-liam-scott-edwards.gif"
  },
  { 
    name: "Lana Steiner", 
    role: "Product Manager", 
    image: teamMember3,
    gifUrl: "https://media.tenor.com/baIfiNZMfXEAAAAi/enjoy-liam-scott-edwards.gif"
  },
  { 
    name: "Demi Wilkinson", 
    role: "Frontend Developer", 
    image: teamMember4,
    gifUrl: "https://media.tenor.com/baIfiNZMfXEAAAAi/enjoy-liam-scott-edwards.gif"
  },
  { 
    name: "Candice Wu", 
    role: "Backend Developer", 
    image: teamMember1,
    gifUrl: "https://media.tenor.com/baIfiNZMfXEAAAAi/enjoy-liam-scott-edwards.gif"
  },
  { 
    name: "Natali Craig", 
    role: "Product Designer", 
    image: teamMember3,
    gifUrl: "https://media.tenor.com/baIfiNZMfXEAAAAi/enjoy-liam-scott-edwards.gif"
  },
  { 
    name: "Drew Cano", 
    role: "UX Researcher", 
    image: teamMember2,
    gifUrl: "https://media.tenor.com/baIfiNZMfXEAAAAi/enjoy-liam-scott-edwards.gif"
  },
  { 
    name: "You?", 
    role: "Join Our Team", 
    image: "",
    gifUrl: "",
    isPlaceholder: true
  }
];

// Gallery images for team photos - improved variety
const galleryImages = [
  { src: officeImage, span: "col-span-2 row-span-2" },
  { src: teamMember1, span: "" },
  { src: teamMember2, span: "" },
  { src: teamMember3, span: "" },
  { src: teamCollab, span: "col-span-2" },
  { src: teamMember4, span: "" },
];

const TeamCard = ({ member, index }: { member: typeof teamMembers[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (member.isPlaceholder) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
        className="text-center"
      >
        <Link to="/jobs">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-full aspect-square rounded-2xl mb-4 bg-gradient-to-br from-primary/20 to-brand-purple/20 border-2 border-dashed border-primary/50 flex items-center justify-center cursor-pointer hover:border-primary transition-colors"
          >
            <div className="text-center">
              <div className="text-4xl mb-2">👋</div>
              <p className="text-primary font-medium">Join Us!</p>
            </div>
          </motion.div>
          <h3 className="font-bold text-primary">{member.name}</h3>
          <p className="text-sm text-muted-foreground">{member.role}</p>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="text-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl mb-4">
        <motion.img
          src={isHovered ? member.gifUrl : member.image}
          alt={member.name}
          className="w-full aspect-square object-cover"
          initial={false}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end justify-center pb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-white text-center">
            <p className="font-bold">{member.name}</p>
            <p className="text-sm opacity-90">{member.role}</p>
          </div>
        </motion.div>
      </div>
      <h3 className="font-bold text-foreground">{member.name}</h3>
      <p className="text-sm text-muted-foreground">{member.role}</p>
    </motion.div>
  );
};

const About = () => {
  return (
    <Layout>
      <PageTransition>
        {/* Hero Section - Fixed to match design with subpage background */}
        <LightHeroBackground className="py-16 md:py-24">
          <div className="container-custom">
            <FadeInSection>
              <div className="text-center mb-12">
                <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4 bg-primary/10 px-4 py-1 rounded-full">
                  About Us
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                  About Excellence at <span className="text-primary">Lamstacks</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Building Scalable Technology. Delivering Measurable Impact.
                </p>
              </div>
            </FadeInSection>
          </div>
        </LightHeroBackground>

        {/* About Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeInSection delay={0.1}>
                <div>
                  <p className="text-muted-foreground mb-6">
                    <strong className="text-foreground">Lamstacks</strong> is a technology-driven IT services and consulting company built by problem solvers, innovators, and forward-thinkers. We partner with organizations to design, build, and scale digital solutions that are reliable, secure, and future-ready. Our strength lies in blending deep technical expertise with strategic insight to help businesses navigate complexity, embrace innovation, and achieve measurable impact.
                  </p>
                  <p className="text-muted-foreground">
                    We are more than a service provider — we are collaborators, advisors, and long-term partners committed to helping our clients and teams thrive in a rapidly evolving digital world.
                  </p>
                </div>
              </FadeInSection>
              <FadeInSection delay={0.2}>
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  src={officeImage}
                  alt="Lamstacks Office"
                  className="rounded-2xl shadow-lg w-full"
                />
              </FadeInSection>
            </div>

            <FadeInSection delay={0.3}>
              <div className="flex flex-wrap items-center gap-8 mt-12">
                <span className="text-muted-foreground text-sm">From start-up to the world's largest companies</span>
                {["Layers", "Sisyphus", "Circooles", "Catalog", "Quotient"].map((logo) => (
                  <span key={logo} className="text-muted-foreground font-semibold opacity-60">
                    {logo}
                  </span>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-muted/30 dark:bg-muted/10">
          <div className="container-custom">
            <StaggerContainer>
              <div className="grid md:grid-cols-2 gap-8">
                <StaggerItem>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-card rounded-2xl p-8 border border-border"
                  >
                    <Target className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-4 text-foreground">Our Mission to Empower Transformation</h3>
                    <p className="text-muted-foreground">
                      To empower businesses worldwide with innovative IT, AI, and automation solutions – delivering scalable, secure, and intelligent digital experiences that drive measurable impact.
                    </p>
                  </motion.div>
                </StaggerItem>
                <StaggerItem>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-card rounded-2xl p-8 border border-border"
                  >
                    <Eye className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-4 text-foreground">Our Vision for a Smarter Tomorrow</h3>
                    <p className="text-muted-foreground">
                      To be a global leader in technology innovation, shaping the future of digital transformation through smart systems, human-centric design, and next-gen AI.
                    </p>
                  </motion.div>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Team Gallery Section - Improved Layout */}
        <section className="section-padding">
          <div className="container-custom">
            <FadeInSection>
              <div className="text-center mb-12">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">Gallery</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Team Moments</h2>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                  Glimpses of our team culture, collaboration, and celebrations
                </p>
              </div>
            </FadeInSection>

            {/* Improved Masonry-style Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
              {galleryImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ scale: 1.03, zIndex: 10 }}
                  className={`overflow-hidden rounded-2xl shadow-lg ${img.span}`}
                >
                  <img
                    src={img.src}
                    alt={`Team moment ${index + 1}`}
                    className="w-full h-full object-cover hover:brightness-110 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section - Background #EDF5F4 with map */}
        <section 
          className="section-padding relative overflow-hidden"
          style={{ backgroundColor: "#EDF5F4" }}
        >
          {/* Globe Map Background - Responsive */}
          <div 
            className="absolute inset-0 opacity-15"
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
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Built in India, trusted worldwide
                </h2>
                <p className="mt-2 text-xl font-semibold bg-gradient-to-r from-primary via-brand-purple to-brand-green bg-clip-text text-transparent">
                  we're here 24/7 support.
                </p>
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
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
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <FadeInSection>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">The Lamstacks Promises</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Our Core Values</h2>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                  Our values define who we are, how we work, and the standards we uphold in everything we deliver
                </p>
              </div>
            </FadeInSection>

            <StaggerContainer>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value) => (
                  <StaggerItem key={value.title}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-card border border-border rounded-xl p-6"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-foreground">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-muted/30 dark:bg-muted/10">
          <div className="container-custom">
            <FadeInSection>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Team</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Meet the people behind Lamstacks</h2>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                  The talented individuals driving innovation and excellence. Hover over photos to see them in action!
                </p>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {teamMembers.map((member, index) => (
                <TeamCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="container-custom">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="rounded-3xl p-8 md:p-12 text-center shadow-xl"
              style={{ 
                background: "linear-gradient(135deg, #0F5F4B 0%, #09152F 100%)"
              }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Join Our Team?
              </h2>
              <p className="text-white/80 max-w-md mx-auto mb-8">
                We're always looking for talented individuals who share our passion for technology and innovation.
              </p>
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8 bg-white text-foreground hover:bg-white/90">
                <Link to="/jobs">View Open Positions</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default About;