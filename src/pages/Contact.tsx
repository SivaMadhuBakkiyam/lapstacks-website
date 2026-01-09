import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import { LightHeroBackground } from "@/components/common/HeroBackground";
import { PageTransition, FadeInSection, SlideInLeft, SlideInRight } from "@/components/animations/PageTransition";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <Layout>
      <PageTransition>
        {/* Hero Section */}
        <LightHeroBackground className="py-16 md:py-24">
          <div className="container-custom text-center">
            <FadeInSection>
              <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
                Contact Us
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Get in Touch
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have a question or want to work together? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </FadeInSection>
          </div>
        </LightHeroBackground>

        {/* Contact Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <SlideInLeft>
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                        className="transition-all focus:ring-2 focus:ring-primary"
                      />
                    </motion.div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                        className="transition-all focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="transition-all focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number</label>
                    <Input
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="transition-all focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                      placeholder="Tell us about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="transition-all focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 rounded-full">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </SlideInLeft>

              {/* Contact Info */}
              <SlideInRight>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                    <div className="space-y-6">
                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Office Address</h3>
                          <p className="text-muted-foreground">
                            DHWARCO BUSINESS CENTER<br />
                            21-B, 5th Cross St, South Phase<br />
                            Thiru Vi Ka Industrial Estate<br />
                            Guindy, Chennai – 600032
                          </p>
                        </div>
                      </motion.div>

                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Phone</h3>
                          <p className="text-muted-foreground">+234 (9013 - 4173 - 48)</p>
                        </div>
                      </motion.div>

                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Email</h3>
                          <p className="text-muted-foreground">Info@Lamstacks.Com</p>
                        </div>
                      </motion.div>

                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Business Hours</h3>
                          <p className="text-muted-foreground">
                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                            Saturday - Sunday: Closed
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Map Placeholder */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-muted rounded-2xl h-64 flex items-center justify-center overflow-hidden"
                  >
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive Map</p>
                    </div>
                  </motion.div>
                </div>
              </SlideInRight>
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Contact;
