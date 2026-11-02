"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F8F8F5]/95 backdrop-blur-md border-b border-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2 group"
          >
            <span className="text-[15px] font-black tracking-[0.18em] text-[#171717] leading-none">
              BAYO
              <span className="inline-block w-2 h-2 rounded-full bg-[#C7F36B] mx-0.5 mb-0.5 align-middle" />
              MECANIX
            </span>
          </a>

          {/* Center nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-200 rounded-md hover:bg-black/5 ${
                    isActive ? "text-[#171717]" : "text-[#555]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C7F36B]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollTo("#equipment")}
              className="px-4 py-2 text-[13px] font-medium text-[#555] hover:text-[#171717] transition-colors duration-200"
            >
              Explore Facility
            </button>
            <button
              onClick={() => scrollTo("#final-cta")}
              className="px-5 py-2.5 bg-[#171717] text-[#F8F8F5] text-[12px] font-semibold tracking-[0.08em] uppercase rounded-full hover:bg-[#333] transition-all duration-200 hover:scale-[1.02]"
            >
              Join the Movement
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-black/5 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#F8F8F5]/98 backdrop-blur-md border-b border-black/5 px-6 py-6 flex flex-col gap-2"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(link.href)}
                className="text-left py-3 text-[15px] font-medium text-[#171717] border-b border-black/5 last:border-0 hover:text-[#555] transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => scrollTo("#equipment")}
                className="py-3 text-[14px] font-medium text-[#555] text-left"
              >
                Explore Facility
              </button>
              <button
                onClick={() => scrollTo("#final-cta")}
                className="w-full py-3 bg-[#171717] text-[#F8F8F5] text-[13px] font-semibold tracking-[0.08em] uppercase rounded-full"
              >
                Join the Movement
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
