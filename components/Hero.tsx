"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: EASE },
  }),
};

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const scrollToNext = () => {
    const el = document.querySelector("#brand-story");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#151515] overflow-hidden flex flex-col">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1800&q=90')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#151515]/70 via-[#151515]/40 to-[#151515]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#151515]/60 to-transparent" />
      </motion.div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8, ease: EASE }}
        className="absolute top-24 right-8 md:right-16 z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-5 text-white hidden md:block"
      >
        <div className="text-[28px] font-bold leading-none">5,500</div>
        <div className="text-[11px] tracking-[0.15em] uppercase text-white/60 mt-1">Sq. Ft.</div>
        <div className="h-px bg-white/20 my-3" />
        <div className="text-[10px] tracking-[0.12em] uppercase text-white/60 max-w-[120px] leading-relaxed">
          360° Athlete Performance Ecosystem
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex-1 flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-16 max-w-7xl mx-auto w-full"
      >
        {/* Eyebrow */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-6 h-px bg-[#C7F36B]" />
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/60">
            PUNE · 5,500 SQ. FT. · HYBRID PERFORMANCE CENTER
          </span>
        </motion.div>

        {/* Brand name — large highlighted */}
        <motion.div
          custom={0.5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <span className="text-[clamp(2.2rem,5.5vw,5rem)] font-black tracking-[0.12em] leading-none">
            <span className="text-white/20">BAYO</span>
            <span className="inline-block w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#C7F36B] mx-1 mb-1 align-middle" />
            <span className="text-[#C7F36B]">MECANIX</span>
          </span>
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden">
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[clamp(2.8rem,7vw,6.5rem)] font-bold leading-[0.95] tracking-[-0.02em] text-white max-w-4xl"
          >
            BUILT FOR
            <br />
            THE RACE.
            <br />
            <span className="text-white/40">ENGINEERED</span>
            <br />
            FOR THE ATHLETE.
          </motion.h1>
        </div>

        {/* Description + CTAs row */}
        <div className="mt-10 flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[16px] text-white/60 max-w-sm leading-relaxed"
          >
            Not just another gym. A complete performance ecosystem designed for athletes who push beyond ordinary limits.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-4"
          >
            <button
              onClick={() => document.querySelector("#equipment")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3.5 bg-[#C7F36B] text-[#151515] text-[13px] font-bold tracking-[0.08em] uppercase rounded-full hover:bg-white transition-all duration-200 hover:scale-[1.02]"
            >
              Explore the Facility
            </button>
            <button
              onClick={() => document.querySelector("#performance")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3.5 border border-white/30 text-white text-[13px] font-semibold tracking-[0.08em] uppercase rounded-full hover:bg-white/10 transition-all duration-200"
            >
              Discover Equipment
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
