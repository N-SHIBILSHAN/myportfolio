import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  { name: "Docker", icon: docker },
];

const experiences: TExperience[] = [
  {
    title: "Full Stack Developer",
    companyName: "Personal Projects",
    icon: web,
    iconBg: "#383E56",
    date: "2025 - Present",
    points: [
      "Developed a full stack car showroom website using React, Node.js, and MongoDB.",
      "Implemented vehicle inventory management with category and price filtering.",
      "Integrated REST APIs for managing vehicle data and user enquiries.",
      "Deployed the application using Railway and GitHub.",
    ],
  },
  {
    title: "Frontend Developer",
    companyName: "Portfolio Projects",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "2024 - 2025",
    points: [
      "Built modern responsive websites using React and Tailwind CSS.",
      "Created interactive 3D portfolio using Three.js and Framer Motion.",
      "Developed reusable UI components and optimized performance.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Shibil is a talented developer who builds modern and scalable web applications.",
    name: "Client Review",
    designation: "Project Owner",
    company: "Freelance",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "The car showroom website developed by Shibil works smoothly and looks very professional.",
    name: "Business Owner",
    designation: "Client",
    company: "Auto Business",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Car Showroom Website",
    description:
      "A full stack web application for browsing and managing cars in a showroom. Users can view vehicles, filter by category, and send enquiries.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/N-SHIBILSHAN/cars",
  },
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and experience built using React and modern UI technologies.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/N-SHIBILSHAN/portfolio",
  },
  {
    name: "ShopEasy E-commerce",
    description:
      "An e-commerce platform where users can browse products, add items to cart, and manage orders.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "nodejs", color: "pink-text-gradient" },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/N-SHIBILSHAN/shopeasy",
  },
];

export { services, technologies, experiences, testimonials, projects };