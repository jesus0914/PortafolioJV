"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FileDown, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 py-12 overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      
      {/* Fondo decorativo */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.1),transparent)] pointer-events-none" />

      {/* Columna Izquierda: Texto */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center md:text-left space-y-6 z-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Hola! Soy <br />
          <span className="text-blue-600 dark:text-blue-400">Jesús Villarreal</span>
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
          Ingeniero de sistemas apasionado por el{" "}
          <strong>desarrollo full stack, IA y proyectos innovadores</strong>.
        </p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* Botón Proyectos */}
          <Button asChild size="lg" className="flex items-center gap-2">
            <a href="/projects">
              <Rocket size={18} /> Ver Proyectos
            </a>
          </Button>

          {/* Botón Descargar CV Mejorado */}
          <Button
            asChild
            size="lg"
            variant="outline"
            className="relative border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            <a href="/Jesús_Villarreal_CV.pdf" download>
              <FileDown size={18} /> Descargar CV
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Columna Derecha: Foto */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex justify-center md:justify-end relative z-10"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-blue-500 ring-4 ring-blue-300/30">
          <Image
            src="/img/jesusv.png"  // 📌 asegúrate que esté en /public/img/
            alt="Jesús Villarreal"
            fill
            priority
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
