import { motion } from "framer-motion";
import { BookOpen, MapPin, Terminal, Code2, Database } from "lucide-react";

export default function AboutSection() {
  const skillCategories = [
    { name: "Languages", icon: Terminal, items: ["Python", "C++", "Java", "C", "JavaScript", "TypeScript"] },
    { name: "Frontend / UI", icon: Code2, items: ["React", "HTML/CSS", "TailwindCSS", "Framer Motion"] },
    { name: "Backend / Databases", icon: Database, items: ["Node.js", "Express", "FastAPI", "PostgreSQL", "MySQL", "MongoDB"] },
  ];

  return (
    <section id="about" className="min-h-screen py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono">
          <span className="text-accent">&lt;</span>About Me<span className="text-accent">/&gt;</span>
        </h2>
        <p className="text-secondary max-w-2xl text-lg leading-relaxed">
          Third-year Computer Science student with a strong foundation in object-oriented programming, algorithm design, and full-stack development. I prioritize performance, reliability, and robust testing in everything I build.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 relative items-start">
        
        {/* Left Column: Education & Achievements */}
        <div className="flex flex-col gap-8">
          {/* Education Highlight */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden group border border-white/10 w-full shadow-lg h-auto"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[40px]" />
            <h3 className="font-bold text-2xl text-primary mb-2">B.Tech Computer Science</h3>
            <div className="flex items-center gap-2 text-md text-accent font-mono mb-4">
              <MapPin size={16} />
              Vellore Institute of Technology | Chennai
            </div>
            <span className="text-xs font-mono text-secondary/80 bg-white/5 border border-white/5 py-1 px-3 rounded-full mb-6 inline-block">
              Jul 2024 - Present
            </span>
            <p className="text-sm text-secondary/70 leading-relaxed mt-2">
              Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, OS, Computer Networks, DBMS, Software Engineering.
            </p>
          </motion.div>

          {/* Achievements Highlight */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl border border-white/10 w-full relative overflow-hidden"
          >
            <h3 className="text-2xl font-bold flex items-center gap-3 mb-6">
               <BookOpen className="text-accent" /> Extra-Curriculars
            </h3>
            <div className="flex flex-col gap-4 text-secondary/80 font-medium">
               <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-accent"></div>
                  <p>Branch Rank 1 in ECSE (Migrated to CSE core)</p>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-accent"></div>
                  <p>Research and Development Lead at CSED, VIT Chennai</p>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Grouping & Stats */}
        <div className="flex flex-col gap-8">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <BookOpen className="text-accent" /> Technical Arsenal
          </h3>
          
          <div className="space-y-6">
            {skillCategories.map((cat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass p-6 rounded-2xl flex flex-col gap-4"
              >
                <h4 className="flex items-center gap-2 font-mono text-sm tracking-wide text-primary/80 uppercase">
                  <cat.icon size={16} className="text-accent"/> {cat.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map(item => (
                    <span key={item} className="text-xs font-medium px-3 py-1.5 rounded-md bg-white/5 border border-white/5 hover:border-accent/30 hover:bg-white/10 transition-colors cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
             <div className="glass p-6 rounded-2xl text-center hover:border-accent/30 transition-colors group">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-2 group-hover:from-accent group-hover:to-white transition-all">2+</div>
                <div className="text-sm font-mono text-secondary">Years Focus</div>
             </div>
             <div className="glass p-6 rounded-2xl text-center hover:border-accent/30 transition-colors group">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-2 group-hover:from-accent group-hover:to-white transition-all">10+</div>
                <div className="text-sm font-mono text-secondary">Projects</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
