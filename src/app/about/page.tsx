"use client";

import { motion } from "framer-motion";
import {
  SiPython, SiPhp, SiJavascript, SiTypescript, SiHtml5, SiCss3,
  SiTailwindcss, SiAngular, SiReact, SiNextdotjs, SiFirebase,
  SiPostgresql, SiNestjs, SiFlask, SiIonic, SiMysql, SiMongodb,
  SiNumpy, SiPandas, SiOpencv, SiKeras, SiTensorflow
} from "react-icons/si";
import { MdScience } from "react-icons/md";

const skills = [
  {
    category: "Lenguajes de programación",
    items: [
      { name: "Python", icon: <SiPython size={28} color="#3776AB" /> },
      { name: "PHP", icon: <SiPhp size={28} color="#777BB4" /> },
      { name: "JavaScript", icon: <SiJavascript size={28} color="#F7DF1E" /> },
      { name: "TypeScript (TSX)", icon: <SiTypescript size={28} color="#3178C6" /> },
      { name: "HTML5", icon: <SiHtml5 size={28} color="#E34F26" /> },
      { name: "CSS3", icon: <SiCss3 size={28} color="#1572B6" /> },
      { name: "SCSS", icon: <SiCss3 size={28} color="#CD6799" /> },
    ],
  },
  {
    category: "Frameworks y Librerías",
    items: [
      { name: "Tailwind CSS", icon: <SiTailwindcss size={28} color="#06B6D4" /> },
      {
        name: "shadcn/ui",
        icon: (
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAAAb1BMVEUAAAD///8XFxfGxsbJycm5ubkgICAYGBjMzMwqKiqkpKShoaHZ2dkcHBzW1tYtLS0PDw/19fU8PDwICAgkJCS/v7/n5+cxMTE3NzcSEhKEhISYmJjh4eE9PT3r6+uLi4tVVVVoaGiwsLBRUVFdXV34CXnyAAACxUlEQVR4nO2bbXObQAyEfeAXcDDFPYcE26VNmv//Gxu7IYgZt3PIw4nN7POdyUaj22MlvFgQQgghhBBCCCGEEEIIIYQQQr4ojbWA0VQ/W1f88tYyRpGn7sIRSbVfXjW79mCtJJw8cx+8WUsJZpd2mt2LtZZQ1stPzftnazGB5H2d3WtlrSaMKus1nxNrNWHkfW+4FYjmSmjOdtZqwjgIzY8gdV6LM/i4tlYTxk72BkidpdetQPrZI3qd0IzidYnojQzkDA68bmOtJowDoNclos4lSD+je10B0s+IXieylUtBzqDIVi4FqbP0uhVIneU7fwFS50G2AvENWecSxJ+l1zFbTccgW4H0cw7odZDZCnCO1HCOFAXEbLXhHCkOiF4HmK02ojeWIGdQel0K8r6B6HWNbo7UJI3dhlyXrZpjua+3T1MK+w9e1jm8n7fXB2obo9Flq+Th45HTlNr+hXKO1Gl2mcG+Wc6RluH9vHWGonXZqnron4rfHrodve/rbHAQddkqEXUuv0+p7xbKHb2oc/xPVXTZKhGai+hXi3KOJHqjjt4buh19Jep8/jalvlvospX0uiJ6nZVzJHkG49dZla0GXhfdN5Q7eqHZ2Os07xuuiN4bumzlTb1Ot6MfvG+AeF0zG68bsaOXXhf97kb0unuzlYXX6Xb08/G68Gwlve78Y0p9t9Dt6KXXtfG9TjdHmk22GrGjn43XKeZIl/8UMFu1ttkquJ9nlK1Uc6QiutdBZqv750jR7+5KZiuQOdLiqPI60znSwu8VXmebrd7v4b43VHOk+NnqQtGdQZBsdeU3ltf9xR/b9z/+CuJ1Hf7w9vIcvs4xzVY6bLOVEuHqZ5szOJ6mNPY6DcnnVWTkdRqaujuDVp8XKOiyt53XaXiqrd437iE5ZdkJ5GsxQQXy43tCCCGEEEIIIYQQQgghhBBCCCFfnT9MgR8dTROf8AAAAABJRU5ErkJggg=="
            alt="shadcn/ui"
            style={{ width: 28, height: 28 }}
          />
        ),
      },
      { name: "Angular", icon: <SiAngular size={28} color="#DD0031" /> },
      { name: "React", icon: <SiReact size={28} color="#61DAFB" /> },
      { name: "Next.js", icon: <SiNextdotjs size={28} /> },
      { name: "NestJS", icon: <SiNestjs size={28} color="#E0234E" /> },
      { name: "Flask", icon: <SiFlask size={28} color="#000000" /> },
      { name: "Ionic", icon: <SiIonic size={28} color="#3880FF" /> },
    ],
  },
  {
    category: "Bases de Datos",
    items: [
      { name: "SQL (MySQL)", icon: <SiMysql size={40} color="#4479A1" /> },
      { name: "NoSQL (MongoDB)", icon: <SiMongodb size={28} color="#47A248" /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={28} color="#336791" /> },
      { name: "Firebase", icon: <SiFirebase size={28} color="#FFCA28" /> },
    ],
  },
  {
    category: "Ciberseguridad",
    items: [
      {
        name: "Kali Linux",
        icon: (
          <img
            src="/logos/kali-linux.png"
            alt="Kali Linux"
            style={{ width: 40, height: 40, objectFit: "contain" }}
          />
        ),
      },
      {
        name: "OWASP",
        icon: (
          <img
            src="https://owasp.org/assets/images/logo.svg"
            alt="OWASP"
            style={{ width: 28, height: 28 }}
          />
        ),
      },
      {
        name: "Wireshark",
        icon: (
          <img
            src="/logos/wireshark.jpeg"
            alt="Wireshark"
            style={{ width: 35, height: 35, objectFit: "contain" }}
          />
        ),
      },
    ],
  },
  {
    category: "Ciencia de Datos & ML/IA",
    items: [
      { name: "NumPy", icon: <SiNumpy size={28} color="#013243" /> },
      { name: "Pandas", icon: <SiPandas size={28} color="#150458" /> },
      { name: "OpenCV", icon: <SiOpencv size={28} color="#5C3EE8" /> },
      { name: "Keras", icon: <SiKeras size={28} color="#D00000" /> },
      { name: "TensorFlow", icon: <SiTensorflow size={28} color="#FF6F00" /> },
      { name: "Hugging Face", icon: <MdScience size={28} color="#F9A03C" /> },
      { name: "Matplotlib", icon: <MdScience size={28} color="#11557C" /> },
      {
        name: "Power BI",
        icon: (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
            alt="Power BI"
            style={{ width: 28, height: 28 }}
          />
        ),
      },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.04),transparent)] pointer-events-none z-0" />
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col gap-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          👨‍💻 Sobre <span className="text-blue-600 dark:text-blue-400">Mí</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center leading-relaxed mb-16"
        >
          Soy Ingeniero de Sistemas con experiencia en{" "}
          <strong>desarrollo full stack</strong>,{" "}
          <strong>inteligencia artificial</strong> y{" "}
          <strong>análisis de datos</strong>. Me apasiona crear soluciones
          digitales que transformen ideas en productos útiles, escalables y con impacto real.
        </motion.p>

        {/* Categorías con íconos */}
        <div className="flex flex-col gap-10">
          {skills.map(({ category, items }) => (
            <motion.div
              key={category}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-2xl font-semibold mb-6 text-center sm:text-left text-blue-600 dark:text-blue-400">
                {category}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
                {items.map(({ name, icon }) => (
                  <motion.div
                    key={name}
                    variants={item}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/70 dark:bg-gray-700/60 shadow hover:shadow-lg transition duration-300 backdrop-blur-md border border-gray-200 dark:border-gray-600"
                  >
                    <div>{icon}</div>
                    <span className="text-gray-800 dark:text-gray-100 text-sm sm:text-base font-medium">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
