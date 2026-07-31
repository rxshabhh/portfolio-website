import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, lazy, Suspense } from "react";
import { ArrowRight, Download } from "lucide-react";

const CharacterModel = lazy(() => import("./Character"));

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["SOFTWARE ENGINEER", "COMPETITIVE PROGRAMMER"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen pt-24 px-6 md:px-12 flex flex-col md:flex-row-reverse items-center justify-between relative overflow-hidden" id="home">
      
      {/* Left Core Introduction */}
      <div className="w-full md:w-1/2 flex flex-col gap-6 z-10 md:pl-8">
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-accent font-mono text-sm md:text-base uppercase tracking-wider"
        >
          A Passionate
        </motion.p>

        <div className="h-[120px] md:h-[180px] relative flex items-center">
          <AnimatePresence mode="popLayout">
            <h1 className="text-4xl md:text-7xl font-bold text-primary tracking-tighter w-full">
              {roles[roleIndex].split(" ").map((word, i) => (
                <motion.span
                  key={`${roleIndex}-${i}`}
                  initial={{ opacity: 0, y: 40, rotateX: -90, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -40, rotateX: 90, filter: "blur(10px)" }}
                  transition={{ duration: 0.7, delay: i * 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
                  className="inline-block mr-3 md:mr-4 origin-bottom"
                  style={{ lineHeight: 1.1, backfaceVisibility: "hidden" }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-secondary max-w-xl text-lg leading-relaxed mt-4"
        >
          Building robust, scalable applications and designing elegant algorithmic solutions. Welcome to my digital portfolio.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.7 }}
           className="flex gap-4 mt-6"
        >
          <a href="#projects" className="group rounded-full bg-accent text-white px-8 py-3 font-semibold flex items-center gap-2 hover:bg-accent/80 transition-all shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]">
            Explore Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="https://drive.google.com/file/d/1EOmRQaJnI6WTqU4jQl9Xql3GZtWTbblk/view?usp=sharing" target="_blank" rel="noreferrer" className="rounded-full bg-surfaceGlow border border-white/5 text-primary px-8 py-3 font-semibold flex items-center gap-2 hover:bg-white/5 transition-colors">
            Resume
            <Download size={18} />
          </a>
        </motion.div>
      </div>

      {/* Right Interactive 3D Character Background */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative mt-12 md:mt-0 flex items-center justify-center opacity-90 z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-accent/10 rounded-full blur-[100px] md:blur-[120px] mix-blend-screen pointer-events-none"></div>
         <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-purple-600/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>
         
         <div className="w-full h-full absolute inset-0">
            <Suspense fallback={<div />}>
               <CharacterModel />
            </Suspense>
         </div>
      </div>
      
    </section>
  );
}
