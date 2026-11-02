"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { recoveryServices } from "@/data/content";

const recoveryImages = [
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
  "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800&q=80",
  "https://images.unsplash.com/photo-1626170621939-20741f8cdbd8?w=800&q=80",
  "https://images.unsplash.com/photo-1591291621164-2c6367723315?w=800&q=80",
];

export default function RecoverySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="recovery" ref={ref} className="py-28 md:py-36 bg-[#151515]">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-6 h-px bg-[#C7F36B]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/40">
                Recovery & Rehabilitation
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white max-w-xl"
            >
              PERFORMANCE DOESN&apos;T END
              <br />
              <span className="text-white/40">WHEN THE WORKOUT DOES.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[14px] text-white/50 max-w-xs leading-relaxed"
          >
            World-class recovery protocols to accelerate adaptation and protect the athlete.
          </motion.p>
        </div>

        {/* Image grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14"
        >
          {recoveryImages.map((img, i) => (
            <div
              key={i}
              className={`rounded-xl overflow-hidden ${i === 0 ? "aspect-[3/4]" : "aspect-[4/5]"} group`}
            >
              <img
                src={img}
                alt="Recovery"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8 rounded-2xl overflow-hidden">
          {recoveryServices.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#1E1E1E] p-8 hover:bg-[#242424] transition-colors duration-200 group"
            >
              <div className="text-2xl mb-4 opacity-80">{service.icon}</div>
              <h3 className="text-[14px] font-bold text-white tracking-[-0.01em] mb-3 group-hover:text-[#C7F36B] transition-colors">
                {service.name}
              </h3>
              <p className="text-[13px] text-white/50 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
