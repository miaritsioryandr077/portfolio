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

export default function Services() {
  const services = [
    {
      icon: <Globe2 size={32} className="text-primary" />,
      title: "Développement Web Fullstack",
      description: "Création d'applications web complètes, de l'interface utilisateur à l'architecture de la base de données, avec les frameworks modernes."
    },
    {
      icon: <Database size={32} className="text-secondary" />,
      title: "Création API REST",
      description: "Conception et développement d'APIs robustes, sécurisées et documentées pour alimenter vos applications."
    },
    {
      icon: <Code2 size={32} className="text-accent" />,
      title: "Développement Front-end React / Next.js",
      description: "Intégration d'interfaces utilisateur dynamiques, réactives et optimisées pour le SEO avec la puissance de Next.js."
    },
    {
      icon: <Server size={32} className="text-pink-500" />,
      title: "Développement Back-end Node.js / Laravel",
      description: "Développement d'architectures serveur backend scalables, sécurisées et capables de gérer des flux de données importants."
    },
    {
      icon: <Palette size={32} className="text-purple-400" />,
      title: "Intégration UI/UX moderne",
      description: "Traduction minutieuse de maquettes en code parfait, avec intégration d'animations fluides et du glassmorphism."
    },
    {
      icon: <Gauge size={32} className="text-green-400" />,
      title: "Optimisation Performance",
      description: "Audit et optimisation du code existant, du temps de chargement, du SEO technique et de l'accessibilité."
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
            <span className="text-secondary font-space tracking-widest text-sm uppercase">Services</span>
            <div className="h-px w-12 bg-secondary"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-space font-bold mb-6">
            Ce que je peux <span className="text-gradient">faire pour vous</span>
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
