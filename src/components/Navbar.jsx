import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Logoo from "../assets/logoo.png";
import OverlayMenu from "./OverlayMenu";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const lastScrollY = useRef(0);
  const dropdownRef = useRef();

  // Home observer
  useEffect(() => {
    const homeSection = document.querySelector("#home");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true);
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (homeSection) observer.observe(homeSection);
    return () => homeSection && observer.unobserve(homeSection);
  }, []);

  // Scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      if (forceVisible || menuOpen) {
        setVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceVisible, menuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowServices(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-2 left-1/2 -translate-x-1/2 z-40
        transition-transform duration-300
        ${visible ? "translate-y-0" : "-translate-y-32"}`}
      >
        <div
          className="
          flex items-center justify-between
          w-[90vw] max-w-7xl
          h-[64px]
          px-5
          rounded-full
          backdrop-blur-md
          bg-black/40
          border border-white/10
          shadow-xl
          "
        >
          {/* Logo */}
          <Link to="/" className="flex items-center h-full">
            <img
              src={Logoo}
              alt="logo"
              className="h-[150px] w-auto object-contain"
            />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-12 text-white font-medium">
            {/* Home */}
            <Link to="/" className="hover:text-pink-400 transition">
              Home
            </Link>

            {/* About */}
            <a href="#about" className="hover:text-pink-400 transition">
              About
            </a>

            {/* Services Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setShowServices(!showServices)}
                className="flex items-center gap-2 hover:text-pink-400 transition"
              >
                Services
                {showServices ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
              </button>

              {showServices && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 mt-4
                  bg-black border border-gray-700
                  rounded-lg px-6 py-4 space-y-3
                  min-w-[260px] shadow-xl z-50"
                >
                  <Link
                    to="/web-development"
                    onClick={() => setShowServices(false)}
                    className="block text-white hover:text-pink-400 transition"
                  >
                    WEB DEVELOPMENT
                  </Link>

                  <Link
                    to="/graphic-design"
                    onClick={() => setShowServices(false)}
                    className="block text-white hover:text-pink-400 transition"
                  >
                    GRAPHIC DESIGNING
                  </Link>

                  <Link
                    to="/socialmedia-management"
                    onClick={() => setShowServices(false)}
                    className="block text-white hover:text-pink-400 transition"
                  >
                    SOCIAL & DIGITAL MEDIA MANAGEMENT
                  </Link>

                  <Link
                    to="/seo-optimization"
                    onClick={() => setShowServices(false)}
                    className="block text-white hover:text-pink-400 transition"
                  >
                    SEO OPTIMIZATION
                  </Link>
                </div>
              )}
            </div>

            {/* Contact */}
            <a href="#contact" className="hover:text-pink-400 transition">
              Contact
            </a>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden lg:flex items-center
            px-6 h-[36px]
            text-sm rounded-full
            bg-gradient-to-r from-pink-500 to-blue-500
            text-white shadow-md
            hover:opacity-80 transition"
          >
            Reach Out
          </a>

          {/* MOBILE MENU */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-white text-2xl"
            aria-label="Open Menu"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}