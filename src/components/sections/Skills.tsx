"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiPhp,
  SiLaravel,
  SiCodeigniter,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiUbuntu,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiPycharm,
  SiIntellijidea,
} from "react-icons/si";
import { 
  FaJava, 
  FaWindows, 
  FaCss3Alt, 
  FaHashtag, 
  FaTerminal
} from "react-icons/fa";
import { IconType } from "react-icons";

// Définition des types pour les compétences
type SkillWithIcon = {
  name: string;
  icon: IconType;
  color: string;
  isImage?: never;
  imageSrc?: never;
};

type SkillWithImage = {
  name: string;
  icon: null;
  isImage: true;
  imageSrc: string;
  color: string;
};

type Skill = SkillWithIcon | SkillWithImage;

export default function Skills() {
  const skillCategories: { title: string; skills: Skill[] }[] = [
    {
      title: "Développement Front-end",
      skills: [
        { name: "HTML", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      ],
    },
    {
      title: "Développement Back-end",
      skills: [
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
        { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
        { name: "CodeIgniter", icon: SiCodeigniter, color: "#EF4223" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
        { name: "Nest.js", icon: SiNestjs, color: "#E0234E" },
      ],
    },
    {
      title: "Langages de programmation",
      skills: [
        { name: "C", icon: SiC, color: "#A8B9CC" },
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "C#", icon: FaHashtag, color: "#239120" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Java", icon: FaJava, color: "#007396" },
      ],
    },
    {
      title: "Bases de données",
      skills: [
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      ],
    },
    {
      title: "Versionnement & Déploiement",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "CLI/Terminal", icon: FaTerminal, color: "#4CAF50" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      ],
    },
    {
      title: "Environnements de développement",
      skills: [
        { 
          name: "VS Code", 
          icon: null, 
          isImage: true, 
          imageSrc: "/icons/vscode.png", 
          color: "#007ACC" 
        },
        { 
          name: "PyCharm", 
          icon: null, 
          isImage: true, 
          imageSrc: "/icons/pycharm.ico", 
          color: "#00ccaaff" 
        },
        { 
          name: "IntelliJ IDEA", 
          icon: null, 
          isImage: true, 
          imageSrc: "/icons/idea.ico", 
          color: "#eb2d99ff" 
        },
      ],
    },
    {
      title: "Système d'exploitation",
      skills: [
        { name: "Windows", icon: FaWindows, color: "#0078D4" },
        { name: "Ubuntu", icon: SiUbuntu, color: "#E95420" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-white/5 relative">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-space font-bold mb-6">
            Mon <span className="text-gradient">Arsenal Technique</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Une maîtrise complète d'un large éventail de technologies 
            pour construire des solutions numériques de bout en bout.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-xl font-space font-bold mb-6 text-white border-b border-white/10 pb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, sIdx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={sIdx}
                      whileHover={{ scale: 1.1, translateY: -5 }}
                      className="group relative flex flex-col items-center justify-center p-4 bg-black/40 rounded-xl border border-white/5 hover:border-white/20 transition-colors w-[100px] h-[100px]"
                    >
                      {skill.isImage ? (
                        <Image
                          src={skill.imageSrc as string}
                          alt={`Logo ${skill.name}`}
                          width={36}
                          height={36}
                          className="mb-2 transition-transform duration-300"
                        />
                      ) : (
                        Icon && (
                          <Icon
                            size={36}
                            className="mb-2 transition-transform duration-300"
                            style={{ color: skill.color }}
                          />
                        )
                      )}
                      <span className="text-xs font-medium text-foreground/80 group-hover:text-white text-center">
                        {skill.name}
                      </span>

                      {/* Glow effect on hover */}
                      <div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md pointer-events-none"
                        style={{ backgroundColor: skill.color }}
                      ></div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}