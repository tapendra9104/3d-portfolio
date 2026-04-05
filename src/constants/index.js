import {
  mobile,
  backend,
  creator,
  web,
  github,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
} from "../assets";

export const personalInfo = {
  name: "Tapendra Chaudhary",
  shortName: "Tapendra",
  email: "tapendrachy9761@gmail.com",
  githubUsername: "tapendra9104",
  githubUrl: "https://github.com/tapendra9104",
  heroSubtitle:
    "I build AI-powered products, full-stack platforms, and practical business applications.",
  overview:
    "I'm Tapendra Chaudhary, a full-stack developer building AI-enabled products, management systems, and automation tools. My public GitHub work covers QR platforms, travel booking systems, ERP automation, hospital analytics, investigation workflows, and AI chat products using JavaScript, TypeScript, Python, Java, React, Node.js, FastAPI, Flask, and Spring Boot.",
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "AI Product Builder",
    icon: creator,
  },
  {
    title: "Backend & API Developer",
    icon: backend,
  },
  {
    title: "Responsive Frontend Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Smart QR Platform Development",
    company_name: "Smart QR Management System",
    icon: web,
    iconBg: "#383E56",
    date: "March 2026",
    points: [
      "Built a full-stack QR management platform for generating, customizing, tracking, and managing dynamic QR codes.",
      "Designed the product to work smoothly across desktop, Android, and iOS browsers.",
      "Shipped a public demo and open GitHub repository for a production-style business workflow.",
    ],
  },
  {
    title: "Travel Booking System",
    company_name: "Tour and Travel Management System",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "March 2026",
    points: [
      "Created an industry-style tourism and booking platform with traveler and admin dashboards.",
      "Used Java, Spring Boot, MySQL, and frontend web technologies to support bookings, payments, waitlists, and notifications.",
      "Structured the project around real operational flows instead of a basic demo-only interface.",
    ],
  },
  {
    title: "WhatsApp ERP Automation",
    company_name: "QUMS Chat Bot",
    icon: backend,
    iconBg: "#383E56",
    date: "March 2026",
    points: [
      "Built a Python and Flask WhatsApp bot that connects with Quantum University ERP after CAPTCHA-assisted login.",
      "Automated timetable, substitution, and attendance updates through Twilio messaging workflows.",
      "Included a local admin dashboard and scheduler to support repeatable daily usage.",
    ],
  },
  {
    title: "AI Application Development",
    company_name: "AI Chat App and Patient Risk Systems",
    icon: github,
    iconBg: "#E6DEDD",
    date: "March 2026",
    points: [
      "Published AI-focused platforms covering chat workflows, patient risk prediction, and investigation support systems.",
      "Worked across TypeScript, React, FastAPI, Flask, and scikit-learn to build dashboard-driven products.",
      "Focused on practical admin features, analytics, explainability, and demo-ready deployments.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "My GitHub profile currently showcases 15 public repositories focused on AI systems, dashboards, booking platforms, automation tools, and business workflow applications.",
    name: "Tapendra Chaudhary",
    designation: "GitHub Profile",
    company: "tapendra9104",
    image: "https://avatars.githubusercontent.com/u/144896604?v=4",
  },
  {
    testimonial:
      "Recent repositories span JavaScript, TypeScript, Python, and Java with a clear focus on complete products, backend APIs, polished dashboards, and deployable user experiences.",
    name: "Stack Focus",
    designation: "Languages",
    company: "JavaScript, TypeScript, Python, Java",
    image: "https://avatars.githubusercontent.com/u/144896604?v=4",
  },
  {
    testimonial:
      "Live demos and production-style README descriptions show a strong emphasis on shipping usable applications, not just building isolated prototypes.",
    name: "Project Delivery",
    designation: "Live Work",
    company: "GitHub + Vercel",
    image: "https://avatars.githubusercontent.com/u/144896604?v=4",
  },
];

const projects = [
  {
    name: "Smart QR Management System",
    description:
      "Smart QR Management System is a full-stack QR platform for generating, customizing, managing, scanning, and tracking dynamic QR codes across desktop, Android, and iOS browsers.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "qr-platform",
        color: "green-text-gradient",
      },
      {
        name: "vercel",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://opengraph.githubassets.com/1/tapendra9104/Smart-QR-Management-System",
    source_code_link:
      "https://github.com/tapendra9104/Smart-QR-Management-System",
    demo_link: "https://smart-qr-management-system.vercel.app",
  },
  {
    name: "Tour and Travel Management System",
    description:
      "Industry-ready tourism management and travel booking platform built with Java, Spring Boot, MySQL, HTML/CSS/JS, featuring traveler and admin dashboards, bookings, payments, inquiries, waitlists, notifications, and tour management.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://opengraph.githubassets.com/1/tapendra9104/Tour-and-Travel-Management-System",
    source_code_link:
      "https://github.com/tapendra9104/Tour-and-Travel-Management-System",
  },
  {
    name: "QUMS Chat Bot",
    description:
      "QUMS ERP WhatsApp bot built with Python and Flask that fetches timetable, substitutions, and attendance data, then sends daily schedule and lecture-wise attendance updates over WhatsApp via Twilio.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "twilio",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://opengraph.githubassets.com/1/tapendra9104/QUMS-Chat-Bot",
    source_code_link: "https://github.com/tapendra9104/QUMS-Chat-Bot",
  },
  {
    name: "AI-Based Patient Risk Stratification",
    description:
      "AI-powered hospital patient risk stratification dashboard built with Flask, scikit-learn, SQLite, and HTML/CSS/JS frontend. It predicts patient risk levels, explains top contributing factors, visualizes assessments, and supports Docker deployment.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://opengraph.githubassets.com/1/tapendra9104/AI-Based-Patient-Risk-Stratification-system",
    source_code_link:
      "https://github.com/tapendra9104/AI-Based-Patient-Risk-Stratification-system",
    demo_link: "https://ai-based-patient-risk-stratificatio.vercel.app",
  },
  {
    name: "AI Chat App",
    description:
      "IntelliChat is a full-stack AI chat application built with Next.js and FastAPI. It supports Gemini-powered conversations, grounded document question answering, website analysis, text transformation, persistent chat history, and admin workflows.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "fastapi",
        color: "pink-text-gradient",
      },
    ],
    image: "https://opengraph.githubassets.com/1/tapendra9104/AI-chat-app",
    source_code_link: "https://github.com/tapendra9104/AI-chat-app",
  },
  {
    name: "AI-Powered Criminal Management System",
    description:
      "Full-stack criminal investigation platform built with React, Express, Sequelize, and FastAPI for FIR handling, evidence tracking, criminal records, and AI-assisted analysis.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://opengraph.githubassets.com/1/tapendra9104/AI-Powered-Criminal-Management-and-Investigation-System",
    source_code_link:
      "https://github.com/tapendra9104/AI-Powered-Criminal-Management-and-Investigation-System",
    demo_link: "https://ai-powered-criminal-management-and.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
