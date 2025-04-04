"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Title } from "@/components/Title";
import { skills } from "../constant/data";

export default function SkillsPage() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <section
      id="skills"
      className="relative py-20 md:py-24 bg-gray-900 min-h-screen overflow-hidden px-4 md:px-8"
    >
      {/* Arrière-plan avec motif de grille */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0" />

      {/* Effet de lumière animé */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-shimmer" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Title
          title="Compétences Techniques"
          subtitle="Des compétences solides pour transformer des idées en solutions numériques innovantes"
        />
        <div className="grid md:grid-cols-3 gap-8" data-aos="fade-up">
          {Object.entries(skills).map(([key, category], index) => (
            <div
              key={key}
              className="group relative p-[2px] rounded-2xl bg-gradient-to-br from-cyan-500/30 to-emerald-500/30 hover:shadow-2xl transition-all"
            >
              <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500">
                    <FontAwesomeIcon
                      icon={category.icon}
                      className="text-2xl text-white"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-100">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/30 transition-colors"
                      data-aos="fade-right"
                      data-aos-delay={idx * 50}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="text-lg text-cyan-400"
                      />
                      <span className="text-gray-300 text-sm font-medium">
                        {item.name}
                      </span>
                    </div>
                  ))}
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
