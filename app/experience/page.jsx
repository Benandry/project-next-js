"use client";
import { Title } from "@/components/Title";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaBriefcase, FaCalendar } from "react-icons/fa";

export default function Page() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const experiences = [
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

  return (
    <section id="experience" className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="container mx-auto  mt-10">
        <Title title="Expériences Professionnelles" />

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.title}-${exp.company}`}
              className="relative p-[1px] rounded-2xl bg-gradient-to-br from-cyan-500/30 to-emerald-500/30 hover:shadow-2xl transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg">
                    <FontAwesomeIcon
                      icon={FaBriefcase}
                      className="text-white text-xl"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100">
                    {exp.title}
                  </h3>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <FontAwesomeIcon icon={FaCalendar} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span className="text-sm">
                      {exp.company} - {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.tasks.map((task, i) => (
                    <li
                      key={`${task}-${i}`}
                      className="flex items-center justify-start gap-2 text-gray-300 text-sm"
                      data-aos="fade-right"
                      data-aos-delay={i * 50}
                    >
                      <span className="text-cyan-400 mt-1">▹</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 blur-xl opacity-30 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
