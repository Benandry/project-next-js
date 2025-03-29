"use client";
import { Title } from "@/components/Title";
import { faGraduationCap, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function EducationPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const educations = [
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

  return (
    <section id="education" className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="container mx-auto mt-10">
        <Title title="Parcours Académique" />

        <div className="grid md:grid-cols-3 gap-8">
          {educations.map((edu, index) => (
            <div
              key={`${edu.degree}-${index}`}
              className="relative p-[1px] rounded-2xl bg-gradient-to-br from-cyan-500/30 to-emerald-500/30 hover:shadow-2xl transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg">
                    <FontAwesomeIcon
                      icon={faGraduationCap}
                      className="text-white text-xl"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100">
                    {edu.degree}
                  </h3>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <FontAwesomeIcon icon={faCalendar} />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                  <div className="text-emerald-400 text-sm">
                    {edu.institution}
                  </div>
                  {edu.details && (
                    <div className="text-gray-300 text-sm">{edu.details}</div>
                  )}
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
