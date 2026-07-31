import { Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function MinimalContact() {
  return (
    <footer id="contact" className="py-16 px-6 md:px-12 max-w-7xl mx-auto mt-12 border-t border-white/5 relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 relative z-10 text-center md:text-left">
        <div className="max-w-md flex flex-col md:inline-flex md:items-start items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 tracking-tight font-sans"
          >
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">extraordinary.</span>
          </motion.h2>

          <a href="mailto:rishabh.sinha0709@gmail.com" className="inline-flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-full font-bold hover:bg-white transition-colors shadow-xl shadow-white/5 text-sm">
            <Mail size={16} /> rishabh.sinha0709@gmail.com
          </a>
        </div>

        <div className="flex flex-col gap-4 w-full md:w-auto mt-4 md:mt-0 items-center md:items-end">
          <h4 className="font-mono text-xs tracking-widest text-secondary/60 uppercase">Connect</h4>
          {["LinkedIn", "GitHub"].map((social, i) => {
            const links: Record<string, string> = {
              "LinkedIn": "https://www.linkedin.com/in/rishabh-sinha-581168320/",
              "GitHub": "https://github.com/rxshabhh",
            };
            return (
              <motion.a 
                key={social}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                href={links[social]} 
                target="_blank"
                rel="noreferrer"
                className="text-lg md:text-xl font-bold flex items-center justify-between group md:justify-end gap-2 border-b border-white/5 pb-2 hover:border-accent/40 w-full md:w-48 transition-colors text-primary"
              >
                <div className="md:order-2">{social}</div>
                <ArrowUpRight className="md:order-1 group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all opacity-50 group-hover:opacity-100" />
              </motion.a>
            )
          })}
        </div>
      </div>

      <div className="mt-16 pt-8 text-center text-xs text-secondary/60 font-mono relative z-10 w-full border-t border-white/5">
        &copy; {new Date().getFullYear()} Designed and Developed by Rishabh Sinha. 
      </div>
    </footer>
  );
}
