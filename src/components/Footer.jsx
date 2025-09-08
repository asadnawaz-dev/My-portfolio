import { FaLinkedin, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#1f2937]/95 backdrop-blur-md text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-center sm:text-left">
        
        {/* Copyright */}
        <div className="text-sm">
          © {new Date().getFullYear()} Asad Nawaz. All Rights Reserved.
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 text-sm">
          {["about", "skills", "services", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="hover:text-indigo-400 transition-colors duration-200"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center sm:justify-end gap-4 text-lg">
          <a
            href="https://www.linkedin.com/in/asadnawazwebdeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:asadn2270@gmail.com"
            className="hover:text-red-400 transition"
          >
            <MdEmail />
          </a>
          <a
            href="https://www.facebook.com/share/1E6AzX1Wku/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
}

