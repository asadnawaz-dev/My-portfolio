import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="bg-[#f0fdf4] py-20 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>
        <p className="text-center text-gray-600 mb-12">
          Have a project in mind? Let’s collaborate and make it happen.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6 text-gray-700">
              <a href="tel:03472001236" className="flex items-center gap-4 hover:text-blue-600 transition">
                <FaPhoneAlt className="text-blue-500 text-xl" />
                <span>0347 2001236</span>
              </a>
              <a href="mailto:asadn9168@gmail.com" className="flex items-center gap-4 hover:text-blue-600 transition">
                <FaEnvelope className="text-blue-500 text-xl" />
                <span>asadn2270@gmail.com</span>
              </a>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-blue-500 text-xl" />
                <span>Islamabad, Pakistan</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            action="https://formspree.io/f/xjkrqjve"
            method="POST"
            className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Ali"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Write your message here..."
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              ></textarea>
            </div>

            <input type="hidden" name="_captcha" value="false" />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-full shadow-md transition-all duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
