"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Lightbulb, PenTool, BookOpen } from "lucide-react";

export default function About() {
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
      title: "Résolution de problèmes",
      description: "J'aime relever des défis complexes et concevoir des architectures élégantes pour y répondre de manière optimale.",
    },
    {
      icon: <Lightbulb size={32} className="text-secondary" />,
      title: "Créativité",
      description: "Chaque ligne de code est une opportunité de créer une expérience interactive unique, moderne et impactante.",
    },
    {
      icon: <PenTool size={32} className="text-accent" />,
      title: "Passion du développement",
      description: "Le développement n'est pas seulement un métier pour moi, c'est une véritable passion exercée au quotidien avec rigueur.",
    },
    {
      icon: <BookOpen size={32} className="text-pink-500" />,
      title: "Apprentissage continu",
      description: "Le web évolue vite. Je me forme en continu pour toujours tirer parti des dernières innovations de la stack moderne.",
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
            À propos de <span className="text-gradient">moi</span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg leading-relaxed font-inter">
            Développeur passionné par la création d'applications web modernes, performantes et scalables. 
            Mon approche combine une forte base en ingénierie logicielle avec un sens aigu du détail 
            visuel, afin d'offrir la meilleure expérience utilisateur possible.
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
