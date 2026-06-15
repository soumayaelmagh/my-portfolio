"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <motion.section id="projects" className="px-8 py-20 bg-black"
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: .7 }}>
      <h2 className="text-3xl font-semibold text-center">Selected Web Development Projects</h2>
      <p className="max-w-2xl mx-auto mt-4 mb-10 text-center text-gray-300">
        Projects where I owned the full development process, from planning and architecture to implementation, integrations, launch, and iteration.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </motion.section>
  );
}
