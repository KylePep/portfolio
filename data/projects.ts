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
      "/projects/calorie/calculator.png",
      "/projects/calorie/count.png",
      "/projects/calorie/food.png",
      "/projects/calorie/history.png",
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
      "/projects/dragon/3.png",
    ],
    tech: ["Vue", ".NET", "Node.js", "MongoDB", "PhaserJS"],
  },
  {
    id: "keepr",
    title: "Keepr",
    description:
      "Dragon ball themed clicker game.",
    longDescription:
      "Developing Keepr was an exciting experience focused on preserving memories. This web app lets users share and organize photos in customizable vaults, collaborating with friends to cherish special moments. Building Keepr improved my skills in C# and MySQL.",
    heroImage: "/projects/keepr/hero.png",
    images: [
      "/projects/keepr/1.png",
      "/projects/keepr/2.png",
      "/projects/keepr/3.png",
    ],
        tech: ["Vue", "Express.js", "Node.js", "MySQL"],
  },
  {
    id: "saiyan-clicker",
    title: "Saiyan Clicker",
    description:
      "Dragon ball themed clicker game.",
    longDescription:
      "This was a lot of fun to make. It's a clicker game that you get to fight your way through enemies from Dragon Ball Z! There is a shop you can purchase upgrades from and unlockable characters. A great Javascript exercise and helped my learn a lot about Html and Css. ",
    heroImage: "/projects/saiyan/hero.png",
    images: [
      "/projects/saiyan/1.png",
      "/projects/saiyan/2.png",
      "/projects/saiyan/3.png",
    ],
    tech: ["HTML", "CSS", "JS"],
  },
];
