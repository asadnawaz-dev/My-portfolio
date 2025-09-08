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
      "I create complete web applications using the MERN stack (MongoDB, Express, React, Node). From clean and responsive front-end to secure back-end systems, I build websites that run fast and handle real business needs smoothly.",
  },
  {
    icon: <FaWordpress />,
    title: "WordPress Development",
    detail:
      "I make WordPress websites that are easy to use, fast, and mobile-friendly. Whether it’s a business site, blog, or online store, I focus on a clean design, good speed, and SEO-friendly setup.",
  },
  {
    icon: <FaSearch />,
    title: "SEO Optimization",
    detail:
      "I help websites rank better on search engines by finding the right keywords, fixing technical issues, and improving content and speed. This helps your site get more visitors and better visibility.",
  },
  {
    icon: <FaPencilRuler />,
    title: "UI/UX Design",
    detail:
      "I design simple and user-friendly layouts using Figma. From wireframes to final design, my goal is to make your website clear, easy to use, and visually appealing.",
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
       
        <motion.h2
          className="text-4xl font-bold mb-2 text-gray-800"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Services
        </motion.h2>

        <motion.p
          className="text-gray-600 text-base mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Modern, scalable web solutions built for growth.
        </motion.p>

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


