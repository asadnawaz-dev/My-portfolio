// src/components/About.jsx
// src/components/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-[#fffaf0] text-gray-800">
      <div className="max-w-3xl mx-auto text-center">

        {/* Heading with animation */}
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* Tight spacing & smooth scroll-in */}
        <div className="text-[1.05rem] leading-[1.6rem] text-justify space-y-3">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Hi, I'm <strong>Asad Nawaz</strong> — a dedicated full-stack web developer focused on building clean, fast, and reliable websites that help businesses grow and stand out online.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            I work independently but with the mindset and process of a full agency. From the first conversation to the final launch, I ensure clear communication, attention to detail, and solutions tailored to your goals.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Every project I take on is guided by a simple philosophy: <em>deliver value, not just code</em>. Whether you need a custom website, business platform, or a performance revamp — I’m here to help you achieve lasting impact through technology.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Your success is my priority — and I’m here to support you every step of the way.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
