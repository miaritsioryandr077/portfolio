"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const titles = [
    "Développeur Full-Stack Web",
    "Étudiant en Génie Logiciel et Base de Données",
    "Concepteur d'Applications Web Modernes",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // Écriture
      if (displayedText.length < currentTitle.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
          setSpeed(80 + Math.random() * 40);
        }, speed);
      } else {
        // Pause avant effacement
        timer = setTimeout(() => {
          setIsDeleting(true);
          setSpeed(40);
        }, 2500);
      }
    } else {
      // Effacement
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
          setSpeed(30);
        }, speed);
      } else {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
        setSpeed(80);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, titleIndex, titles, speed]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 px-4"
    >
      {/* Background Animated Gradient Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[120px] mix-blend-screen"
        />

        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-secondary/20 rounded-full blur-[100px] mix-blend-screen"
        />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-accent/20 rounded-full blur-[90px] mix-blend-screen"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-3 mb-6 px-5 py-2 rounded-full glass text-sm font-medium text-primary tracking-wide shadow-lg shadow-primary/10 border border-white/10"
        >
          <span className="relative flex items-center justify-center w-3 h-3">
            <span className="absolute inline-flex h-3 w-3 rounded-full bg-primary opacity-75 animate-ping"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary"></span>
          </span>
          <span>Disponible pour de nouvelles opportunités</span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.1,
          }}
          className="mb-5"
        >
          <span className="text-5xl uppercase tracking-[0.3em] text-foreground/50 font-medium">
            ANDRIAMBOLOLONA
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-space font-bold tracking-tight leading-tight mt-2">
            Irina <span className="text-gradient">Miaritsiory</span>
          </h1>
        </motion.div>

        {/* Typewriter Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
          className="relative mb-8"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-primary/40" />
            <h2 className="text-xl md:text-3xl lg:text-4xl font-poppins font-medium tracking-wide">
              <span className="text-foreground/80">{displayedText}</span>
              <span className="inline-block w-[3px] h-8 md:h-10 lg:h-12 bg-primary/60 ml-1 animate-pulse align-middle" />
            </h2>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.3,
          }}
          className="text-lg md:text-xl text-foreground/70 max-w-3xl mb-12 font-poppins leading-relaxed"
        >
          Je conçois et développe des applications web modernes,
          performantes et évolutives, en combinant un design élégant,
          une expérience utilisateur fluide et une architecture robuste.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.4,
          }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-2xl font-medium transition-all hover:bg-foreground/90 group shadow-xl"
          >
            <Briefcase
              size={20}
              className="group-hover:rotate-12 transition-transform"
            />
            Voir mes projets
          </motion.a>

          <motion.a
            href="/CV_ANDRIAMBOLOLONA_Irina_Miaritsiory_2026.pdf"
            target="_blank"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 glass px-8 py-4 rounded-2xl font-medium transition-all hover:bg-white/10 border border-white/10 group"
          >
            <Download
              size={20}
              className="group-hover:-translate-y-1 transition-transform"
            />
            Télécharger CV
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/50"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}