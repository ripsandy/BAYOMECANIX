"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { performancePillars } from "@/data/content";
import { ChevronDown } from "lucide-react";

export default function PerformancePillars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="performance" ref={ref} className="py-28 md:py-36 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-6 h-px bg-[#C7F36B]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#777]">Performance Pillars</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.05] tracking-[-0.02em] text-[#171717] max-w-2xl"
          >
            EVERYTHING AN ATHLETE NEEDS.
            <br />
            <span className="text-[#777]">UNDER ONE ROOF.</span>
          </motion.h2>
        </div>

        {/* Pillars */}
        <div className="space-y-0">
          {performancePillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-black/8 last:border-b"
            >
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full text-left py-8 md:py-10 flex items-start md:items-center gap-6 md:gap-12 group"
              >
                {/* Number */}
                <span className="text-[12px] font-bold tracking-[0.2em] text-[#C7F36B] shrink-0 mt-0.5 md:mt-0 w-10">
                  {pillar.number}
                </span>

                {/* Title block */}
                <div className="flex-1 flex flex-col md:flex-row md:items-center md:gap-8">
                  <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-bold tracking-[-0.01em] text-[#171717] group-hover:text-[#333] transition-colors min-w-[260px]">
                    {pillar.title}
                  </h3>
                  <p className="text-[14px] text-[#777] mt-1 md:mt-0 md:line-clamp-1 max-w-lg">
                    {pillar.subtitle}
                  </p>
                </div>

                {/* Expand icon */}
                <motion.div
                  animate={{ rotate: expanded === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 text-[#777]"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              {/* Expanded content */}
              <motion.div
                initial={false}
                animate={{ height: expanded === i ? "auto" : 0, opacity: expanded === i ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="pb-10 md:pb-12 pl-16 md:pl-22 grid md:grid-cols-2 gap-8 md:gap-16">
                  {/* Text + features */}
                  <div>
                    <p className="text-[15px] text-[#555] leading-relaxed mb-8 max-w-md">
                      {pillar.description}
                    </p>
                    <ul className="space-y-2.5">
                      {pillar.features.map((f, fi) => (
                        <li key={fi} className="flex items-center gap-3 text-[14px] text-[#444]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36B] shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Image */}
                  <div className="aspect-video md:aspect-[16/9] rounded-xl overflow-hidden">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
