import self from "../img/pfp.png";

export const info = {
  profile: {
    firstName: "Nimna",
    lastName: "Wijedasa",
    fullName: "Nimna Wijedasa",
    title: "Software Engineer",
    focus: "Cloud, Full-Stack, and Systems",
    status: "Software Engineering Graduate @ UCalgary",
    summary:
      "Software Engineering graduate from the University of Calgary with experience in cloud infrastructure, full-stack systems, geospatial data workflows, and performance engineering.",
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
    { id: "hackathons", label: "Hackathons" },
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
    eyebrow: "Software engineering graduate with production-minded delivery",
    headingTop: "SOFTWARE",
    headingBottom: "ENGINEER",
    blurb:
      "I build practical software across cloud infrastructure, data automation, and full-stack applications. My work spans AWS-based pipeline analysis, React product interfaces, geospatial tooling, and performance evaluation of distributed systems.",
  },
  stats: [
    {
      value: "BSc",
      label: "Software Engineering Graduate from the University of Calgary",
    },
    {
      value: "16",
      label: "Months of Engineering Internship Experience at TC Energy",
    },
    {
      value: "10+",
      label: "Projects across cloud, data automation, full-stack apps, and systems analysis",
    },
  ],
  highlightCards: [
    {
      theme: "orange",
      title: "Cloud & Data Automation",
      points: ["AWS", "Python ETL", "S3"],
    },
    {
      theme: "green",
      title: "Full-Stack Product Work",
      points: ["React", "Next.js", "APIs"],
    },
    {
      theme: "dark",
      title: "Systems & Geospatial Analysis",
      points: ["TeaStore", "JMeter", "ArcGIS"],
    },
  ],
  experience: [
    {
      period: "Most Recent",
      role: "Asset Management, Integrity & Reliability Intern",
      company: "TC Energy",
      description:
        "Built Power BI reporting, Power Automate workflows, SQL-backed geospatial data retrieval, ArcGIS visualizations, and AWS/Python analysis tooling for pipeline integrity and risk workflows.",
    },
    {
      period: "2021 - 2026",
      role: "BSc Software Engineering",
      company: "University of Calgary",
      description:
        "Graduated with project work spanning full-stack applications, cloud infrastructure, networked systems, Kubernetes, and performance analysis of distributed systems.",
    },
  ],
  projects: [
    {
      title: "Clutter",
      description:
        "Built a drag-and-drop cloud diagramming platform that generates deployable Terraform infrastructure, with serverless APIs and a Next.js interface.",
      stack: ["Next.js", "TypeScript", "Terraform", "Node.js APIs"],
      githubHref: "https://github.com/Alberta2514640/clutter.git",
    },
    {
      title: "TeaStore Performance Evaluation",
      description:
        "Analyzed a microservices-based system under workload pressure, using load testing and performance analysis to understand bottlenecks and system behavior.",
      stack: ["Microservices", "JMeter", "Performance Testing", "Analysis"],
      githubHref: "https://github.com/Not-Nimna/TeaStore.git",
    },
    {
      title: "Flight Reservation Web Application",
      description:
        "Built a full-stack reservation system with booking workflows, user data management, relational schemas, and a React-based frontend.",
      stack: ["Java", "Spring Boot", "React", "SQL"],
      githubHref: "https://github.com/Not-Nimna/flight_reservation.git",
    },
    {
      title: "Remembrance Web Application",
      description:
        "Implemented an obituary generation application using AWS services, ChatGPT API, Amazon Polly narration, Cloudinary media storage, and React.",
      stack: ["AWS Lambda", "Polly", "DynamoDB", "React"],
      githubHref: "https://github.com/ucalgary-ensf381/the-last-show-nimna-solo.git",
    },
    {
      title: "Neural Network from Scratch",
      description:
        "Implemented forward propagation, backpropagation, and gradient descent without deep learning frameworks, plus an interactive digit-classification notebook.",
      stack: ["Python", "NumPy", "ipycanvas", "Google Colab"],
      projectHref: "https://colab.research.google.com/drive/1a239pax1t2Q4b8VzmHALp2rVTwMiN8A2?usp=sharing",
      linkLabel: "Open Colab",
    },
    {
      title: "Kubernetes Deployment and Orchestration",
      description:
        "Deployed and managed containerized applications with Kubernetes, comparing blue-green and canary deployment strategies in a cloud-native environment.",
      stack: ["Kubernetes", "Docker", "Minikube", "YAML"],
      githubHref: "https://github.com/Not-Nimna/ensf400-lab8-kubernetes-2",
    },
    {
      title: "Pipeline Integrity Management System",
      description:
        "Developed a full-stack pipeline integrity platform with REST APIs, relational schemas, risk scoring analytics, and geospatial pipeline visualizations.",
      stack: ["C# ASP.NET Core", "React", "MS SQL Server", "REST APIs"],
      githubHref: "https://github.com/Not-Nimna/Pipeline-Integrity-Management-System.git",
    },
    {
      title: "Academia League",
      description:
        "Built an application-oriented project with multi-surface requirements, balancing frontend delivery with backend structure and maintainable implementation.",
      stack: ["Full-Stack", "React", "APIs", "Systems Thinking"],
      githubHref: "https://github.com/Not-Nimna/academia-league.git",
    },
  ],
  hackathons: [
    {
      title: "ZeroWaste",
      description:
        "Built a food waste tracking app with OCR-based grocery data extraction, expiration alerts, SQLAlchemy backend services, and a Material UI dashboard.",
      stack: ["React", "Node.js", "Python", "PostgreSQL"],
      event: "Hack the Change 2023",
      projectHref: "https://devpost.com/software/zerowaste-in2x8e",
      linkLabel: "View Devpost",
    },
    {
      title: "Urbanlytics",
      description:
        "Developed a geospatial analytics platform for neighbourhood insights using map-based filtering, sidebar analytics, and open data integrations.",
      stack: ["Next.js", "TypeScript", "Leaflet", "Open APIs"],
      event: "Hack the Change 2025",
      projectHref: "https://devpost.com/software/779z-performateamitive-urbanlytics",
      linkLabel: "View Devpost",
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
