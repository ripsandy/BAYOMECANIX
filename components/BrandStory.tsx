"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "5,500", label: "Square Feet" },
  { value: "360°", label: "Athlete Ecosystem" },
  { value: "12+", label: "Sports Disciplines" },
];

export default function BrandStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="brand-story" ref={ref} className="py-28 md:py-36 bg-[#F8F8F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-6 h-px bg-[#C7F36B]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#777]">
                The BAYOMECANIX Philosophy
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.02em] text-[#171717] mb-8"
            >
              REGULAR GYMS
              <br />
              TRAIN BODIES.
              <br />
              <span className="text-[#777]">WE PREPARE</span>
              <br />
              ATHLETES.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[16px] text-[#555] leading-relaxed mb-10 max-w-md"
            >
              Whether you&apos;re preparing for HYROX, Devil&apos;s Circuit, Sherox, The Yoddha Race, HyFit Games,
              marathons, triathlons, swimming, cycling or mountain trekking — BAYOMECANIX provides an environment
              built around real-world performance.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-10"
            >
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="text-[2rem] font-bold text-[#171717] leading-none">{s.value}</div>
                  <div className="text-[12px] text-[#777] tracking-[0.1em] uppercase mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=85"
              alt="Athlete training at BAYOMECANIX"
              className="w-full h-full object-cover"
            />
            {/* Badge overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#151515]/90 backdrop-blur-sm rounded-xl p-5">
              <div className="text-[11px] font-semibold tracking-[0.2em] text-[#C7F36B] uppercase mb-1">
                Train Real. Perform Peak. Recover Faster.
              </div>
              <div className="text-[13px] text-white/70 leading-relaxed">
                Pune&apos;s first 360° hybrid performance & athlete simulation center.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
