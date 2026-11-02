"use client";

const footerLinks = {
  Performance: ["Race Simulation", "Equipment", "VO₂ Max Testing", "Biomechanics Lab"],
  Recovery: ["Ice Bath", "Infrared Sauna", "Red Light Therapy", "Physiotherapy"],
  Community: ["Athlete Dashboard", "Leaderboards", "Time Trials", "Coaching"],
  "Athlete Store": ["Nutrition Cafe", "Supplements", "Gear & Apparel", "Accessories"],
};

export default function Footer() {
  return (
    <footer className="bg-[#151515] text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-12 pb-12 border-b border-white/8">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="text-[11px] font-bold tracking-[0.25em] text-white mb-4">
              BAYO
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C7F36B] mx-0.5 mb-0.5 align-middle" />
              MECANIX
            </div>
            <p className="text-[13px] text-white/40 leading-relaxed mb-6">
              Pune&apos;s First 360° Hybrid Performance & Athlete Simulation Center. 5,500 sq. ft. built for athletes who
              push beyond ordinary limits.
            </p>
            <div className="text-[11px] font-semibold tracking-[0.2em] text-[#C7F36B] uppercase">
              TRAIN REAL. PERFORM PEAK. RECOVER FASTER.
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 mb-4">
                  {category}
                </div>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <span className="text-[13px] text-white/50 hover:text-white/80 transition-colors duration-200 cursor-default">
                        {link}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social placeholders */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8">
          <div className="flex items-center gap-5">
            {["Instagram", "Strava", "YouTube", "X"].map((s) => (
              <span
                key={s}
                className="text-[12px] text-white/30 hover:text-white/60 transition-colors duration-200 cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="text-[12px] text-white/25">
            © 2025 BAYOMECANIX. All rights reserved. Pune, India.
          </div>
        </div>
      </div>
    </footer>
  );
}
