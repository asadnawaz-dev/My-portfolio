import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-[#f0fdf4] py-20 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Contact Me
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Have questions or want to work together? I would love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6 text-gray-700">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-blue-500 text-xl" />
                <span>03472001236 </span>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-500 text-xl" />
                <span>asadn9168@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-blue-500 text-xl" />
                <span>Islamabad, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/xjkrqjve"
            method="POST"
            className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
          >
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="abc"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                placeholder="example@email.com"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                placeholder="Your message..."
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <input type="hidden" name="_captcha" value="false" />

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full shadow-md transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
