"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Función para saber si el link está activo
  const isActive = (href: string) => pathname === href;

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-md"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="font-bold text-2xl text-blue-600 dark:text-blue-400 select-none cursor-default">
          Jesús Villarreal
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-gray-700 dark:text-gray-200 font-medium">
          {[
            { href: "/", label: "Inicio" },
            { href: "/about", label: "Sobre mí" },
            { href: "/projects", label: "Proyectos" },
            { href: "/contact", label: "Contacto" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-blue-600 focus:text-blue-600 focus:outline-none transition ${
                isActive(href)
                  ? "text-blue-700 font-semibold underline"
                  : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
          type="button"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg flex flex-col items-center py-6 space-y-6 border-t border-gray-200 dark:border-gray-700"
          role="menu"
        >
          {[
            { href: "/", label: "Inicio" },
            { href: "/about", label: "Sobre mí" },
            { href: "/projects", label: "Proyectos" },
            { href: "/contact", label: "Contacto" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              role="menuitem"
              className={`text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-blue-600 focus:text-blue-600 focus:outline-none transition ${
                isActive(href)
                  ? "text-blue-700 font-semibold underline"
                  : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
