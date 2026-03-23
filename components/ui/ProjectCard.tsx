export default function ProjectCard({ project }) {
  return (
    <div className="p-6 border rounded-xl">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
}
