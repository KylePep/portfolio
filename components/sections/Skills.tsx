import Section from "../ui/Section";
import Container from "../ui/Container";
const skills = [
  {
    title: "Backend & API Systems",
    description: (
      <>
        <p className="mb-2">
          Building backend systems from greenfield to production, covering full auth pipelines, REST API design, and third-party integrations across both personal and client work.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>ASP.NET Core (C#), Node.js, Laravel (PHP)</li>
          <li>REST API design: routing, auth middleware, data contracts</li>
          <li>JWT authentication & BCrypt password hashing</li>
          <li>Third-party API integration (RAWG.io, USDA FoodData)</li>
          <li>MVC architecture</li>
        </ul>
      </>
    ),
  },
  {
    title: "Full-Stack Development",
    description: (
      <>
        <p className="mb-2">
          Delivering complete features across frontend and backend systems, including UI implementation, API integration, and production deployment workflows.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Feature ownership across full application stack</li>
          {/* <li>React, Vue, TypeScript</li> */}
          <li>State-driven UI connected to backend services</li>
          <li>Production deployment (Vercel, Azure, Heroku)</li>
        </ul>
      </>
    ),
  },
  {
    title: "Frontend Development",
    description: (
      <>
        <p className="mb-2">
          Building component-based interfaces and maintaining frontend systems within larger production applications.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>React, Vue</li>
          <li>JavaScript (ES6+), TypeScript, HTML, CSS, Tailwind</li>
          <li>Component-driven architecture</li>
          <li>Legacy support (jQuery)</li>
        </ul>
      </>
    ),
  },
  {
    title: "Databases & Data Systems",
    description: (
      <>
        <p className="mb-2">
          Designing and working with relational and NoSQL databases across production and greenfield systems.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>PostgreSQL, MySQL, MongoDB</li>
          <li>EF Core: code-first schema design, migrations</li>
          <li>Non-trivial schema design (self-referencing tables, deduplication patterns)</li>
          <li>SQL querying and data validation</li>
          <li>Azure-hosted data interaction</li>
        </ul>
      </>
    ),
  },
  {
    title: "Accessibility & Quality",
    description: (
      <>
        <p className="mb-2">
          Improving usability and resolving accessibility issues across production systems.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>WCAG 2.1 compliance</li>
          <li>Deque Axe, Siteimprove</li>
          <li>Large-scale accessibility remediation</li>
        </ul>
      </>
    ),
  },
  {
    title: "Tools & Delivery",
    description: (
      <>
        <p className="mb-2">
          Working in production environments with modern tooling and collaborative development workflows.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Git, Azure DevOps</li>
          <li>Docker</li>
          <li>Azure, Vercel, Heroku</li>
          <li>Agile / Scrum workflows</li>
          <li>Debugging, QA collaboration</li>
        </ul>
      </>
    ),
  }
]
// const skillsz = [
//   {
//     title: "Frontend Development",
//     description: (
//       <>
//         <p className="mb-2">
//           Building responsive, production-ready UIs with modern frameworks and strong fundamentals.
//         </p>
//         <ul className="list-disc pl-5 space-y-1">
//           <li>React, Vue</li>
//           <li>JavaScript (ES6+), HTML, CSS</li>
//           <li>jQuery (legacy support)</li>
//           <li>Component-driven architecture</li>
//         </ul>
//       </>
//     ),
//   },
//   {
//     title: "Backend & Full-Stack",
//     description: (
//       <>
//         <p className="mb-2">
//           Supporting frontend development with APIs, server logic, and full-stack workflows.
//         </p>
//         <ul className="list-disc pl-5 space-y-1">
//           <li>PHP, Laravel</li>
//           <li>Node.js</li>
//           <li>.NET (working knowledge), C#</li>
//           <li>REST API design and integration</li>
//         </ul>
//       </>
//     ),
//   },
//   {
//     title: "Databases",
//     description: (
//       <>
//         <p className="mb-2">
//           Designing and querying data efficiently across relational and non-relational systems.
//         </p>
//         <ul className="list-disc pl-5 space-y-1">
//           <li>MySQL, PostgreSQL</li>
//           <li>MongoDB</li>
//           <li>SQL query writing and optimization</li>
//         </ul>
//       </>
//     ),
//   },
//   {
//     title: "Accessibility",
//     description: (
//       <>
//         <p className="mb-2">
//           Delivering accessible experiences and remediating issues across full sites.
//         </p>
//         <ul className="list-disc pl-5 space-y-1">
//           <li>WCAG 2.1 compliance</li>
//           <li>Deque Axe, Siteimprove</li>
//           <li>Accessibility audits and fixes</li>
//         </ul>
//       </>
//     ),
//   },
//   {
//     title: "CMS & Platforms",
//     description: (
//       <>
//         <p className="mb-2">
//           Working within CMS constraints while maintaining clean, scalable code.
//         </p>
//         <ul className="list-disc pl-5 space-y-1">
//           <li>WordPress (custom themes, plugins)</li>
//           <li>Bricks Builder</li>
//           <li>Vercel, Heroku</li>
//         </ul>
//       </>
//     ),
//   },
//   {
//     title: "Tools & Workflow",
//     description: (
//       <>
//         <p className="mb-2">
//           Shipping reliably in team environments with strong ownership and process awareness.
//         </p>
//         <ul className="list-disc pl-5 space-y-1">
//           <li>Git, Azure DevOps</li>
//           <li>Azure</li>
//           <li>Agile / Scrum</li>
//           <li>MVC architecture, environment parity</li>
//         </ul>
//       </>
//     ),
//   },
// ];

export default function Skills() {
  return (
    <Section
      id="skills-section"
      background="relative bg-linear-to-b/srgb from-primary-1050 via-primary-1050/90 to-primary-1050"
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent from-5% md:from-20% via-sky-300 to-transparent to-95% md:to-80%" />

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
              hover:scale-102 hover:shadow-sm hover:shadow-sky-100/10 duration-300
              ${i === 0 || i === 1 ? "md:col-span-2" : ""}
            `}
          >
            <h3 className="text-xl font-semibold mb-2">
              {skill.title}
            </h3>
            <div className="text-sm opacity-80">
              {skill.description}
            </div>
          </Container>
        ))}
      </div>
    </Section>
  );
}
