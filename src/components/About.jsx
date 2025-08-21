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

        {/* Text Content */}
        <div className="text-[1.05rem] leading-[1.6rem] text-justify space-y-3">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            I am a full-stack web developer who builds fast, clean, and professional websites. 
            My focus is on creating solutions that not only look great but also help businesses grow and perform better online.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            From the first idea to the final launch, I manage every step with clear communication and attention to detail. 
            Whether it is a custom website, an e-commerce platform, or improving an existing site, my goal is always to deliver work that adds real value.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I believe in long-term results, not quick fixes — and I am committed to making sure every project truly supports your goals.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
