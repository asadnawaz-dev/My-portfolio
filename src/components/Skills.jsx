import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiGithub,
  SiFigma,
  SiRedux,
  SiNextdotjs,
  SiWoocommerce,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiElementor,
  SiSemrush,
  SiApachenetbeanside,
  SiPhp, // ✅ PHP icon imported
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML5", color: "bg-orange-400" },
    { icon: <FaCss3Alt />, name: "CSS3", color: "bg-blue-500" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "bg-teal-400" },
    { icon: <FaJs />, name: "JavaScript", color: "bg-yellow-400" },
    { icon: <FaReact />, name: "React.js", color: "bg-cyan-400" },
    { icon: <SiRedux />, name: "Redux", color: "bg-purple-600" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "bg-black" },
    { icon: <FaNodeJs />, name: "Node.js", color: "bg-green-600" },
    { icon: <SiExpress />, name: "Express.js", color: "bg-gray-800" },
    { icon: <SiPhp />, name: "PHP", color: "bg-indigo-700" }, 
    { icon: <SiMongodb />, name: "MongoDB", color: "bg-green-500" },
    { icon: <SiMysql />, name: "MySQL", color: "bg-blue-600" },
    { icon: <SiApachenetbeanside />, name: "API", color: "bg-gray-700" },
    { icon: <FaGitAlt />, name: "Git", color: "bg-red-500" },
    { icon: <SiGithub />, name: "GitHub", color: "bg-black" },
    { icon: <FaWordpress />, name: "WordPress", color: "bg-blue-700" },
    { icon: <SiElementor />, name: "Elementor", color: "bg-pink-500" },
    { icon: <SiWoocommerce />, name: "WooCommerce", color: "bg-indigo-600" },
    { icon: <SiSemrush />, name: "SEO Tools", color: "bg-orange-500" },
    { icon: <SiGoogleanalytics />, name: "Analytics", color: "bg-yellow-500" },
    { icon: <SiGooglesearchconsole />, name: "Search Console", color: "bg-red-600" },
    { icon: <SiFigma />, name: "Figma", color: "bg-purple-500" },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technologies I Use to Build Web Experiences
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 ${skill.color} rounded-full shadow-xl flex flex-col items-center justify-center text-white font-semibold cursor-default`}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.05,
              }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl">{skill.icon}</div>
              <span className="text-[10px] sm:text-[10px] mt-1 text-white text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
