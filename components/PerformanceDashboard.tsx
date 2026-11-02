"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { mockDashboardData } from "@/data/content";
import { TrendingUp, Award, Timer, Activity } from "lucide-react";

const tabs = ["Overview", "Lap Times", "Leaderboard"] as const;
type Tab = (typeof tabs)[number];

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function PerformanceDashboard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const { athlete, stats, recentLaps, leaderboard, weeklyProgress } = mockDashboardData;
  const maxBar = Math.max(...weeklyProgress);

  return (
    <section id="dashboard" ref={ref} className="py-28 md:py-36 bg-[#FFFFFF]">
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
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#777]">
              Performance Dashboard · Demo Data
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.05] tracking-[-0.02em] text-[#171717] max-w-xl"
          >
            EVERY LAP.
            <br />
            EVERY SPLIT.
            <br />
            <span className="text-[#777]">EVERY SECOND.</span>
          </motion.h2>
        </div>

        {/* Dashboard card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#F8F8F5] border border-black/8 rounded-2xl overflow-hidden"
        >
          {/* Dashboard header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-8 py-6 border-b border-black/8 gap-4">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-[#171717] flex items-center justify-center text-white text-[14px] font-bold">
                {athlete.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="text-[16px] font-bold text-[#171717]">{athlete.name}</div>
                <div className="text-[12px] text-[#777]">
                  {athlete.tier} · Rank #{athlete.rank} of {athlete.totalAthletes}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#C7F36B]/20 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8DB83A] animate-pulse" />
              <span className="text-[11px] font-semibold text-[#5a7a1a] tracking-[0.08em]">DEMO DATA</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-0 px-8 border-b border-black/8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative py-4 px-5 text-[13px] font-medium transition-colors duration-200 ${
                  activeTab === tab ? "text-[#171717]" : "text-[#777] hover:text-[#444]"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.span
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#171717]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="p-8">
            {activeTab === "Overview" && (
              <div className="space-y-8">
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: Activity, label: "Total Distance", value: stats.totalDistance },
                    { icon: Timer, label: "Personal Best", value: stats.personalBest },
                    { icon: TrendingUp, label: "Sessions", value: stats.sessionsCompleted },
                    { icon: Award, label: "Weekly Load", value: stats.weeklyLoad },
                  ].map((s, i) => (
                    <div key={i} className="bg-white rounded-xl p-5 border border-black/6">
                      <s.icon size={18} className="text-[#777] mb-3" />
                      <div className="text-[1.4rem] font-bold text-[#171717]">{s.value}</div>
                      <div className="text-[12px] text-[#777] mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Weekly chart */}
                <div className="bg-white rounded-xl p-6 border border-black/6">
                  <div className="text-[13px] font-semibold text-[#171717] mb-6">Weekly Distance (km)</div>
                  <div className="flex items-end gap-3 h-28">
                    {weeklyProgress.map((val, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={isInView ? { height: `${(val / maxBar) * 100}%` } : {}}
                          transition={{ duration: 0.6, delay: 0.4 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                          className={`w-full rounded-md ${i === 5 ? "bg-[#C7F36B]" : "bg-[#E8E8E5]"}`}
                          style={{ minHeight: 4 }}
                        />
                        <span className="text-[10px] text-[#aaa]">{weekDays[i]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Lap Times" && (
              <div className="space-y-3">
                <div className="grid grid-cols-4 gap-4 px-4 pb-2">
                  {["Lap", "Time", "Pace", "Status"].map((h) => (
                    <span key={h} className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#aaa]">
                      {h}
                    </span>
                  ))}
                </div>
                {recentLaps.map((lap, i) => (
                  <motion.div
                    key={lap.lap}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="grid grid-cols-4 gap-4 bg-white rounded-xl p-4 border border-black/6 items-center"
                  >
                    <span className="text-[14px] font-bold text-[#171717]">Lap {lap.lap}</span>
                    <span className="text-[14px] font-semibold text-[#171717] tabular-nums">{lap.time}</span>
                    <span className="text-[13px] text-[#777] tabular-nums">{lap.pace}</span>
                    <span
                      className={`text-[11px] font-semibold px-3 py-1 rounded-full w-fit ${
                        lap.status === "PR"
                          ? "bg-[#C7F36B]/30 text-[#5a7a1a]"
                          : lap.status === "Good"
                          ? "bg-blue-50 text-blue-600"
                          : "bg-black/5 text-[#777]"
                      }`}
                    >
                      {lap.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === "Leaderboard" && (
              <div className="space-y-2">
                <div className="grid grid-cols-[auto,1fr,auto,auto] gap-4 px-4 pb-2">
                  {["#", "Athlete", "Pace", "Score"].map((h) => (
                    <span key={h} className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#aaa]">
                      {h}
                    </span>
                  ))}
                </div>
                {leaderboard.map((entry, i) => (
                  <motion.div
                    key={entry.rank}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`grid grid-cols-[auto,1fr,auto,auto] gap-4 rounded-xl p-4 border items-center ${
                      entry.name === athlete.name
                        ? "bg-[#C7F36B]/15 border-[#C7F36B]/40"
                        : "bg-white border-black/6"
                    }`}
                  >
                    <span
                      className={`text-[14px] font-bold w-6 ${
                        entry.rank <= 3 ? "text-[#171717]" : "text-[#aaa]"
                      }`}
                    >
                      {entry.rank}
                    </span>
                    <span className={`text-[14px] font-semibold ${entry.name === athlete.name ? "text-[#171717]" : "text-[#333]"}`}>
                      {entry.name}
                      {entry.name === athlete.name && (
                        <span className="ml-2 text-[10px] font-bold text-[#5a7a1a]">YOU</span>
                      )}
                    </span>
                    <span className="text-[13px] text-[#777] tabular-nums">{entry.pace}</span>
                    <span className="text-[13px] font-semibold text-[#171717] tabular-nums">{entry.score}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
