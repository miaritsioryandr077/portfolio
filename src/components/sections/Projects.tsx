"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Système de gestion centralisée des personnels de l'Etat",
      category: "Application Fullstack",
      description: "Conception et réalisation d'une application web pour la gestion centralisée des personnels de l'Etat. (Projet de stage)",
      image: "https://images.unsplash.com/photo-1605433975283-263394f3514e?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stack: ["React.js", "Tailwind CSS", "PHP", "CodeIgniter", "PostgreSQL"],
      github: "https://github.com/miaritsioryandr077",
      demo: "#",
    },
    {
      title: "Application de gestion de commandes de restaurant",
      category: "Application Fullstack",
      description: "Développement d'une application permettant la gestion des commandes de nourriture et le suivi des opérations du restaurant.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stack: ["Next.js", "Tailwind CSS", "Node.js", "Nest.js", "MongoDB"],
      github: "https://github.com/miaritsioryandr077",
      demo: "#",
    },
    {
      title: "Application de gestion de stock produits",
      category: "Application Fullstack",
      description: "Création d'une application permettant l'ajout de produits, l'affichage de la liste et la visualisation d'un bilan (valeurs min., max., total) sous forme de graphique circulaire.",
      image: "https://images.unsplash.com/photo-1648824572347-517357c9c44e?q=80&w=1212&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL"],
      github: "https://github.com/miaritsioryandr077",
      demo: "#",
    },
    {
      title: "Application de gestion de station-service",
      category: "Application Fullstack",
      description: "Développement d'un système de gestion de carburants, services clients et entretiens. Fonctions clés: opérations CRUD, recherche de clients, génération de reçus PDF, alertes de stock bas et statistiques (recettes, fréquentation).",
      image: "https://images.unsplash.com/photo-1567777176186-dfa735f1fe20?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stack: ["Laravel", "Bootstrap", "MySQL"],
      github: "https://github.com/miaritsioryandr077",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-primary"></div>
            <span className="text-primary font-space tracking-widest text-sm uppercase">Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-space font-bold">
            Mes Derniers <span className="text-gradient">Projets</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group glass rounded-2xl overflow-hidden"
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback en cas d'erreur de chargement
                    (e.target as HTMLImageElement).src = '/placeholder-image.jpg';
                  }}
                />
                
                {/* Floating links on image */}
                <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors hover:-translate-y-1"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:bg-secondary transition-colors hover:-translate-y-1"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              
              <div className="p-6 sm:p-8">
                <span className="text-sm font-medium text-accent mb-2 display-block">
                  {project.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-space text-white mb-3 mt-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <motion.a
            href="https://github.com/miaritsioryandr077"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 glass px-8 py-4 rounded-xl font-medium transition-colors hover:bg-white/10"
          >
            <FaGithub size={20} />
            Voir plus sur GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
}