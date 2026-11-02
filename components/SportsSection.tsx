"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { sportsEvents } from "@/data/content";

export default function SportsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sports" ref={ref} className="py-28 md:py-36 bg-[#151515]">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-6 h-px bg-[#C7F36B]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/40">
              Sports & Events
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white max-w-2xl"
          >
            WHATEVER YOUR NEXT CHALLENGE,
            <br />
            <span className="text-white/40">TRAIN FOR IT HERE.</span>
          </motion.h2>
        </div>

        {/* Event grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {sportsEvents.map((sport, i) => (
            <motion.div
              key={sport.name}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-xl overflow-hidden group cursor-default ${
                i < 2 ? "aspect-[4/5]" : "aspect-[3/4]"
              }`}
            >
              <img
                src={sport.image}
                alt={sport.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/90 via-[#151515]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-[9px] font-bold tracking-[0.2em] text-[#C7F36B] uppercase mb-1 opacity-80">
                  {sport.category}
                </div>
                <div className="text-[13px] font-bold text-white leading-tight">{sport.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
