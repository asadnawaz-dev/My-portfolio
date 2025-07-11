import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaWordpress,
  FaSearch,
  FaPencilRuler,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Full Stack Development",
    detail:
      "I design and develop complete web applications using the MERN stack — MongoDB, Express.js, React.js, and Node.js. From responsive front-end interfaces to secure and high-performance backend systems, I deliver scalable, end-to-end solutions tailored for business growth and user engagement.",
  },
  {
    icon: <FaWordpress />,
    title: "WordPress Development",
    detail:
      "I build custom WordPress websites that are fast, responsive, and easy to manage using Elementor, Astra, or fully custom themes. Whether it’s a business site, blog, or WooCommerce store, I ensure clean design, smooth user experience, SEO readiness, and full compatibility across devices.",
  },
  {
    icon: <FaSearch />,
    title: "SEO Optimization",
    detail:
      "Get your website ranked higher with result-driven SEO services. I perform deep keyword research, fix technical issues, optimize content, and improve page speed to enhance search engine performance and user engagement — using proven tools and strategies.",
  },
  {
    icon: <FaPencilRuler />,
    title: "UI/UX Design",
    detail:
      "I design clean, intuitive, and user-focused interfaces using Figma from wireframes to high-fidelity prototypes. My approach combines aesthetic design with usability to ensure a seamless experience across devices. Whether it’s a landing page, dashboard, or complete web app, I focus on clarity, consistency, and conversion-driven design",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="services"
      className="py-20 px-4 bg-gradient-to-r from-[#f3f4f6] to-[#e0f2fe]"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold mb-2 text-gray-800"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Services
        </motion.h2>

        {/* Tagline below heading */}
        <motion.p
          className="text-gray-600 text-base mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Modern, scalable web solutions built for growth.
        </motion.p>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl p-6 text-left shadow-md hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-opacity-90"
            >
              <div
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full text-xl shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <div className="text-2xl text-gray-400">
                  {openIndex === index ? "−" : "+"}
                </div>
              </div>

              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 text-gray-700 text-sm leading-relaxed"
                >
                  {service.detail}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


