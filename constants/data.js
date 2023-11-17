import { advanced, intermediate, intro } from "@/Images";

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
  },
  {
    link: "À propos",
    root: "/#about",
  },
  {
    link: "Formation",
    root: "/#formation",
  },
  {
    link: "Techonologie",
    root: "/#tech",
  },
  {
    link: "Contact",
    root: "/#contact",
  },
];
