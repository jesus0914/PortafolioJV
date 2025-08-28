"use client";
import About from "./about/page";
import Hero from "./components/hero";
import Contact from "./contact/page";
import ProjectsPage from "./projects/page";


export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <About/>
      <ProjectsPage/>
      <Contact/>
    </main>
    
  );
}
