import { advanced, intermediate, intro } from "@/Images";
import {
  faFacebook,
  faGithub,
  faGitlab,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faEnvelope,
  faGraduationCap,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export const DIPLOMES = [
  {
    title: "Master II",
    description:
      "Master I (Bac + 4) Informatiques parcours Base de Donnée et GénieLogiciel au CNTEMAD",
    year: "2023 - 2024",
    style: "zoom-in-down",
  },
  {
    title: "Licence professionnelle",
    description:
      "Diplôme Licence en informatique (Bases de données et Génie Logiciel) au Centre de Télé-Enseignement de Madagascar",
    year: "2020-2021",
    style: "fade-down",
  },
  {
    title: "Baccalauréat",
    description:
      "Diplôme du baccalauréat série C au Lycée Saint Joseph Ivato Aéroport",
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
    title: "SQL Advanced",
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
  },
  {
    stack_name: "Javascript",
    progress: 70,
  },
  {
    stack_name: "Typescript",
    progress: 60,
  },

  {
    stack_name: "C++",
    progress: 45,
  },
];

export const STACK_FRONT = [
  {
    stack_name: "HTML",
    progress: 80,
  },
  {
    stack_name: "CSS",
    progress: 80,
  },
  {
    stack_name: "Javascript",
    progress: 80,
  },
];

export const FRAMEWORKS_BACK = [
  {
    stack_name: "Symfony",
    progress: 80,
  },
  {
    stack_name: "Express JS",
    progress: 60,
  },
];

export const FRAMEWORKS_FRONT = [
  {
    stack_name: "React JS",
    progress: 80,
  },
  {
    stack_name: "Next JS",
    progress: 60,
  },
  {
    stack_name: "Angular JS",
    progress: 60,
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
