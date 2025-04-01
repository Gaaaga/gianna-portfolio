export const skills = [
  {
    id: 1,
    title: "Frontend Engineering",
    color: "#A295FF",
    icon: "🧑‍💻",
    description: "Build thoughtful UI with modern frameworks",
    items: [
      "React.js",
      "React Native",
      "Next.js",
      "TypeScript",
      "Redux",
      "MobX"
    ]
  },
  {
    id: 2,
    title: "API & Backend Integration",
    color: "#FF6A00",
    icon: "🔌",
    description: "Create seamless experiences across systems",
    items: [
      "Node.js",
      "REST APIs",
      "GraphQL",
      "Firebase",
      "Headless CMS"
    ]
  },
  {
    id: 3,
    title: "Product & Team Leadership",
    color: "#00C27C",
    icon: "🎯",
    description: "Drive clarity from roadmap to release",
    items: [
      "Roadmap Planning",
      "Agile Execution",
      "Stakeholder Collaboration",
      "Sprint Management"
    ]
  },
  {
    id: 4,
    title: "Build & Optimization",
    color: "#FFB8B8",
    icon: "⚙️",
    description: "From dev to deploy, with performance in mind",
    items: [
      "Webpack",
      "Vite",
      "Vercel",
      "GitHub Actions",
      "Jest",
      "Vitest"
    ]
  }
];

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  website?: string;
  description: string;
  emoji: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "MoeGo",
    role: "Senior Frontend Engineer & Product Owner",
    period: "Sep 2021 – Sep 2024",
    location: "Melbourne, Australia",
    website: "moego.pet",
    description: "Led multiple product lines from 0 to 1 in a fast-scaling SaaS team, including Online Booking and Branded App.\nOwned end-to-end product lifecycle—from user research to architecture design, implementation, launch, and iteration.",
    emoji: "🐶"
  },
  {
    id: 2,
    company: "Polarr",
    role: "Senior Frontend Engineer",
    period: "Sep 2019 – Mar 2020",
    location: "Melbourne, Australia",
    website: "polarr.com",
    description: "Contributed to a WebGL-based cross-platform photo editor.\nRefactored architecture for performance and modularity.\nBuilt interactive, high-performance UI components supporting complex editing features.",
    emoji: "📸"
  },
  {
    id: 3,
    company: "Merchants Union Consumer Finance",
    role: "Senior Frontend Engineer",
    period: "Mar 2019 – Sep 2019",
    location: "Melbourne, Australia",
		website: 'https://www.mucfc.com/',
    description: "Built and maintained frontend for financial products including risk control dashboards and loan management systems.\nCollaborated with backend and data teams to ensure accuracy and performance.",
    emoji: "💵"
  },
  {
    id: 4,
    company: "Xstar.io",
    role: "Frontend Engineer",
    period: "Mar 2018 – Feb 2019",
    location: "Melbourne, Australia",
    description: "Worked remotely with a distributed team to deliver responsive web applications for overseas clients.\nInvolved in full development cycle from design to deployment.",
    emoji: "🪙"
  },
  {
    id: 5,
    company: "Guanmai Network Technology",
    role: "Frontend Engineer",
    period: "Mar 2018 – Feb 2019",
    location: "Melbourne, Australia",
    description: "Participated in internal systems and B2B tools for food supply chain operations.\nFocused on reusable component libraries and UX improvements.",
    emoji: "🥦"
  },
  {
    id: 6,
    company: "Audaque Data Technology",
    role: "Frontend Engineer",
    period: "Nov 2015 – Aug 2016",
    location: "Melbourne, Australia",
    description: "Developed data visualization and analysis tools for smart city dashboards and government reporting.",
    emoji: "📊"
  },
];
