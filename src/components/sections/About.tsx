"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Lightbulb, PenTool, BookOpen } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const items = [
    {
      icon: <BrainCircuit size={32} className="text-primary" />,
      title: t("about.items.problemSolving.title"),
      description: t("about.items.problemSolving.desc"),
    },
    {
      icon: <Lightbulb size={32} className="text-secondary" />,
      title: t("about.items.creativity.title"),
      description: t("about.items.creativity.desc"),
    },
    {
      icon: <PenTool size={32} className="text-accent" />,
      title: t("about.items.passion.title"),
      description: t("about.items.passion.desc"),
    },
    {
      icon: <BookOpen size={32} className="text-pink-500" />,
      title: t("about.items.learning.title"),
      description: t("about.items.learning.desc"),
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-space font-bold mb-6">
            {t("about.title1")} <span className="text-gradient">{t("about.title2")}</span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg leading-relaxed font-inter">
            {t("about.description")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
              <div className="mb-6 p-4 bg-white/5 rounded-xl inline-block">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold font-space mb-3">{item.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
