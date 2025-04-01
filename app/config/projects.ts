export interface Project {
  id: number;
  title: string;
  summary: string;
  details: string;
  highlights: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "MoeGo Pet Service Platform",
    summary: "A comprehensive pet service platform with online booking and branded app features",
    details: "Led the development of a full-featured pet service platform that connects pet owners with service providers. The platform includes online booking, payment processing, and a branded mobile app.",
    highlights: [
      "Built a responsive web application using Next.js and TypeScript",
      "Implemented real-time booking system with WebSocket integration",
      "Developed a cross-platform mobile app using React Native",
      "Optimized performance with server-side rendering and image optimization"
    ],
    github: "https://github.com/yourusername/moego",
    demo: "https://moego.pet"
  },
  {
    id: 2,
    title: "Polarr Photo Editor",
    summary: "A WebGL-based cross-platform photo editor with advanced editing features",
    details: "Contributed to the development of a powerful photo editing application that runs in the browser using WebGL technology. The editor supports various image processing features and real-time previews.",
    highlights: [
      "Implemented WebGL-based image processing algorithms",
      "Created reusable UI components for editing tools",
      "Optimized rendering performance for large images",
      "Integrated with cloud storage services"
    ],
    demo: "https://polarr.com"
  },
  {
    id: 3,
    title: "Financial Dashboard",
    summary: "A comprehensive financial dashboard for risk control and loan management",
    details: "Developed a sophisticated financial dashboard that provides real-time insights into risk metrics and loan management. The system includes data visualization, reporting tools, and automated alerts.",
    highlights: [
      "Built interactive data visualizations using D3.js",
      "Implemented real-time data updates with WebSocket",
      "Created a modular component architecture",
      "Integrated with multiple data sources and APIs"
    ],
    github: "https://github.com/yourusername/financial-dashboard"
  }
];
