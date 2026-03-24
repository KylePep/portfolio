import { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer rounded-xl overflow-hidden border border-sky-950/50 hover:-translate-y-2 duration-300"
    >
      <img src={project.heroImage} alt="" className="w-full h-48 object-cover" />

      <div className="p-4">
        <h3 className="font-semibold">{project.title}</h3>
        <p className="text-sm opacity-80">
          {project.description}
        </p>
      </div>
    </button>
  );
}
