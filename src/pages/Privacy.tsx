import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const Privacy = () => (
  <Layout>
    <section className="gradient-diagonal py-16">
      <div className="container-custom text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold">Privacy Policy</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-muted-foreground mt-4">Last updated: January 2025</motion.p>
      </div>
    </section>
    <section className="section-padding">
      <div className="container-custom max-w-4xl prose prose-gray">
        <h2>1. Information We Collect</h2>
        <p>We collect personal information you provide when using our services, including name, email, and phone number.</p>
        <h2>2. How We Use Your Information</h2>
        <p>We use your information to provide services, communicate with you, and improve our offerings.</p>
        <h2>3. Data Security</h2>
        <p>We implement industry-standard security measures to protect your personal information.</p>
        <h2>4. Third-Party Sharing</h2>
        <p>We do not sell your personal information. We may share data with service providers who assist our operations.</p>
        <h2>5. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal information at any time.</p>
        <h2>6. Contact</h2>
        <p>For privacy inquiries, contact us at Info@Lamstacks.Com</p>
      </div>
    </section>
  </Layout>
);

export default Privacy;
