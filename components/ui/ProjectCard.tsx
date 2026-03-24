import { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-xl overflow-hidden border border-sky-950/50"
    >
      <img src={project.heroImage} alt="" className="w-full h-48 object-cover" />

      <div className="p-4">
        <h3 className="font-semibold">{project.title}</h3>
        <p className="text-sm opacity-80">
          {project.description}
        </p>
      </div>
    </div>
  );
}
