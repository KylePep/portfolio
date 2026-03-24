"use client";
import { projects, Project } from "@/data/projects";
import Section from "../ui/Section";
import { useState } from "react";
import ProjectModal from "../ui/ProjectModal";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <Section id="projects-section" background="relative bg-primary-1050">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent from-5% md:from-20% via-sky-300 to-transparent to-95% md:to-80%">
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
        Projects
      </h2>

      <p className="text-center mb-12">
        A small selection of recent projects.
      </p>

      <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setActiveProject(project)}
          />
        ))}
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </Section>
  );
}