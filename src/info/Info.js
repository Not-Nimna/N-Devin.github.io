import self from "../img/pfp.png";

export const info = {
  profile: {
    firstName: "Nimna",
    lastName: "Wijedasa",
    fullName: "Nimna Wijedasa",
    title: "Software Engineer",
    focus: "Cloud, Full-Stack, and Systems",
    status: "Software Engineering Student @ UCalgary",
    summary:
      "Software Engineering student at the University of Calgary with experience in cloud infrastructure, full-stack systems, and performance engineering.",
    detail:
      "Built scalable applications using AWS, Terraform, and React, and worked on microservice performance analysis under real-world workloads.",
    portrait: self,
    email: "nimnawijedasa@gmail.com",
    location: "Calgary, Alberta",
    background: "Originally from Sri Lanka",
    resumeLabel: "Resume available on request",
  },
  navigation: [
    { id: "hero", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ],
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/notnimna4761",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/nimnawijedasa",
    },
    {
      label: "Email",
      href: "mailto:nimnawijedasa@gmail.com",
    },
  ],
  hero: {
    eyebrow: "Cloud-first builder with systems depth",
    headingTop: "SOFTWARE",
    headingBottom: "ENGINEER",
    blurb:
      "Building scalable cloud systems and performance-driven applications with a full-stack mindset. I care about infrastructure, product execution, and how software behaves under load.",
  },
  stats: [
    {
      value: "4th",
      label: "Year Software Engineering Student",
    },
    {
      value: "1",
      label: "Software Engineering Internship at TC Energy",
    },
    {
      value: "3+",
      label: "Large-Scale Projects across cloud, microservices, and full-stack apps",
    },
  ],
  highlightCards: [
    {
      theme: "orange",
      title: "Cloud & Infrastructure",
      points: ["AWS", "Terraform", "Docker"],
    },
    {
      theme: "green",
      title: "Full-Stack Development",
      points: ["React", "Node.js APIs", "PostgreSQL"],
    },
    {
      theme: "dark",
      title: "Systems & Performance",
      points: ["TeaStore", "JMeter", "Load Analysis"],
    },
  ],
  experience: [
    {
      period: "Most Recent",
      role: "Software Engineering Intern",
      company: "TC Energy",
      description:
        "Worked in a real engineering environment where reliability, maintainability, and practical delivery mattered. Experience shaped how I think about production systems and engineering tradeoffs.",
    },
    {
      period: "Current",
      role: "Software Engineering Student",
      company: "University of Calgary",
      description:
        "Focused on cloud systems, full-stack application development, and the performance behavior of distributed systems.",
    },
  ],
  projects: [
    {
      title: "Clutter",
      description:
        "A full-stack product experience centered on clean workflows, strong UX, and practical application structure.",
      stack: ["React", "Node.js", "PostgreSQL", "Product Design"],
    },
    {
      title: "TeaStore Performance Evaluation",
      description:
        "Analyzed a microservices-based system under workload pressure, using load testing and performance analysis to understand bottlenecks and system behavior.",
      stack: ["Microservices", "JMeter", "Performance Testing", "Analysis"],
    },
    {
      title: "Academia League",
      description:
        "Built an application-oriented project with multi-surface requirements, balancing frontend delivery with backend structure and maintainable implementation.",
      stack: ["Full-Stack", "React", "APIs", "Systems Thinking"],
    },
  ],
  technicalAreas: [
    {
      title: "Cloud & Infrastructure",
      items: ["AWS", "Terraform", "Docker", "Lambda", "S3", "Fargate"],
    },
    {
      title: "Application Engineering",
      items: ["React", "Next.js", "Node.js", "TypeScript", "REST APIs", "SQL"],
    },
    {
      title: "Systems Perspective",
      items: ["Microservices", "Performance Analysis", "Load Testing", "Scalability"],
    },
  ],
  contact: {
    title: "Let’s build something reliable and scalable.",
    text:
      "I’m most interested in software roles where I can work across applications, infrastructure, and system behavior.",
    primaryLabel: "Email Me",
    primaryHref: "mailto:nimnawijedasa@gmail.com",
    secondaryLabel: "Open LinkedIn",
    secondaryHref: "https://linkedin.com/in/nimnawijedasa",
  },
};
