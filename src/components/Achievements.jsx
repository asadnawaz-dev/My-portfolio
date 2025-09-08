import { motion } from "framer-motion";

const stats = [
  { label: "Projects Completed", value: "40+" },
  { label: "Global Clients", value: "25+" },
  { label: "Technologies Mastered", value: "12+" },
  { label: "Experience", value: "4+ Years" },
];

export default function Achievements() {
  return (
    <section className="py-16 bg-[#fdfdfd]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 place-items-center">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 bg-gradient-to-br from-blue-50 to-white rounded-full shadow-xl flex flex-col items-center justify-center border border-gray-200 hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: 5, scale: 1.1 }}
            animate={{
              y: [0, -12, 0, 12, 0],
              boxShadow: [
                "0px 0px 15px rgba(0,0,0,0.1)",
                "0px 0px 25px rgba(0,0,0,0.15)",
                "0px 0px 15px rgba(0,0,0,0.1)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            <h4 className="text-center text-sm font-semibold text-gray-800 px-2">
              {item.label}
            </h4>
            <p className="text-lg md:text-xl font-bold text-blue-600 mt-1">
              {item.value}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
