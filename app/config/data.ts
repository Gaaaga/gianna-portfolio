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
    role: "Product Owner & Senior Frontend Engineer ",
    period: "Sep 2021 – Sep 2024",
    location: "",
    website: "moego.pet",
    description: "MoeGo is a SaaS platform serving the pet grooming industry, offering tools for scheduling, customer management, payments, and communication.\nI joined MoeGo when the team was just 20 people and supported its rapid growth to over 200 employees in two years. \nAs the company scaled, I stepped into a leadership position where I owned the direction and delivery of MoeGo’s customer-facing product line.\nWorking in a fast-paced environment, I helped shape the company’s product direction, led multiple cross-functional initiatives, and collaborated closely with design, sales, and marketing. \nWhat I loved most was the opportunity to work so closely with our customers, from small business owners to large franchises, and see how our work directly helped them run and grow their businesses. \nIt was a deeply rewarding experience that shaped how I think about product, impact, and leadership.",
    emoji: "🐶"
  },
  {
    id: 2,
    company: "Polarr",
    role: "Senior Frontend Engineer",
    period: "Sep 2019 – Mar 2020",
    location: "",
    website: "polarr.com",
    description: "Polarr is a creative tools company best known for its professional photo editing application used by millions of creators across platforms.\nI joined the team to help rebuild the core Polarr Photo Editor, a cross-platform WebGL-based application running on web, desktop, and mobile.\nAt Polarr, I worked closely with designers and core engineers to refactor the frontend architecture, separating the WebGL rendering engine from the UI layer built in React and TypeScript.\nWhat made this experience truly memorable was the deeply design-driven culture. Many team members were also passionate photographers and heavy users of the product. That created a rare kind of feedback loop, where every UI detail mattered. It gave me a lasting appreciation for building creative tools that don’t just function well, but feel intuitive and empowering to use.",
    emoji: "📸"
  },
  {
    id: 3,
    company: "Merchants Union Consumer Finance",
    role: "Senior Frontend Engineer",
    period: "Mar 2019 – Sep 2019",
    location: "",
		website: 'www.mucfc.com',
    description: "Merchants Union is a consumer finance company jointly founded by China Merchants Bank and China Unicom, serving over 100 million registered users across a wide range of online credit products.\nI joined the team to help unify their fragmented frontend systems across web and mobile platforms. With multiple business units maintaining separate Android, iOS, and web implementations of the same workflows, it created heavy duplication and slowed down iteration.\nI led the design and development of a cross-platform component system using React.js and React Native, aiming for high reusability, platform abstraction, and safe customizability. I worked closely with stakeholders across business lines to gather requirements, define component layers, and standardize design and behavior across teams. The system significantly reduced duplicated efforts and made business rollout much faster and more consistent.\nThis project gave me valuable experience in driving technical alignment within a large organization, and deepened my understanding of building scalable systems in complex, regulated environments.",
    emoji: "💵"
  },
  {
    id: 4,
    company: "Xstar.io",
    role: "Frontend Engineer",
    period: "Mar 2018 – Feb 2019",
    location: "",
    description: "Xstar is a blockchain-based digital asset trading platform designed for individual investors. \nAs part of the core frontend team, I worked on modules such as order matching, trading workflows, and the cryptocurrency wallet interface.\nI helped build dynamic, real-time interfaces that handled complex state transitions across multiple user flows. I also collaborated closely with backend engineers and product managers to ensure system integrity and responsiveness, especially in high-traffic trading scenarios.\nThis role gave me valuable hands-on experience in fintech product architecture, real-time system design, and complex client-side state management in a fast-paced, data-sensitive environment.",
    emoji: "🪙"
  },
  {
    id: 5,
    company: "Guanmai Network Technology",
    role: "Frontend Engineer",
    period: "Mar 2018 – Feb 2019",
    location: "",
		website:"www.guanmai.cn",
    description: "Guanmai is a SaaS company providing supply chain management systems for fresh food distributors, helping them digitalize operations across ordering, inventory, and delivery.\nThis was where I first worked on a long-term product team and began using React.js. I contributed to the core web-based order management system and later led the frontend development of a new React Native app for delivery drivers. Working closely with backend engineers and product managers, I helped deliver a performant and scalable user experience under real-world logistics conditions.\nBeyond the core platform, I also developed companion mobile apps, including a customer ordering app and a traceability app that allowed end consumers to scan products and access food safety information. Although the traceability app was simple, it made a strong business impact, becoming a popular paid add-on for enterprise customers.\nThis experience gave me a deeper appreciation of how thoughtful engineering, even in small tools, can drive real value for users and unlock business growth.",
    emoji: "🥦"
  },
  {
    id: 6,
    company: "Audaque Data Technology",
    role: "Frontend Engineer",
    period: "Nov 2015 – Aug 2016",
    location: "",
    description: "Audaque is a data technology company providing enterprise-level solutions for data analytics and digital transformation.\nThis was my first role in tech after transitioning from a mechanical engineering background. I joined as a frontend developer after self-learning web development, working primarily with JavaScript, jQuery, HTML, and CSS.\nDuring my time at Audaque, I contributed to multiple production-grade projects under fast delivery cycles, collaborating with backend engineers and product owners to build responsive user interfaces. The experience helped me build a solid foundation in web development, sharpened my engineering instincts, and gave me early exposure to team-based software delivery.",
    emoji: "📊"
  },
];
