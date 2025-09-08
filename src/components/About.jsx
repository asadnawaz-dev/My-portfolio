import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-[#fffaf0] text-gray-800">
      <div className="max-w-3xl mx-auto text-center">

        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="text-[1.05rem] leading-[1.7rem] text-justify space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <strong>I am a Full Stack Developer</strong> who builds clean, responsive, and user-friendly websites using
            <strong> WordPress and the MERN stack</strong>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            I develop business websites, e-commerce stores, and custom web applications that are fast, SEO-friendly,
            and designed to deliver a great user experience.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            My goal is to create reliable digital solutions that help businesses grow and connect with their customers.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-semibold text-blue-600 mt-4"
          >
            Have an idea to take online? Let’s make it real.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
