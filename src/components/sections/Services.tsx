"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Server, 
  Palette, 
  Globe2, 
  Database, 
  Gauge 
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  const services = [
    {
      icon: <Globe2 size={32} className="text-primary" />,
      title: t("services.items.s1.title"),
      description: t("services.items.s1.desc")
    },
    {
      icon: <Database size={32} className="text-secondary" />,
      title: t("services.items.s2.title"),
      description: t("services.items.s2.desc")
    },
    {
      icon: <Code2 size={32} className="text-accent" />,
      title: t("services.items.s3.title"),
      description: t("services.items.s3.desc")
    },
    {
      icon: <Server size={32} className="text-pink-500" />,
      title: t("services.items.s4.title"),
      description: t("services.items.s4.desc")
    },
    {
      icon: <Palette size={32} className="text-purple-400" />,
      title: t("services.items.s5.title"),
      description: t("services.items.s5.desc")
    },
    {
      icon: <Gauge size={32} className="text-green-400" />,
      title: t("services.items.s6.title"),
      description: t("services.items.s6.desc")
    }
  ];

  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-4 mb-4 justify-center">
            <div className="h-px w-12 bg-secondary"></div>
            <span className="text-secondary font-space tracking-widest text-sm uppercase">{t("services.subtitle")}</span>
            <div className="h-px w-12 bg-secondary"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-space font-bold mb-6">
            {t("services.title1")} <span className="text-gradient">{t("services.title2")}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100%] transition-transform duration-500 group-hover:scale-150 group-hover:bg-white/10" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center mb-6 shadow-inner group-hover:border-white/30 transition-colors">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold font-space text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
