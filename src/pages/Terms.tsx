import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const Terms = () => (
  <Layout>
    <section className="gradient-diagonal py-16">
      <div className="container-custom text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold">Term of Service</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-muted-foreground mt-4">Last updated: January 2025</motion.p>
      </div>
    </section>
    <section className="section-padding">
      <div className="container-custom max-w-4xl prose prose-gray">
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using Lamstacks services, you accept and agree to be bound by these Terms of Service.</p>
        <h2>2. Services</h2>
        <p>Lamstacks provides IT consulting, recruitment, DevOps, cloud migration, and AI services to businesses worldwide.</p>
        <h2>3. User Responsibilities</h2>
        <p>Users agree to provide accurate information and use our services in compliance with applicable laws.</p>
        <h2>4. Intellectual Property</h2>
        <p>All content and materials on our platform are protected by intellectual property rights owned by Lamstacks.</p>
        <h2>5. Limitation of Liability</h2>
        <p>Lamstacks shall not be liable for any indirect, incidental, or consequential damages arising from service use.</p>
        <h2>6. Contact</h2>
        <p>For questions, contact us at Info@Lamstacks.Com</p>
      </div>
    </section>
  </Layout>
);

export default Terms;
