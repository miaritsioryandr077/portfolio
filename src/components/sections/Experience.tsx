"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();
  const experiences = [
    {
      title: t("experience.items.e1.title"),
      company: t("experience.items.e1.company"),
      period: t("experience.items.e1.period"),
      description: t("experience.items.e1.desc"),
      icon: <GraduationCap size={20} />,
      type: "education"
    },
    {
      title: t("experience.items.e2.title"),
      company: t("experience.items.e2.company"),
      period: t("experience.items.e2.period"),
      description: t("experience.items.e2.desc"),
      icon: <Briefcase size={20} />,
      type: "work"
    },
    {
      title: t("experience.items.e3.title"),
      company: t("experience.items.e3.company"),
      period: t("experience.items.e3.period"),
      description: t("experience.items.e3.desc"),
      icon: <GraduationCap size={20} />,
      type: "education"
    },
    {
      title: t("experience.items.e4.title"),
      company: t("experience.items.e4.company"),
      period: t("experience.items.e4.period"),
      description: t("experience.items.e4.desc"),
      icon: <GraduationCap size={20} />,
      type: "education"
    },
    {
      title: t("experience.items.e5.title"),
      company: t("experience.items.e5.company"),
      period: t("experience.items.e5.period"),
      description: t("experience.items.e5.desc"),
      icon: <GraduationCap size={20} />,
      type: "education"
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-white/5 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-space font-bold mb-6">
            {t("experience.title1")} <span className="text-gradient">{t("experience.title2")}</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-black/60 border border-primary/50 text-primary flex items-center justify-center transform -translate-x-[18px] md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                  {exp.icon}
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12 text-left">
                  <div className={`glass p-6 rounded-2xl relative group ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold font-space text-white mb-1">
                      {exp.title}
                    </h3>
                    <h4 className="text-foreground/70 font-medium text-sm mb-4">
                      {exp.company}
                    </h4>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {/* Hover connector line */}
                    <div className={`hidden md:block absolute top-1/2 w-8 h-px bg-primary/50 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-12 ${
                      idx % 2 === 0 ? "right-full mr-2" : "left-full ml-2"
                    }`} style={{ transform: "translateY(-50%)" }}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
