"use client";
import { Title } from "@/components/Title";
import { faGraduationCap, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { educations } from "../constant/data";
import Bar from "@/components/Bar";
import Shape from "@/components/Shape";

export default function EducationPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <section
      id="education"
      className="relative py-20 md:py-24 bg-gray-900 min-h-screen overflow-hidden px-4 md:px-8"
    >
        <Shape />
      <div className="container mx-auto mt-10">
        <Title
          title="Parcours Académique"
          subtitle="Un voyage d’apprentissage et d’expertise à travers les années"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educations.map((edu, index) => (
            <div
              key={`${edu.degree}-${index}`}
              className="relative  rounded-2xl bg-gradient-to-br from-cyan-500/30 to-emerald-500/30 hover:shadow-2xl transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl p-10 h-full relative">
                <Bar />
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg">
                    <FontAwesomeIcon
                      icon={faGraduationCap}
                      className="text-white text-xl"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-100">
                    {edu.degree}
                  </h3>
                </div>

                <div className="space-y-2 mb-4 pl-4">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <FontAwesomeIcon icon={faCalendar} />
                    <span className="text-lg font-semibold">{edu.period}</span>
                  </div>
                  <div className="text-emerald-400 text-sm">
                    {edu.institution}
                  </div>
                  {edu.details && (
                    <div className="text-gray-300 text-lg">{edu.details}</div>
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
