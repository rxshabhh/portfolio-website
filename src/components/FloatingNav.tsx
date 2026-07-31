import { motion, animate } from "framer-motion";
import { User, Briefcase, Trophy, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../utils/cn";

export default function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = [
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Trophy },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
      className={cn(
        "absolute top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full flex gap-4 md:gap-8 items-center transition-all duration-300",
        scrolled ? "glass shadow-xl shadow-black/50" : "bg-transparent"
      )}
    >
      {tabs.map((tab) => (
        <a 
          key={tab.name} 
          href={tab.href}
          onClick={(e) => {
            e.preventDefault();
            const target = document.querySelector(tab.href) as HTMLElement;
            if (target) {
               const targetTop = target.getBoundingClientRect().top + window.scrollY;
               animate(window.scrollY, targetTop, {
                 duration: 1.5,
                 ease: "easeInOut",
                 onUpdate: (v) => window.scrollTo(0, v)
               });
            }
          }}
          className="flex items-center gap-2 text-primary/70 hover:text-accent transition-colors text-sm font-medium"
        >
          <tab.icon size={16} />
          <span className="hidden md:inline">{tab.name}</span>
        </a>
      ))}
    </motion.nav>
  );
}
