import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "E-commerce Store", image: "/project-img/p1.png", link: "https://alramizequip.com/" },
  { title: "Recipe Sharing Platform", image: "/project-img/p2.png", link: "https://recipefund.com/" },
  { title: "Lodge Booking Site", image: "/project-img/p3.png", link: "https://www.chaletcadieux.com/" },
  { title: "Food Ordering Website", image: "/project-img/p4.png", link: "https://foodil.co/" },
  { title: "Boxing Equipment E-commerce Store", image: "/project-img/p5.png", link: "https://tufwear-germany.de/" },
  { title: "Real Estate Website", image: "/project-img/p6.png", link: "https://makaansolutions.com/" },
  { title: "Camping & Reservation Website", image: "/project-img/p7.png", link: "https://campingcharles.com/" },
  { title: "E-commerce Website", image: "/project-img/p8.png", link: "https://neers.com.pk/public" },
  // { title: "Restaurant Site", image: "/projects/portfolio.png", link: "#" },
  // { title: "Blog Platform", image: "/projects/portfolio.png", link: "#" },
];

export default function RecentProjects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="recent-projects" className="py-20 bg-[#f8f9fa] px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-10 text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
         Web Projects That Deliver Results
        </motion.h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="group block overflow-hidden rounded-xl shadow hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                  {p.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>

        {projects.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10 flex justify-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="w-60 sm:w-auto px-8 py-3 bg-blue-600 text-white text-base font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300 text-center"
            >
              {showAll ? "Show Less" : "View More Projects"}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
