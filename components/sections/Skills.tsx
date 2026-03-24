import Section from "../ui/Section";
import Container from "../ui/Container";

const skills = [
  {
    title: "Frontend Development",
    description:
      "I build responsive, production-ready UIs using modern HTML, CSS, and JavaScript, with a focus on performance and maintainability.",
  },
  {
    title: "Accessibility",
    description:
      "Experienced with WCAG 2.1, Deque Axe, and Siteimprove. I’ve handled large-scale accessibility remediation across full sites.",
  },
  {
    title: "WordPress & CMS",
    description:
      "Custom themes, plugin development, and working within existing CMS constraints while keeping code clean and structured.",
  },
  {
    title: "Full-Stack",
    description:
      "Comfortable working with APIs, databases, and backend systems to support frontend work and unblock progress.",
  },
  {
    title: "Debugging & Ownership",
    description:
      "I step into complex codebases, figure them out quickly, and take ownership to stabilize and deliver.",
  },
  {
    title: "Performance",
    description:
      "Focused on fast turnaround, clean implementations, and shipping reliable features under real deadlines.",
  },
];

export default function Skills() {
  return (
    <Section id="skills-section" background="relative bg-linear-to-b/srgb from-primary-1050 via-primary-1050/90 to-primary-1050">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent from-5% md:from-20% via-sky-300 to-transparent to-95% md:to-80%">
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
        Skills
      </h2>
      <p className="text-center mb-12">The important stuff.</p>

      <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:auto-rows-[minmax(150px,_auto)] md:gap-8">
        {skills.map((skill, i) => (
          <Container
            key={skill.title}
            background={`
              p-6 rounded-xl border border-sky-950/50 flex-col
              ${i === 0 || i === 3 ? "md:col-span-2" : ""}
            `}
          >
            <h3 className="text-xl font-semibold mb-2">
              {skill.title}
            </h3>
            <p className="text-sm opacity-80">
              {skill.description}
            </p>
          </Container>
        ))}
      </div>
    </Section>
  );
}
