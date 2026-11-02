"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  {
    label: "NUTRITION",
    headline: "Fuel built for athletes.",
    description:
      "Macro-friendly meals, athlete cafe, hydration and performance nutrition — all designed by sports nutrition experts.",
    items: ["Customized Meal Prep", "Race-Day Carb Loading", "Protein Shakes", "Electrolytes & Hydration"],
    images: [
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=700&q=80",
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=700&q=80",
    ],
  },
  {
    label: "SUPPLEMENTS",
    headline: "Performance compounds, precisely dosed.",
    description:
      "Evidence-based supplementation with protein, creatine, pre-workout formulas and electrolytes from trusted brands.",
    items: ["Whey & Plant Protein", "Creatine Monohydrate", "Pre-Workout", "Recovery Supplements"],
    images: [
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=700&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=700&q=80",
    ],
  },
  {
    label: "GEAR",
    headline: "Technical apparel for serious athletes.",
    description:
      "Running apparel, footwear, anti-blister socks, resistance bands and accessories chosen for performance, not fashion.",
    items: ["Technical Running Apparel", "Trail & Road Footwear", "Anti-Blister Socks", "Resistance Bands"],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=80",
      "https://images.unsplash.com/photo-1556906781-9a412961a28c?w=700&q=80",
    ],
  },
];

export default function AthleteLife() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="athlete-life" ref={ref} className="py-28 md:py-36 bg-[#F8F8F5]">
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
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#777]">Athlete Life</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.05] tracking-[-0.02em] text-[#171717] max-w-2xl"
          >
            A COMPLETE ECOSYSTEM FOR YOUR
            <br />
            <span className="text-[#777]">NEXT PERSONAL BEST.</span>
          </motion.h2>
        </div>

        {/* Categories */}
        <div className="space-y-20 md:space-y-28">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              {/* Text */}
              <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                <div className="text-[11px] font-bold tracking-[0.3em] text-[#C7F36B] uppercase mb-4">
                  {cat.label}
                </div>
                <h3 className="text-[clamp(1.3rem,2.5vw,1.8rem)] font-bold tracking-[-0.02em] text-[#171717] mb-4 leading-tight">
                  {cat.headline}
                </h3>
                <p className="text-[15px] text-[#555] leading-relaxed mb-8 max-w-sm">
                  {cat.description}
                </p>
                <ul className="space-y-2.5">
                  {cat.items.map((item, ii) => (
                    <li key={ii} className="flex items-center gap-3 text-[14px] text-[#444]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36B] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Images */}
              <div className={`grid grid-cols-2 gap-4 ${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
                {cat.images.map((img, ii) => (
                  <div
                    key={ii}
                    className={`rounded-xl overflow-hidden group ${ii === 0 ? "aspect-[3/4] mt-6" : "aspect-[3/4]"}`}
                  >
                    <img
                      src={img}
                      alt={cat.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
