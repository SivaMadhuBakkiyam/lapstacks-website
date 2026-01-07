import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Lightbulb, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import officeImage from "@/assets/office-interior.jpg";
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
    description: "We build lasting relationships through transparency, honesty, and accountability. Every decision we make is guided by ethical practices and mutual respect."
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
  { value: "400+", label: "Projects Across Sectors" },
  { value: "3+", label: "Countries in Service" },
  { value: "98%", label: "Satisfied Clients" },
  { value: "200+", label: "5-Star Reviews" }
];

const teamMembers = [
  { name: "Olivia Rhye", role: "Founder & CEO", image: teamMember1 },
  { name: "Phoenix Baker", role: "Engineering Manager", image: teamMember2 },
  { name: "Lana Steiner", role: "Product Manager", image: teamMember3 },
  { name: "Demi Wilkinson", role: "Frontend Developer", image: teamMember4 },
  { name: "Candice Wu", role: "Backend Developer", image: teamMember1 },
  { name: "Natali Craig", role: "Product Designer", image: teamMember3 },
  { name: "Drew Cano", role: "UX Researcher", image: teamMember2 },
  { name: "Orlando Diggs", role: "Customer Success", image: teamMember4 }
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-diagonal py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                About Excellence at <span className="text-gradient">Lamstacks</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Building Scalable Technology. Delivering Measurable Impact.
              </p>
              <p className="text-muted-foreground mb-6">
                <strong className="text-foreground">Lamstacks</strong> is a technology-driven IT services and consulting company built by problem solvers, innovators, and forward-thinkers. We partner with organizations to design, build, and scale digital solutions that are reliable, secure, and future-ready. Our strength lies in blending deep technical expertise with strategic insight to help businesses navigate complexity, embrace innovation, and achieve measurable impact.
              </p>
              <p className="text-muted-foreground">
                We are more than a service provider — we are collaborators, advisors, and long-term partners committed to helping our clients and teams thrive in a rapidly evolving digital world.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src={officeImage}
                alt="Lamstacks Office"
                className="rounded-2xl shadow-lg w-full"
              />
            </motion.div>
          </div>

          <div className="flex flex-wrap items-center gap-8 mt-12">
            <span className="text-muted-foreground text-sm">From start-up to the world's largest companies</span>
            {["Layers", "Sisyphus", "Circooles", "Catalog", "Quotient"].map((logo) => (
              <span key={logo} className="text-muted-foreground font-semibold opacity-60">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary/5 rounded-2xl p-8"
            >
              <Target className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4">Our Mission to Empower Transformation</h3>
              <p className="text-muted-foreground">
                To empower businesses worldwide with innovative IT, AI, and automation solutions – delivering scalable, secure, and intelligent digital experiences that drive measurable impact.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-primary/5 rounded-2xl p-8"
            >
              <Eye className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4">Our Vision for a Smarter Tomorrow</h3>
              <p className="text-muted-foreground">
                To be a global leader in technology innovation, shaping the future of digital transformation through smart systems, human-centric design, and next-gen AI.
              </p>
            </motion.div>
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

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">The Lamstacks Promises</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Core Values</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Our values define who we are, how we work, and the standards we uphold in everything we deliver
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Meet the people behind Lamstacks</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              The talented individuals driving innovation and excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover rounded-2xl mb-4"
                />
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-cta">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            We're always looking for talented individuals to join our growing team.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
            <Link to="/jobs">View Open Positions</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
