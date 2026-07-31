import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { cn } from "../utils/cn";

export default function MasonryProjects() {
  const projects = [
    {
      id: 1,
      title: "Ether Talent: ATS Resume Evaluator",
      description: "AI-driven applicant tracking system platform featuring deep NLP parsing, resume scoring algorithms, and automated feedback generation designed to optimize candidate evaluation processes.",
      tags: ["React", "FastAPI", "AI", "PostgreSQL"],
      category: "Full-Stack",
      link: "https://github.com/rxshabhh/ATS-Resume"
    },
    {
      id: 2,
      title: "EduGap AI",
      description: "Intelligent career roadmap generator analyzing user profiles to bridge skill gaps. Architected with a performant Node.js backend and intuitive React UI.",
      tags: ["React", "Node.js", "PostgreSQL"],
      category: "Full-Stack",
      link: "https://github.com/rxshabhh/Ideathon-Hackathon"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <h2 className="text-3xl md:text-5xl font-bold font-mono">Selected Work<span className="text-accent">.</span></h2>
          <p className="text-secondary mt-4 max-w-xl">Curated projects showcasing backend scalability and frontend finesse.</p>
        </div>
      </motion.div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {projects.map((project, i) => (
             <motion.div
               layout
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.95 }}
               transition={{ duration: 0.4 }}
               key={project.id}
               className={cn("group rounded-[2rem] p-8 glass border border-white/10 hover:border-accent/40 hover:bg-white/5 transition-all flex flex-col", i === 0 && "md:col-span-2")}
             >
               <h3 className="text-3xl font-bold text-primary group-hover:text-accent transition-colors mb-4">{project.title}</h3>
               <p className="text-secondary/90 text-base md:text-lg leading-relaxed mb-8 flex-1">{project.description}</p>
               
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 bg-accent/10 text-accent rounded-full border border-accent/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-colors bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full">
                    Repository <ExternalLink size={16} />
                  </a>
               </div>
             </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
