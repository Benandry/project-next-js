import {
  FaHome,
  FaLaptopCode,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";
import {
  faReact,
  faNodeJs,
  faPython,
  faDocker,
  faGitAlt,
  faPhp,
  faSymfony,
  faLaravel,
  faBootstrap,
  faHtml5,
  faCss3Alt,
  faGithub,
  faGitlab,
  faJira,
} from "@fortawesome/free-brands-svg-icons";

import {
  faServer,
  faCode,
  faToolbox,
  faDatabase, // Ajouté
} from "@fortawesome/free-solid-svg-icons";

export const navLinks = [
  { id: "home", icon: FaHome, text: "Accueil", path: "/" },
  { id: "skills", icon: FaCode, text: "Compétences", path: "/skills" },
  {
    id: "experience",
    icon: FaBriefcase,
    text: "Expérience",
    path: "/experience",
  },
  {
    id: "education",
    icon: FaGraduationCap,
    text: "Éducation",
    path: "/education",
  },
  { id: "projects", icon: FaLaptopCode, text: "Projets", path: "/projects" },
  { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
];

export const educations = [
  {
    period: "2023-08 - Présent",
    degree: "Master 2 en cours - Base de données et génie logiciel",
    institution: "Centre national de télé-enseignement de Madagascar",
  },
  {
    period: "01/2020 - 02/2022",
    degree: "License - Base de données et génie logiciel",
    institution: "Centre national de télé-enseignement de Madagascar",
  },
  {
    period: "2018",
    degree: "Baccalauréat Général",
    institution: "Lycée Saint Joseph Ivato Aéroport Antananarivo",
    details: "Série C",
  },
];

export const experiences = [
  {
    period: "05/2023 - Présent",
    title: "Développeur Full Stack",
    company: "DEV WEB SERVICE (DWS)",
    location: "Ambatoroaka Antananarivo",
    tasks: [
      "Développement d'applications web sur mesure pour les clients",
      "Collaboration avec les équipes techniques et fonctionnelles",
      "Maintenance et évolution de solutions existantes",
      "Intégration de solutions techniques innovantes",
      "Support technique pour les applications en production",
    ],
  },
  {
    period: "09/2022 - 02/2023",
    title: "Développeur Full Stack",
    company: "FIDEV",
    location: "Alasora Antananarivo",
    tasks: [
      "Création d'applications web responsive et performantes",
      "Conception d'interfaces utilisateur modernes",
      "Intégration de systèmes de paiement sécurisés",
      "Développement de fonctionnalités back-end complexes",
    ],
  },
  {
    period: "01/2022 - 08/2022",
    title: "Développeur Full Stack (Stage)",
    company: "Paositra Malagasy",
    location: "Antananarivo",
    tasks: [
      "Développement d'un système de gestion logistique",
      "Création de tableaux de bord analytiques",
      "Automatisation de processus métiers",
      "Intégration de solutions de sécurité informatique",
    ],
  },
];

export const projects = [
  {
    title: "Vision 360",
    date: "2024- présent",
    description:
      "A contribué au développement de l'application de reporting pour les boutiques Venum et Dragon Bleu.",
    tech: [faLaravel, faGitAlt, faGithub],
    demo: "#",
    code: "#",
  },

  {
    title: "Application de reporting - Version 1",
    date: "2023 - 02/2024",
    description:
      "Solution initiale avec génération de rapports et visualisation de données.",
    tech: [faSymfony, faBootstrap, faDocker, faGithub, faGitAlt],
    demo: "#",
    code: "#",
  },

  {
    title: "Microfinance Management",
    date: "09/2022 - 02/2023",
    description:
      "Tableau de bord interactif pour la visualisation de données financières",
    tech: [faSymfony, faNodeJs, faBootstrap, faGithub, faGitAlt],
    demo: "#",
    code: "#",
  },

  {
    title: "Gestion de stock",
    date: "01/2022 - 08/2022",
    description:
      "Application de gestion des stocks de produits postaux avec suivi des entrées, sorties et alertes de réapprovisionnement.",
    tech: [faSymfony, faNodeJs, faBootstrap, faGithub, faGitAlt],
    demo: "#",
    code: "#",
  },
];

export const skills = {
  backend: {
    title: "Back-End",
    icon: faServer,
    items: [
      { name: "Symfony", icon: faSymfony },
      { name: "Laravel", icon: faLaravel },
      { name: "PHP", icon: faPhp },
      { name: "MySQL", icon: faDatabase },
      { name: "PostgreSQL", icon: faDatabase },
    ],
  },
  frontend: {
    title: "Front-End",
    icon: faCode,
    items: [
      { name: "React/Next.js", icon: faReact },
      { name: "JavaScript", icon: faCode },
      { name: "Tailwind CSS", icon: faCode },
      { name: "Bootstrap", icon: faBootstrap },
      { name: "HTML5", icon: faHtml5 },
      { name: "CSS3", icon: faCss3Alt },
    ],
  },
  tools: {
    title: "Outils",
    icon: faToolbox,
    items: [
      { name: "VSCode", icon: faCode },
      { name: "Git", icon: faGitAlt },
      { name: "GitHub", icon: faGithub },
      { name: "GitLab", icon: faGitlab },
      { name: "Jira", icon: faJira },
      { name: "Postman", icon: faCode },
    ],
  },
};
