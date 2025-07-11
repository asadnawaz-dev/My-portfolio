export default function Footer() {
  return (
    <footer className="bg-[#1f2937] text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-center gap-4">
        {/* Brand/Name */}
        <div className="text-sm sm:text-base font-medium">
          © 2025 Asad Nawaz. All rights reserved.
        </div>

        {/* Contact Info or Additional Links (Optional) */}
        <div className="text-sm sm:text-base">
          Built with ❤️ by Asad Nawaz
        </div>
      </div>
    </footer>
  );
}
