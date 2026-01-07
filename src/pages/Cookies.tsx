import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const Cookies = () => (
  <Layout>
    <section className="gradient-diagonal py-16">
      <div className="container-custom text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold">Cookie Policy</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-muted-foreground mt-4">Last updated: January 2025</motion.p>
      </div>
    </section>
    <section className="section-padding">
      <div className="container-custom max-w-4xl prose prose-gray">
        <h2>What Are Cookies</h2>
        <p>Cookies are small text files stored on your device when you visit our website.</p>
        <h2>How We Use Cookies</h2>
        <p>We use cookies for analytics, preferences, and to improve your browsing experience.</p>
        <h2>Types of Cookies</h2>
        <p><strong>Essential:</strong> Required for basic site functionality.</p>
        <p><strong>Analytics:</strong> Help us understand how visitors interact with our site.</p>
        <p><strong>Preferences:</strong> Remember your settings and choices.</p>
        <h2>Managing Cookies</h2>
        <p>You can control cookies through your browser settings.</p>
      </div>
    </section>
  </Layout>
);

export default Cookies;
