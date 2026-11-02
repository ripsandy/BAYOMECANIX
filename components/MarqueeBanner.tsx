"use client";

import { motion } from "framer-motion";

const items = [
  "TRAIN REAL",
  "PERFORM PEAK",
  "RECOVER FASTER",
  "5,500 SQ. FT.",
  "360° ATHLETE ECOSYSTEM",
  "PUNE'S FIRST HYBRID PERFORMANCE CENTER",
  "RACE SIMULATION",
  "BIOMECHANICS LAB",
  "OBSTACLE COURSE TRAINING",
];

export default function MarqueeBanner({ dark = false }: { dark?: boolean }) {
  const doubled = [...items, ...items];

  return (
    <div
      className={`overflow-hidden border-y py-4 ${
        dark
          ? "bg-[#C7F36B] border-[#b8e255]"
          : "bg-[#171717] border-[#222]"
      }`}
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-0 whitespace-nowrap w-max"
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-0">
            <span
              className={`text-[11px] font-bold tracking-[0.25em] uppercase px-6 ${
                dark ? "text-[#151515]" : "text-white/60"
              }`}
            >
              {item}
            </span>
            <span
              className={`w-1 h-1 rounded-full ${dark ? "bg-[#151515]/30" : "bg-white/20"}`}
            />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
