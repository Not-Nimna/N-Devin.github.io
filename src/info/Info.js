import self from "../img/pfp.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";

export let colors = ["rgb(111, 232, 237)", "rgb(5, 34, 68)"];

export const info = {
  firstName: "Nimna",
  lastName: "Wijedasa",
  initials: "NW",
  position: "a Software engineering student",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "🇱🇰",
      text: "From Sri Lanka",
    },
    {
      emoji: "🌎",
      text: "based in Calgary",
    },
    {
      emoji: "🎓",
      text: "Student at the University of Calgary",
    },
    {
      emoji: "✉️",
      text: "nimnawijedasa@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://www.facebook.com/notnimna/",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://www.instagram.com/nimna.wjd/",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/notnimna4761",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://linkedin.com/in/nimnawijedasa",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com/notnimna",
      icon: "fa fa-twitter",
      label: "twitter",
    },
  ],

  bio: "Hey! how's it going I am Nimna Wijedasa, a Software Engineering student at the University of Calgary. I love building random things that make no sense whatsover but thats the fun part. on a serious note I love leanring about Machine learning with neurual nets beign the current topic of obsession. while on the not career realted side i follow F1 religoesly ( go WEEEYUMS!) while also i enjoy keeping fit and hitting the gym but will also never say no to a cookie.",
  skills: {
    proficientWith: [
      "Python",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "TensorFlow",
      "PyTorch",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "Git",
      "REST APIs",
      "SQL",
      "PostgreSQL",
      "AWS (EC2, S3, Lambda, DynamoDB)",
      "Docker",
      "Terraform",
      "Figma",
    ],
    exposedTo: ["LSTM / CNN architectures", "MLOps", "CI/CD (GitHub Actions)", "Webpack / Vite", "Tailwind CSS", "shadcn/ui", "C++", "Java", "GraphQL", "Mapbox GL JS", "OpenAI / LLM APIs", "CUDA", "Microservices"],
  },
  hobbies: [
    {
      label: "working out",
      emoji: "🏋️",
    },
    {
      label: "playing guitar",
      emoji: "🎸",
    },
    {
      label: "F1",
      emoji: "🏎️",
    },
    {
      label: "cooking",
      emoji: "🍳",
    },
  ],
  portfolio: [
    {
      title: "TuneMatch",
      live: "https://mellifluous-bonbon-afcbd6.netlify.app/",
      source: "https://github.com/N-Devin/GPT-music",
      image: mock1,
    },
    {
      title: "Lotion",
      live: "https://eclectic-chimera-99d091.netlify.app/",
      source: "https://github.com/N-Devin/Lotion",
      image: mock2,
    },
    {
      title: "Wordle",
      live: "https://taupe-syrniki-bcfa1b.netlify.app/",
      source: "https://github.com/N-Devin/wordle",
      image: mock3,
    },
  ],
};
