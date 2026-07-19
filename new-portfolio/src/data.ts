export type Project = {
  title: string;
  description: string;
  image: string;
  url: string;
  category: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "MintFace App",
    description: "Discover, collect, and showcase unique NFT avatars.",
    image: "/assets/project18.png",
    url: "https://appmintface.vercel.app/",
    category: "Mobile / Web3",
    tags: ["React Native", "NFT", "Web3", "TypeScript"],
  },
  {
    title: "Habit Flow",
    description: "A mobile habit tracker built with React Native and Expo.",
    image: "/assets/project16.png",
    url: "https://habit-flow.vercel.app/",
    category: "Mobile App",
    tags: ["React Native", "Expo", "iOS", "Android"],
  },
  {
    title: "DROAM",
    description: "A clean, high-performing website with a smooth user experience.",
    image: "/assets/project15.png",
    url: "https://droam.com/",
    category: "Client Website",
    tags: ["WordPress", "HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Horobchyk Mobile App",
    description: "A social mobile app for Ukrainians, supported by USAID.",
    image: "/assets/project17.png",
    url: "https://horobchyk-landing-git-master-pavkots-projects.vercel.app/",
    category: "Mobile App",
    tags: ["React Native", "Expo", "iOS", "Android"],
  },
  {
    title: "The Watch Spot",
    description: "A modern e-commerce platform built with React and TypeScript.",
    image: "/assets/project14.png",
    url: "https://pavkot.github.io/build8/",
    category: "E-commerce",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Major Car Dealers",
    description: "A responsive car dealership website with dynamic filtering and search.",
    image: "/assets/project13.png",
    url: "https://pavkot.github.io/build7/",
    category: "Web App",
    tags: ["React.js", "CSS3"],
  },
  {
    title: "NFT Landing Page",
    description: "A modern NFT marketplace landing page with smooth animation.",
    image: "/assets/project1.png",
    url: "https://pavkot.github.io/build/",
    category: "Landing Page",
    tags: ["React.js", "Animation"],
  },
  {
    title: "Hotel Booking Platform",
    description: "A full-featured hotel booking experience with user authentication.",
    image: "/assets/project2.png",
    url: "https://pavkot.github.io/build2/",
    category: "Web Platform",
    tags: ["React.js", "UI/UX"],
  },
  {
    title: "Aware Zone",
    description: "A youth hub landing page with custom interactions and animation.",
    image: "/assets/project10.png",
    url: "https://aware-zone.com/",
    category: "Social Impact",
    tags: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Horobchyk",
    description: "A corporate website for a socially responsible company.",
    image: "/assets/project11.png",
    url: "https://horobchyk.com/",
    category: "Client Website",
    tags: ["HTML5", "CSS3"],
  },
];

export const services = [
  {
    name: "Frontend Development",
    description:
      "Fast, accessible interfaces built with HTML5, CSS3, JavaScript, React, and TypeScript, backed by clean and reusable code.",
  },
  {
    name: "Mobile Development",
    description:
      "Responsive cross-platform products for iOS and Android using React Native, Expo, API integration, and thoughtful state management.",
  },
  {
    name: "Responsive Design",
    description:
      "Mobile-first digital experiences created with flexible systems, CSS Grid, Flexbox, and careful attention to every screen size.",
  },
  {
    name: "E-commerce",
    description:
      "Conversion-focused WordPress, Shopify, and WooCommerce builds, from product pages and custom themes to complete checkout flows.",
  },
  {
    name: "UI / UX Design",
    description:
      "Clear, user-centered experiences shaped through research, wireframes, prototypes, and polished visuals in Figma and Adobe tools.",
  },
];

export const experiences = [
  {
    date: "December 2025 — Now",
    role: "Mobile Developer",
    company: "Redentu",
    bullets: [
      "Developed mobile applications using React Native, ensuring functional and responsive user interfaces.",
      "Built reusable UI components with Tailwind-based styling approaches for consistent design systems.",
      "Integrated REST APIs for authentication, data sync, and real-time app features.",
      "Improved app performance through screen optimization, state management, and code refactoring.",
    ],
    tags: ["React Native", "Tailwind CSS", "API Integration", "TypeScript"],
  },
  {
    date: "December 2024 — December 2025",
    role: "Front-end Developer",
    company: "DROAM",
    bullets: [
      "Developed and customized WordPress and Shopify websites, ensuring seamless functionality and responsive design.",
      "Optimized site performance and loading speed, improving user experience and engagement.",
      "Configured plugins, themes, and e-commerce functionalities to meet client requirements.",
      "Created and customized landing pages, product pages, and checkout flows for Shopify stores.",
    ],
    tags: ["WordPress", "Shopify", "E-commerce"],
  },
  {
    date: "June 2023 — August 2024",
    role: "IT Coordinator & Front-End Mobile Developer",
    company: "UCIR",
    bullets: [
      "Developed mobile applications using React Native, ensuring functional and responsive user interfaces.",
      "Optimized UI/UX design to improve user satisfaction and engagement.",
      "Designed and developed landing pages for startups with responsive layouts.",
      "Optimized websites for SEO, improving visibility on search engines.",
      "Created branded banners, posters, and visuals for both print and digital platforms.",
    ],
    tags: ["React Native", "UI/UX", "TypeScript", "Design"],
  },
  {
    date: "September 2022 — May 2023",
    role: "Graphic Designer",
    company: "Solidarna Molod",
    bullets: [
      "Developed creative and innovative designs for various digital and print materials.",
      "Collaborated with clients and the marketing team to understand design requirements and project goals.",
      "Created wireframes, mockups, and prototypes using Figma to visualize design concepts.",
      "Utilized design tools such as Adobe Photoshop and Illustrator.",
      "Implemented user-centered design principles to enhance user experience.",
      "Prepared design assets for web and print production.",
    ],
    tags: ["Figma", "Photoshop", "Illustrator", "UI/UX"],
  },
  {
    date: "Ongoing",
    role: "Freelance Developer & Designer",
    company: "Upwork & Fiverr",
    bullets: [
      "Worked on multiple projects with clients from various fields.",
      "Created visually appealing designs for websites, mobile applications, and marketing materials.",
      "Built multi-page websites using WordPress, customizing themes and plugins.",
      "Collaborated remotely with clients to ensure project objectives were met.",
      "Managed multiple projects simultaneously and delivered high-quality designs within deadlines.",
    ],
    tags: ["React", "React Native", "WordPress", "Web Design", "Remote Work"],
  },
];

export const marqueeImages = Array.from(
  { length: 18 },
  (_, index) => `/assets/project${index + 1}.png`,
);
