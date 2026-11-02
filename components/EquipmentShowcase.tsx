"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { equipment } from "@/data/content";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function EquipmentShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p === 0 ? equipment.length - 1 : p - 1));
  const next = () => setActive((p) => (p === equipment.length - 1 ? 0 : p + 1));

  return (
    <section id="equipment" ref={ref} className="py-28 md:py-36 bg-[#F8F8F5]">
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
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#777]">Equipment</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.05] tracking-[-0.02em] text-[#171717]"
            >
              NOT YOUR ORDINARY
              <br />
              <span className="text-[#777]">GYM EQUIPMENT.</span>
            </motion.h2>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center hover:bg-[#171717] hover:text-white hover:border-[#171717] transition-all duration-200"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center hover:bg-[#171717] hover:text-white hover:border-[#171717] transition-all duration-200"
            >
              <ArrowRight size={16} />
            </button>
            <span className="text-[13px] text-[#777] ml-2">
              {String(active + 1).padStart(2, "0")} / {String(equipment.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Main showcase */}
        <div className="grid md:grid-cols-[1fr,1.4fr] gap-8 md:gap-12 items-stretch">
          {/* Tab list */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {equipment.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActive(i)}
                className={`shrink-0 md:shrink text-left px-5 py-4 rounded-xl border transition-all duration-200 ${
                  active === i
                    ? "bg-[#171717] border-[#171717] text-white"
                    : "border-black/10 text-[#555] hover:border-black/25 hover:bg-white"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`text-[11px] font-bold tracking-[0.2em] shrink-0 ${
                      active === i ? "text-[#C7F36B]" : "text-[#aaa]"
                    }`}
                  >
                    {String(item.id).padStart(2, "0")}
                  </span>
                  <span className="text-[13px] font-semibold tracking-[-0.01em] md:line-clamp-1">
                    {item.name}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Image + detail */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[16/10] rounded-2xl overflow-hidden"
              >
                <img
                  src={equipment[active].image}
                  alt={equipment[active].name}
                  className="w-full h-full object-cover"
                />
                {/* Overlay info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#151515]/90 to-transparent p-8">
                  <div className="text-[11px] font-bold tracking-[0.2em] text-[#C7F36B] uppercase mb-2">
                    {String(equipment[active].id).padStart(2, "0")} — Equipment
                  </div>
                  <h3 className="text-[1.4rem] font-bold text-white mb-2 leading-tight">
                    {equipment[active].name}
                  </h3>
                  <p className="text-[14px] text-white/65 leading-relaxed max-w-lg">
                    {equipment[active].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
