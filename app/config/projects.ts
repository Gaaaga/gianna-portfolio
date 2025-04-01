export interface Project {
  title: string;
  period: string;
  summary: string;
  link?: string;
  details: {
    overview: string;
    highlights: string[];
  };
}

export const projects: Project[] = [
  {
    title: "MoeGo Branded App",
    period: "2023",
    summary: "A white-label mobile app platform for pet businesses, built with React Native. Businesses can offer fully branded apps with scheduling, messaging, payment, and real-time tracking—all seamlessly connected to MoeGo's ecosystem.",
    link: "https://www.moego.pet/pet-parent-portal",
    details: {
      overview: "As MoeGo grew, we saw a gap, that larger pet businesses needed more than a generic scheduling tool. They needed a direct way to engage customers.\n\nTo meet this need, I led the development of the Branded App System, enabling businesses to manage appointments, payments, promotions, and customer interactions within their own fully branded mobile app.\n\nTo ensure scalability, we designed a flexible architecture, allowing businesses to configure features based on their operational needs. This included real-time updates, appointment tracking, customer messaging, and integrated payments.\n\nWithin the first launch phase, the Branded App saw a high adoption within two weeks among early adopters, reinforcing the need for a fully customized solution in the pet industry. Additionally, this solution played a key role in securing multiple enterprise deals, positioning MoeGo as a viable solution for larger-scale pet businesses.",
      highlights: [
        "Owned the full product lifecycle, defining strategy, roadmap, and key features like branding, scheduling, payments, real-time tracking, and customer engagement tools.",
        "Conducted market research, user interviews, and competitive analysis, shaping product direction and ensuring strong market fit.",
        "Managed project timelines, sprint planning, and cross-functional collaboration, keeping execution efficient in a fast-paced environment.",
        "Designed the app's technical architecture, ensuring scalability, flexibility, and maintainability across multiple business configurations.",
        "Led engineering in selecting the right tech stack, implementing real-time tracking, and optimizing app performance across iOS, Android, and web.",
        "Partnered with marketing and sales teams to refine go-to-market strategies, positioning MoeGo to secure multiple enterprise deals."
      ]
    }
  },
  {
    title: "MoeGo Online Booking System",
    period: "2022",
    summary: "A powerful and flexible scheduling platform that lets pet businesses customize every step of their booking flow. I led the architecture, frontend system, and the launch of Business Homepage and Abandoned Booking Recovery features.",
    link: "https://www.moego.pet/online-booking-feature",
    details: {
      overview: "Pet grooming businesses relied on manual scheduling, unlike seamless booking in industries like Uber and Airbnb. Seeing groomers waste time coordinating appointments and handling cancellations, we knew there had to be a better way.\n\nI led the development of MoeGo Online Booking, a system that streamlines scheduling, automates workflows, and boosts bookings, allowing businesses to focus on growth.\n\nWe optimized the booking flow for higher conversions and retention, enabling businesses to customize scheduling, manage availability, and automate workflows. I also led the Business Homepage feature, helping businesses build branded storefronts to attract more clients without technical expertise.\n\nTo further drive engagement, I led Abandoned Booking Recovery feature, allowing businesses to re-engage potential clients who didn't complete appointments. This feature saw a 13x usage surge on day one, making it one of MoeGo's most impactful launches!",
      highlights: [
        "Led end-to-end development, defining strategy, roadmap, and key features like custom scheduling, automated workflows, custom-branded online storefronts, and abandoned booking recovery.",
        "Drove user research and competitive analysis, ensuring the product addressed critical industry gaps and delivered a seamless booking experience.",
        "Managed project execution, leading sprint planning, cross-functional collaboration, and ensuring on-time, high-quality delivery.",
        "Designed a scalable architecture, enabling businesses to tailor booking settings, optimize appointment efficiency, and automate scheduling workflows.",
        "Led engineering in implementing real-time scheduling, automated reminders, and an intuitive UX.",
        "Collaborated with marketing & sales team to strengthen MoeGo's market position, making it the leading choice for pet business software by equipping businesses with online capabilities."
      ]
    }
  },
  {
    title: "MoeGo Official Website",
    period: "2021",
    summary: "A conversion-focused marketing website built with performance and brand storytelling in mind. I led the full redesign, from content strategy to code, bringing MoeGo's brand to life with high-impact visuals and interactions.",
    link: "https://moego.pet",
    details: {
      overview: "MoeGo Website plays a critical role in brand positioning, user acquisition, and lead generation, helping MoeGo stand out from competitors in the pet industry.\n\nDesigned with a modern, responsive, and high-performance architecture, the website not only highlights MoeGo's core offerings, such as appointment scheduling, customer management, automated reminders, and payment solutions, but also embodies the playful, vibrant brand personality that sets MoeGo apart in the pet industry.\n\nTo create an engaging and immersive experience, the homepage features rich interactive elements that immediately capture user attention. Thoughtfully designed scrolling animations introduce fresh visuals at each section, keeping users engaged and significantly increasing time spent on the site. Data shows that this approach led to a high homepage completion rate, demonstrating strong user retention.",
      highlights: [
        "Led the end-to-end redesign and development of MoeGo's official website, balancing both product vision and technical execution.",
        "Defined the website structure, content strategy, and user experience to align with MoeGo's brand and business goals.",
        "Designed and implemented a modern, high-performance frontend using Next.js to ensure a seamless browsing experience across devices.",
        "Worked closely with marketing and leadership to optimize conversion and lead generation, supporting the company's growth strategy.",
        "Established a scalable, easy-to-maintain architecture to allow rapid content and feature updates."
      ]
    }
  }
];
