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
      if (displayedText.length < currentTitle.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
          setSpeed(80 + Math.random() * 40);
        }, speed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
          setSpeed(40);
        }, 2500);
      }
    } else {
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
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 px-4 sm:px-6"
    >
      {/* Background Animated Gradient Orbs - Adjusted for mobile */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[20rem] sm:w-[30rem] md:w-[40rem] h-[20rem] sm:h-[30rem] md:h-[40rem] bg-primary/20 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] mix-blend-screen"
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
          className="absolute bottom-1/4 right-1/4 w-[18rem] sm:w-[25rem] md:w-[35rem] h-[18rem] sm:h-[25rem] md:h-[35rem] bg-secondary/20 rounded-full blur-[70px] sm:blur-[80px] md:blur-[100px] mix-blend-screen"
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[15rem] sm:w-[20rem] md:w-[30rem] h-[15rem] sm:h-[20rem] md:h-[30rem] bg-accent/20 rounded-full blur-[60px] sm:blur-[70px] md:blur-[90px] mix-blend-screen"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto text-center px-2 sm:px-4">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full glass text-xs sm:text-sm font-medium text-primary tracking-wide shadow-lg shadow-primary/10 border border-white/10"
        >
          <span className="relative flex items-center justify-center w-2 h-2 sm:w-3 sm:h-3">
            <span className="absolute inline-flex h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-primary opacity-75 animate-ping"></span>
            <span className="relative inline-flex h-1.5 w-1.5 sm:h-2.5 sm:w-2.5 rounded-full bg-primary"></span>
          </span>
          <span className="text-[10px] sm:text-xs md:text-sm">Disponible pour de nouvelles opportunités</span>
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
          className="mb-3 sm:mb-5"
        >
          <span className="text-base sm:text-2xl md:text-4xl lg:text-5xl uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-foreground/50 font-medium block">
            ANDRIAMBOLOLONA
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-space font-bold tracking-tight leading-tight mt-1 sm:mt-2">
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
          className="relative mb-6 sm:mb-8 w-full max-w-[90%] sm:max-w-full"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="h-[1px] w-6 sm:w-8 md:w-12 bg-gradient-to-r from-transparent to-primary/40 flex-shrink-0" />
            <h2 className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-poppins font-medium tracking-wide">
              <span className="text-foreground/80">{displayedText}</span>
              <span className="inline-block w-[2px] sm:w-[3px] h-5 sm:h-7 md:h-8 lg:h-10 xl:h-12 bg-primary/60 ml-0.5 sm:ml-1 animate-pulse align-middle" />
            </h2>
            <div className="h-[1px] w-6 sm:w-8 md:w-12 bg-gradient-to-l from-transparent to-primary/40 flex-shrink-0" />
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
          className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 max-w-3xl mb-8 sm:mb-10 md:mb-12 font-poppins leading-relaxed px-2 sm:px-4"
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
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto px-2 sm:px-0"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 bg-foreground text-background px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium transition-all hover:bg-foreground/90 group shadow-xl text-sm sm:text-base w-full sm:w-auto"
          >
            <Briefcase
              size={18}
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
            className="flex items-center justify-center gap-2 glass px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium transition-all hover:bg-white/10 border border-white/10 group text-sm sm:text-base w-full sm:w-auto"
          >
            <Download
              size={18}
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
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/50"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}