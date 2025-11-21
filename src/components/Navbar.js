import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[linear-gradient(to_right,#5ff4ff,#fa7bfe)] backdrop-blur-2xl shadow-lg border-b border-[#1b263b]/60 z-50">
    {/* <nav className="fixed top-0 left-0 w-full bg-[linear-gradient(to_right,#4b3f72,#6a5d97,#8d85b8)] backdrop-blur-xl shadow-lg border-b border-white/20 z-50"> */}
  {/* <nav className="fixed top-0 left-0 w-full bg-[linear-gradient(to_right,#3a3456,#524a78,#746ca1)] backdrop-blur-xl shadow-lg border-b border-white/20 z-50"> */}
{/* <nav className="fixed top-0 left-0 w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.12),rgba(255,255,255,0.18))] backdrop-blur-2xl shadow-lg border-b border-white/30 z-50"> */}

      <div className="section-container flex items-center justify-between py-4">

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl flex items-center justify-center text-white text-lg font-bold">
            RA
          </div>
          <div>
            <p className="text-lg font-semibold text-white tracking-wide">
              Ramya Adepu
            </p>
            <p className="text-xs text-blue-200 -mt-1">Cloud Developer</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-blue-100">
          {["Home", "About", "Skills", "Certifications", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-400 transition-all duration-200 hover:scale-105 hover:drop-shadow-md"
            >
              {item}
            </a>
          ))}

          <a
            href="/Ramya_CV.pdf"
            download
            className="ml-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 text-sm hover:shadow-blue-500/30"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg border border-blue-500 bg-[#1b263b]/40 backdrop-blur-md hover:bg-[#1b263b]/60 transition text-white"
          >
            {isMobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0d1b2a]/95 backdrop-blur-xl border-t border-blue-900 px-6 py-5 shadow-xl animate-fadeIn">
          {["Home", "About", "Skills", "Certifications", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-3 text-blue-100 text-base font-medium border-b border-[#1b263b] hover:text-blue-400 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          <a
            href="/Ramya_CV.pdf"
            download
            className="block mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-xl text-center shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 text-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
