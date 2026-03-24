import { Project } from "@/data/projects";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-primary-1050 max-w-3xl w-full p-6 rounded-xl overflow-y-auto max-h-[90vh]">
        <button onClick={onClose} className="mb-4">Close</button>

        <h2 className="text-2xl font-bold mb-4">
          {project.title}
        </h2>

        <p className="mb-4">
          {project.longDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="text-xs border px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>

        <div className="space-y-4">
          {project.images.map((img) => (
            <img key={img} src={img} className="rounded" />
          ))}
        </div>
      </div>
    </div>
  );
}
