"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        w-full 
        bg-gradient-to-r from-blue-100 via-white to-blue-100 
        dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
        text-gray-800 dark:text-white 
        py-8 mt-12 shadow-md
      "
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Texto de derechos */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-sm text-center md:text-left select-none"
        >
          © {new Date().getFullYear()} Jesús Villarreal — Todos los derechos reservados
        </motion.p>

        {/* Iconos redes sociales */}
        <nav aria-label="Redes sociales">
          <div className="flex space-x-6">
            <motion.a
              href="https://github.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileFocus={{ scale: 1.2, rotate: 10 }}
              className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
              aria-label="GitHub"
            >
              <Github size={26} />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileFocus={{ scale: 1.2, rotate: -10 }}
              className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
              aria-label="LinkedIn"
            >
              <Linkedin size={26} />
            </motion.a>

            <motion.a
              href="mailto:tuemail@gmail.com"
              whileHover={{ scale: 1.2 }}
              whileFocus={{ scale: 1.2 }}
              className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
              aria-label="Enviar correo electrónico"
            >
              <Mail size={26} />
            </motion.a>
          </div>
        </nav>
      </div>
    </motion.footer>
  );
}
