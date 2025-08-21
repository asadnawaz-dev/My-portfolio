import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-[#fdfcfb]/90 backdrop-blur-md shadow-md z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <a href="#home" className="flex items-center space-x-2">
          <img
            src="/project-img/logo3.png"
            alt="Asad Nawaz Logo"
            className="h-9 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
          {["about", "skills", "services", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="hover:text-indigo-600 transition-colors duration-200"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>

       
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

   
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white px-6 pb-4 space-y-2 text-center font-medium shadow-sm"
        >
          {["about", "skills", "services", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="block hover:text-indigo-600 transition-colors duration-200"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
