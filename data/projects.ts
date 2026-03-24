export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  heroImage: string;
  images: string[];
  tech: string[];
};

export const projects: Project[] = [
  {
    id: "calorie-counter",
    title: "Calorie Counter",
    description:
      "Track calories, meals, and progress with persistent user data.",
    longDescription:
      "Full-stack app built with Vue, Laravel, and PostgreSQL. Includes authentication, image uploads via Google Cloud Storage, and integration with the USDA FoodData API. Designed to handle inconsistent external data while maintaining a smooth user experience.",
    heroImage: "/projects/calorie/hero.png",
    images: [
      "/projects/calorie/1.png",
      "/projects/calorie/2.png",
    ],
    tech: ["Vue", "Laravel", "PostgreSQL", "Tailwind"],
  },
  {
    id: "world-war-dragon",
    title: "World War Dragon",
    description:
      "Cooperative online game with shared progression and persistent state.",
    longDescription:
      "Built with Vue, .NET, Node.js, and MongoDB. Designed backend systems and data models to support shared world state across players. Implemented pseudo-multiplayer through persistent data instead of real-time networking.",
    heroImage: "/projects/dragon/hero.png",
    images: [
      "/projects/dragon/1.png",
      "/projects/dragon/2.png",
    ],
    tech: ["Vue", ".NET", "Node.js", "MongoDB", "PhaserJS"],
  },
];
