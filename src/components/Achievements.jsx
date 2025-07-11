import { motion } from "framer-motion";

const stats = [
  { label: "Projects Done", value: "100+" },
  { label: "Happy Clients", value: "50+" },
  { label: "Referral Rate", value: "75%" },
  { label: "Experience", value: "5+" },
];

export default function Achievements() {
  return (
    <section className="py-16 bg-[#fdfdfd]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 place-items-center">
        {stats.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 bg-white rounded-full shadow-lg flex flex-col items-center justify-center border border-gray-300 hover:scale-105 transition-transform duration-300"
              animate={{
                y: isEven ? [0, -20, 0, 20, 0] : [0, 20, 0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <h4 className="text-center text-sm font-semibold text-gray-800 px-2">
                {item.label}
              </h4>
              <p className="text-xl font-bold text-blue-500 mt-1">
                {item.value}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
