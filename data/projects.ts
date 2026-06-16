export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  heroImage: string;
  images: string[];
  tech: string[];
  liveUrl?: string;
  liveNote?: string;
};

export const projects: Project[] = [
  {
    id: "partyup",
    title: "PartyUp",
    description:
        "Full-stack SaaS matchmaking platform for multiplayer gaming built around structured character-based data models and API-driven UI.",
    longDescription:
  "PartyUp is a full-stack SaaS web application that implements a data-driven matchmaking system for multiplayer games. The platform is built with an ASP.NET Core 8 REST API, PostgreSQL, EF Core, and a React + TypeScript frontend. The core architecture centers on a structured, character-based data model where users create game-specific character profiles derived from external game metadata via the RAWG.io API. These structured profiles are normalized into relational database entities that support efficient querying and matching. The backend implements JWT authentication, BCrypt password hashing, and a relational schema designed around interaction tracking and deduplicated match generation. This includes a self-referencing CharacterInteraction table for user actions and a CharacterMatch table that enforces deterministic GUID ordering to prevent duplicate match records. The frontend is a React + TypeScript SPA that consumes REST APIs and renders dynamic, data-driven UI flows based on game-specific metadata and user-defined character attributes. The system is containerized with Docker and deployed as a full-stack SaaS application.",
    heroImage: "/projects/partyup/hero.png",
    images: [
      "/projects/partyup/1.png",
      "/projects/partyup/2.png",
      "/projects/partyup/3.png",
      "/projects/partyup/4.png",
    ],
    tech: [
  "React",
  "TypeScript",
  "ASP.NET Core",
  "C#",
  "PostgreSQL",
  "EF Core",
  "REST API Design",
  "JWT Authentication",
  "Docker",
  "RAWG.io API"
],
    liveUrl: "https://partyup.kylepep.dev/",
  },
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
    id: "keepr",
    title: "Keepr",
      description:
    "Social media app for organizing and sharing user-generated content.",
  longDescription:
    "Keepr is a social media application built with a .NET backend in C# and a Vue.js frontend. It allows users to create, manage, and organize their own content, as well as collect and curate content from other users into personalized collections. This project strengthened my experience with full-stack development, particularly working with C#, RESTful APIs, and relational data modeling.",
    heroImage: "/projects/keepr/hero.png",
    images: [
      "/projects/keepr/1.png",
      "/projects/keepr/2.png",
      "/projects/keepr/3.png",
    ],
        tech: ["Vue.js", ".NET", "C#", "MySQL"],
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
    tech: ["Vue", "Node.js", "MongoDB", "PhaserJS"],
    liveUrl: "https://world-war-dragon.onrender.com/",
    liveNote: "Hosted on Render's free tier — may take up to a minute to wake up.",
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
    liveUrl: "https://kylepep.github.io/saiyanClicker/#",
  },
];
