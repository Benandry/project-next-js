"use client";
import { Title } from "@/components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faCodeBranch,
  faRocket,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faNodeJs,
  faPython,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";

export default function ProjectsPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const projects = [
    {
      title: "Application de gestion logistique",
      date: "2024",
      description:
        "Plateforme de suivi de colis en temps réel avec analyse prédictive",
      tech: [faReact, faNodeJs, faDocker],
      demo: "#",
      code: "#",
    },
    {
      title: "Plateforme e-commerce",
      date: "2023",
      description:
        "Solution complète avec système de paiement et recommandation IA",
      tech: [faReact, faPython, faDocker],
      demo: "#",
      code: "#",
    },
    {
      title: "Outil d'analyse financière",
      date: "2022",
      description:
        "Tableau de bord interactif pour la visualisation de données financières",
      tech: [faReact, faNodeJs, faPython],
      demo: "#",
      code: "#",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="container mx-auto mt-8">
        <Title title="Projets Récents" />

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative p-[1px] rounded-2xl bg-gradient-to-br from-cyan-500/30 to-emerald-500/30 hover:shadow-2xl transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg">
                    <FontAwesomeIcon
                      icon={faRocket}
                      className="text-white text-xl"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100">
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-cyan-400 mb-3">
                  <FontAwesomeIcon icon={faCalendar} />
                  <span className="text-sm">{project.date}</span>
                </div>

                <p className="text-gray-300 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex items-center gap-3 mb-4">
                  {project.tech.map((icon, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={icon}
                      className="text-2xl text-emerald-400"
                    />
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <Link
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 transition-colors"
                  >
                    <FontAwesomeIcon icon={faGlobe} />
                    <span className="text-sm">Voir le projet</span>
                  </Link>
                  <Link
                    href={project.code}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 transition-colors"
                  >
                    <FontAwesomeIcon icon={faCodeBranch} />
                    <span className="text-sm">Code source</span>
                  </Link>
                </div>
              </div>

              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 blur-xl opacity-30 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
