import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";

const faqs = [
  { q: "What services does Lamstacks offer?", a: "We offer Staff Recruitment, DevOps, Cloud Migration, AI Services, IT Consulting, and Mobile Development." },
  { q: "How can I apply for a job?", a: "Visit our Jobs page, browse listings, and click Apply Now on any position you're interested in." },
  { q: "Do you work with startups?", a: "Yes! We work with companies of all sizes, from startups to enterprises." },
  { q: "What is your typical project timeline?", a: "Timelines vary based on scope. We provide detailed estimates during our initial consultation." },
  { q: "How do I get a quote?", a: "Contact us through our Contact page or email Info@Lamstacks.Com for a free consultation." },
  { q: "Do you offer remote services?", a: "Yes, we provide services globally and support remote collaboration." },
];

const FAQ = () => (
  <Layout>
    <section className="gradient-diagonal py-16">
      <div className="container-custom text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-muted-foreground mt-4 max-w-2xl mx-auto">Find answers to common questions about our services.</motion.p>
      </div>
    </section>
    <section className="section-padding">
      <div className="container-custom max-w-3xl">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border rounded-xl px-6">
              <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </Layout>
);

export default FAQ;
