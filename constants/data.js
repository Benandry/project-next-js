import { advanced, intermediate, intro } from "@/Images";
import {
  faAngular,
  faCss3,
  faFacebook,
  faGithub,
  faGitlab,
  faHtml5,
  faJs,
  faLinkedin,
  faNode,
  faPhp,
  faReact,
  faSymfony,
} from "@fortawesome/free-brands-svg-icons";
import {
  faC,
  faCode,
  faEnvelope,
  faFileCode,
  faGraduationCap,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export const DIPLOMES = [
  {
    title: "Master II",
    parcour: "Base de Donnée et Génie Logiciel",
    school: "Centre National  de Télé-Enseignement de Madagascar",
    year: "2023 - 2024",
    style: "zoom-in-down",
  },
  {
    title: "Licence professionnelle",
    parcour: " Bases de données et Génie Logiciel",
    school: "Centre National  de Télé-Enseignement de Madagascar",
    year: "2020-2021",
    style: "fade-down",
  },
  {
    title: "Baccalauréat",
    parcour: "série C ",
    school: "Lycée Saint Joseph Ivato Aéroport",
    year: "2017-2018",
    style: "zoom-in-up",
  },
];

export const DIPLOMES_OTHERS = [
  {
    title: "Introduction to JavaScript",
    link: "https://www.sololearn.com/certificates/CC-2XKHVI3I",
    imgSrc: intro,
    style: "zoom-in-down",
  },

  {
    title: "JavaScript Intermediare",
    link: "https://www.sololearn.com/certificates/CC-KTNJT4IJ",
    imgSrc: intermediate,
    style: "fade-up",
  },
  {
    title: "JavaScript Advanced",
    link: "https://www.sololearn.com/certificates/CC-NPAAGXND",
    imgSrc: advanced,
    style: "zoom-in-up",
  },
];

export const STACK_BACK = [
  {
    stack_name: "PHP",
    progress: 80,
    logo: faPhp,
  },
  {
    stack_name: "Javascript",
    progress: 70,
    logo: faJs,
  },
  {
    stack_name: "Typescript",
    progress: 60,
    logo: faFileCode,
  },

  {
    stack_name: "C++",
    progress: 45,
    logo: faFileCode,
  },
];

export const STACK_FRONT = [
  {
    stack_name: "HTML",
    progress: 80,
    logo: faHtml5,
  },
  {
    stack_name: "CSS",
    progress: 80,
    logo: faCss3,
  },
  {
    stack_name: "Javascript",
    progress: 80,
    logo: faJs,
  },
];

export const FRAMEWORKS_BACK = [
  {
    stack_name: "Symfony",
    progress: 80,
    logo: faSymfony,
  },
  {
    stack_name: "Express JS",
    progress: 60,
    logo: faNode,
  },
];

export const FRAMEWORKS_FRONT = [
  {
    stack_name: "React JS",
    progress: 80,
    logo: faReact,
  },
  {
    stack_name: "Next JS",
    progress: 60,
    logo: faReact,
  },
  {
    stack_name: "Angular JS",
    progress: 60,
    logo: faAngular,
  },
];

export const NAV_LINK = [
  {
    link: "Accueil",
    root: "/#home",
    icon: faHome,
  },
  {
    link: "À propos",
    root: "/#about",
    icon: faInfoCircle,
  },
  {
    link: "Formation",
    root: "/#formation",
    icon: faGraduationCap,
  },
  {
    link: "Techonologie",
    root: "/#tech",
    icon: faCode,
  },
  {
    link: "Contact",
    root: "/#contact",
    icon: faPhone,
  },
];

export const CONTACT_ = [
  {
    icon: faPhone,
    content: "034 60 559 29",
    link: "tel:+261346055929",
    title: "Mobile",
  },
  {
    icon: faEnvelope,
    content: "nandry556@gmail.com",
    link: "mailto:nandry556@gmail.com",
    title: "Email",
  },
  {
    icon: faFacebook,
    content: "Herinandrianina Andriamihaingo",
    link: "https://www.facebook.com/nandry.multiplix",
    title: "Facebook",
  },

  {
    icon: faLinkedin,
    content: "Herinandrianina RANDRIAMIHAINGO",
    link: "https://www.linkedin.com/in/herinandrianina-randriamihaingo-566007254/",
    title: "Linkedin",
  },
];

export const GitLink = [
  {
    icon: faGithub,
    content: "Compte github",
    link: "https://github.com/Benandry",
    title: "Github",
  },
  {
    icon: faGitlab,
    content: "Compte gitlab",
    link: "https://gitlab.com/Herinandrianina",
    title: "Gitlab",
  },
];

export const LINK_ = [
  "Acceuil",
  "À propos",
  "Formation",
  "Techonologie",
  "Contact",
];

export const TECH = ["Symfony", "React JS", "Next JS", "Shopify", "Angular"];
export const CTN = [
  "034 60 559 29 ",
  "nandry556@gmail.com",
  "Herinandrianina Andriamihaingo",
];
