"use client";

import ProjectCard from "../components/projectCard";

const projects = [
  {
    title: "Melanoma Detector",
    description: "Aplicación web para diagnóstico de melanoma usando IA.",
    link: "https://frontend-melanoma1.vercel.app",
    image: "/projects/MelanomaAI.png",
  },
  {
    title: "Clasificador MNIST",
    description: "Red neuronal para clasificar dígitos escritos a mano.",
    link: "https://frontend-mnist.vercel.app",
    image: "/projects/mnist.png",
  },
  {
    title: "Chatbot Campistas IA",
    description: "Asistente conversacional para apoyar a campistas.",
    link: "https://frontend-chatbot-campistas-ia.vercel.app/",
    image: "/projects/chatbot.png",
  },
];

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-100 
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 px-6">
      
      <h1 className="text-4xl font-bold text-center mb-12">
        🚀 Mis <span className="text-blue-600 dark:text-blue-400">Proyectos</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, index) => (
          <ProjectCard
            key={index}
            title={p.title}
            description={p.description}
            link={p.link}
            image={p.image}
          />
        ))}
      </div>
    </section>
  );
}
