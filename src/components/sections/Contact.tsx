"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Globe,
  CheckCircle,
  XCircle,
  Loader2,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import emailjs from '@emailjs/browser';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

  const onSubmit = async (data: FormData) => {
    setIsSending(true);
    setSendStatus({ type: null, message: '' });

    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: `[Portfolio] ${data.subject}`,
        message: data.message,
      };

      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setSendStatus({
          type: 'success',
          message: 'Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.'
        });
        reset();
        
        setTimeout(() => {
          setSendStatus({ type: null, message: '' });
        }, 6000);
      }
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      setSendStatus({
        type: 'error',
        message: '❌ Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.'
      });
    } finally {
      setIsSending(false);
    }
  };

  const socialLinks = [
    { 
      icon: <FaGithub size={24} />, 
      name: "GitHub", 
      href: "https://github.com/miaritsioryandr077", 
      color: "hover:text-white hover:bg-white/10" 
    },
    { 
      icon: <FaLinkedin size={24} />, 
      name: "LinkedIn", 
      href: "https://linkedin.com/in/miaritsiory-andriambololona", 
      color: "hover:text-[#0A66C2] hover:bg-[#0A66C2]/10" 
    },
    { 
      icon: <FaWhatsapp size={24} />, 
      name: "WhatsApp", 
      href: "https://wa.me/261335110053", 
      color: "hover:text-[#25D366] hover:bg-[#25D366]/10" 
    },
    { 
      icon: <Mail size={24} />, 
      name: "Email", 
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=miaritsioryandriambololona@gmail.com", 
      color: "hover:text-[#EA4335] hover:bg-[#EA4335]/10",
      target: "_blank"
    },
  ];

  // Fonction pour ouvrir Gmail
  const openGmail = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=miaritsioryandriambololona@gmail.com";
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-space font-bold mb-6">
            Discutons de votre <span className="text-gradient">Projet</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Vous avez une idée de projet, un besoin technique ou vous souhaitez simplement échanger ? 
            N'hésitez pas à me contacter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold font-space text-white mb-6">
              Informations de contact
            </h3>

            <div className="space-y-6 mb-8">

    {/* Téléphone */}
    <div className="flex items-start gap-4 text-foreground/80">
      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
        <Phone size={20} className="text-primary" />
      </div>
      <div>
        <p className="text-sm text-foreground/50 mb-1">Téléphone</p>
        <a
          href="tel:+261335110053"
          className="text-white hover:text-primary transition-colors"
        >
          +261 33 51 100 53
        </a>
      </div>
    </div>

    {/* Email */}
    <div className="flex items-start gap-4 text-foreground/80">
      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
        <Mail size={20} className="text-primary" />
      </div>
      <div>
        <p className="text-sm text-foreground/50 mb-1">Email</p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=miaritsioryandriambololona@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={openGmail}
          className="hover:text-primary transition-colors text-white"
        >
          miaritsioryandriambololona@gmail.com
        </a>
      </div>
    </div>

    {/* Adresse */}
    <div className="flex items-start gap-4 text-foreground/80">
      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
        <MapPin size={20} className="text-primary" />
      </div>
      <div>
        <p className="text-sm text-foreground/50 mb-1">Localisation</p>
        <p className="text-white">
          Antananarivo, Madagascar
        </p>
      </div>
    </div>

    {/* Portfolio */}
    <div className="flex items-start gap-4 text-foreground/80">
      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
        <Globe size={20} className="text-primary" />
      </div>
      <div>
        <p className="text-sm text-foreground/50 mb-1">Portfolio</p>
        <a
          href="https://miaritsiorydev.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-primary transition-colors"
        >
          miaritsiorydev.vercel.app
        </a>
      </div>
    </div>

  </div>

  <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/50 mb-4">
    Réseaux Sociaux
  </h4>

  <div className="flex gap-3">
    {socialLinks.map((link, idx) => (
      <a
        key={idx}
        href={link.href}
        target={link.target || "_blank"}
        rel="noopener noreferrer"
        className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-foreground/70 transition-all duration-300 ${link.color}`}
        title={link.name}
      >
        {link.icon}
      </a>
    ))}
  </div>
</div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glass p-8 md:p-10 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">Nom complet</label>
                  <input
                    type="text"
                    {...register("name", { required: "Le nom est requis" })}
                    className={`w-full bg-black/40 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300`}
                    placeholder="Votre nom complet"
                  />
                  {errors.name && (
                    <motion.span 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-1 block"
                    >
                      {errors.name.message}
                    </motion.span>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">Adresse Email</label>
                  <input
                    type="email"
                    {...register("email", { 
                      required: "L'email est requis", 
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Email invalide"
                      }
                    })}
                    className={`w-full bg-black/40 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300`}
                    placeholder="Votre email"
                  />
                  {errors.email && (
                    <motion.span 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-1 block"
                    >
                      {errors.email.message}
                    </motion.span>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground/70 mb-2">Sujet</label>
                <input
                  type="text"
                  {...register("subject", { required: "Le sujet est requis" })}
                  className={`w-full bg-black/40 border ${errors.subject ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300`}
                  placeholder="Votre sujet"
                />
                {errors.subject && (
                  <motion.span 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs mt-1 block"
                  >
                    {errors.subject.message}
                  </motion.span>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground/70 mb-2">Message</label>
                <textarea
                  {...register("message", { required: "Le message est requis" })}
                  rows={5}
                  className={`w-full bg-black/40 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none`}
                  placeholder="Votre message"
                />
                {errors.message && (
                  <motion.span 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs mt-1 block"
                  >
                    {errors.message.message}
                  </motion.span>
                )}
              </div>

              {/* Status Message avec animation */}
              {sendStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  className={`mb-4 p-4 rounded-xl flex items-start gap-3 ${
                    sendStatus.type === 'success' 
                      ? 'bg-green-500/10 border border-green-500/30 text-green-400' 
                      : 'bg-red-500/10 border border-red-500/30 text-red-400'
                  }`}
                >
                  {sendStatus.type === 'success' ? (
                    <CheckCircle size={20} className="mt-0.5 flex-shrink-0" />
                  ) : (
                    <XCircle size={20} className="mt-0.5 flex-shrink-0" />
                  )}
                  <span className="text-sm">{sendStatus.message}</span>
                </motion.div>
              )}

              <motion.button
                whileHover={!isSending ? { scale: 1.02 } : {}}
                whileTap={!isSending ? { scale: 0.98 } : {}}
                type="submit"
                disabled={isSending}
                className={`w-full font-semibold rounded-xl px-8 py-4 flex items-center justify-center gap-3 transition-all duration-300 ${
                  isSending 
                    ? 'bg-white/20 text-white/50 cursor-not-allowed' 
                    : 'bg-white text-black hover:bg-gray-200 shadow-lg shadow-white/10 hover:shadow-white/20'
                }`}
              >
                {isSending ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <span>Envoyer le message</span>
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}