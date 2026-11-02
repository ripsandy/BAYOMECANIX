"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="final-cta" ref={ref} className="py-32 md:py-44 bg-[#F8F8F5] relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #C7F36B, transparent)" }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #171717, transparent)" }}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <span className="w-6 h-px bg-[#C7F36B]" />
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#777]">
            Your Journey Starts Here
          </span>
          <span className="w-6 h-px bg-[#C7F36B]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.95] tracking-[-0.03em] text-[#171717] mb-8"
        >
          YOUR NEXT
          <br />
          FINISH LINE
          <br />
          <span className="text-[#C7F36B]">STARTS HERE.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-[17px] text-[#555] leading-relaxed mb-14 max-w-lg mx-auto"
        >
          Train with purpose. Prepare with precision. Recover intelligently. Perform beyond limits.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-4"
        >
          <button className="px-12 py-5 bg-[#171717] text-[#F8F8F5] text-[14px] font-bold tracking-[0.1em] uppercase rounded-full hover:bg-[#333] hover:scale-[1.02] transition-all duration-200 shadow-lg">
            Explore BAYOMECANIX
          </button>
          <p className="text-[13px] text-[#aaa] tracking-[0.08em]">
            Pune&apos;s Ultimate 360° Athlete Destination
          </p>
        </motion.div>
      </div>
    </section>
  );
}
