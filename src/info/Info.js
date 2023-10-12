import self from "../img/self.png";
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
      link: "https://www.instagram.com/notnimna/",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/notnimna4761",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "www.linkedin.com/in/nimnawijedasa",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com/notnimna",
      icon: "fa fa-twitter",
      label: "twitter",
    },
  ],
  bio: "Greetings! I'm Nimna, a passionate Software Engineering student enrolled at the esteemed University of Calgary. As an avid seeker of thrilling experiences, I thrive on activities that send my veins pulsating with adrenaline. In my view, I firmly uphold the belief that true greatness stems from one's unwavering commitment to discipline and self-improvement.  ",
  skills: {
    proficientWith: [
      "java",
      "react",
      "C/C++",
      "github",
      "Python",
      "SQL",
      "HTML/CSS",
      "aws/amplify",
    ],
    exposedTo: ["data structures / algorithms", "linux", "tensorflow"],
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
      label: "stock trading",
      emoji: "📈",
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
