"use client";
import { Title } from "@/components/Title";
import {
  faBriefcase,
  faCalendar,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Shape from "@/components/Shape";
import { experiences } from "@/app/constant/data";

export default function Experiences() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="experience"
      className="relative py-20 md:py-24 bg-gray-900 overflow-hidden px-4 md:px-8"
    >
        <Shape />
      <div className="container mx-auto  mt-10">
        <Title
          title="Expériences Professionnelles"
          subtitle="Construire, innover et évoluer à travers chaque mission"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      icon={faBriefcase}
                      className="text-white text-xl"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-100">
                    {exp.title}
                  </h3>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <FontAwesomeIcon icon={faCalendar} />
                    <span className="text-lg font-semibold">{exp.period}</span>
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
