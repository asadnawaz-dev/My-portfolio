import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#fef9f5] to-[#fdf3e7] px-4 pt-[80px] pb-16 sm:py-20 md:py-28 relative overflow-hidden">
      {/* Subtle Decorative Circle */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-yellow-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-5xl text-center space-y-6 sm:space-y-8 relative z-10">

        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight drop-shadow-sm"
        >
          Full Stack Developer &{" "}
          <span className="text-blue-600">WordPress Expert</span> – Crafting
          High-Performance Web Solutions
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          I design and develop blazing-fast, SEO-optimized websites using WordPress and the MERN stack —
          engineered to elevate user experience, enhance brand presence, and drive measurable growth.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-4 sm:pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="w-60 sm:w-auto px-8 py-3 bg-blue-600 text-white text-base font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300 text-center"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="w-60 sm:w-auto px-8 py-3 border border-blue-600 text-blue-600 text-base font-semibold rounded-full hover:bg-blue-600 hover:text-white transition duration-300 text-center"
          >
            Explore Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
