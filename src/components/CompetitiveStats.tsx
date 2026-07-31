import { motion } from "framer-motion";
import { ExternalLink, Trophy } from "lucide-react";

export default function CompetitiveStats() {
  const profiles = [
    { 
      platform: "Codeforces", 
      handle: "not_defined", 
      rating: 1247, 
      color: "#10B981", 
      points: "10,90 20,60 30,85 40,30 50,25 60,40 70,10 80,15 90,20",
      link: "https://codeforces.com/profile/not_defined"
    },
    { 
      platform: "Codechef", 
      handle: "not_defined_0", 
      rating: 1531, 
      color: "#3B82F6", 
      points: "10,95 20,85 30,75 40,65 50,55 60,30 70,45 80,50 90,20",
      link: "https://www.codechef.com/users/not_defined_0"
    },
    { 
      platform: "AtCoder", 
      handle: "rishabhSinha", 
      rating: 508, 
      color: "#A52A2A", 
      points: "10,95 20,90 30,80 40,70 50,75 60,45 70,55 80,20 90,10",
      kyu: "8 Kyu",
      link: "https://atcoder.jp/users/rishabhSinha"
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 flex flex-col md:flex-row justify-between md:items-end gap-6"
      >
        <div>
          <h2 className="text-3xl md:text-5xl font-bold font-mono">
             <Trophy className="inline-block mr-4 text-accent" size={40} />
             Competitive Programming
          </h2>
          <p className="text-secondary mt-4 max-w-xl">
             Consistent problem solving and algorithmic mastery across multiple judges. Highlighting official rating trajectories.
          </p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile, index) => (
          <motion.a 
            href={profile.link}
            target="_blank"
            rel="noreferrer"
            key={profile.platform}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden group block hover:border-white/20 transition-all border border-white/5"
          >
             <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <h3 className="text-xl font-bold font-mono text-primary flex items-center gap-2">
                     {profile.platform}
                     <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-accent -translate-y-1" />
                  </h3>
                  <div className="text-secondary/70 text-sm mt-1">{profile.handle}</div>
                </div>
                <div className="text-right">
                   <div className="text-2xl font-black" style={{ color: profile.color }}>
                      {profile.rating}
                   </div>
                   {profile.kyu && <div className="text-xs font-bold font-mono mt-1 text-orange-400">{profile.kyu}</div>}
                   <div className="text-xs text-secondary uppercase tracking-widest mt-1">Rating</div>
                </div>
             </div>

             {/* Graph Animation */}
             <div className="h-32 w-full mt-4 flex items-end relative border-b border-l border-white/10 pt-2 pl-2">
                 {/* Grid lines background */}
                 <div className="absolute inset-0 flex flex-col justify-between pt-2">
                    <div className="border-t border-white/5 w-full h-[1px]"></div>
                    <div className="border-t border-white/5 w-full h-[1px]"></div>
                    <div className="border-t border-white/5 w-full h-[1px]"></div>
                 </div>

                 <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="overflow-visible absolute inset-0 pl-2">
                    <motion.polyline
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: false, margin: "-10px" }}
                      transition={{ duration: 2.2, ease: "anticipate", delay: index * 0.1 }}
                      fill="none"
                      stroke={profile.color}
                      strokeWidth="2"
                      points={profile.points}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    
                    {/* Data Points */}
                    {profile.points.split(" ").map((point, i) => {
                       const [x, y] = point.split(",");
                       return (
                          <motion.circle 
                             key={i}
                             initial={{ scale: 0, opacity: 0 }}
                             whileInView={{ scale: 1, opacity: 1 }}
                             viewport={{ once: false }}
                             transition={{ type: "spring", stiffness: 100, delay: index * 0.1 + (i * 0.1) }}
                             cx={x} cy={y} r="2" fill={profile.color} 
                          />
                       )
                    })}
                 </svg>
                 
                 {/* Fade Overlay left/right for style */}
                 <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
             </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
