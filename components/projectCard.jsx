import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faCodeBranch,
  faRocket,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import HalfBar from "./HalfBar";

import Link from "next/link";

const ProjectCard = ({ project, index }) => {
  return (
    <div
      className="relative p-[1px] rounded-2xl bg-gradient-to-br from-cyan-500/30 to-emerald-500/30 hover:shadow-2xl transition-all"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl p-10 h-full flex flex-col">
        <HalfBar />
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg">
            <FontAwesomeIcon icon={faRocket} className="text-white text-xl" />
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
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 blur-xl opacity-30 transition-opacity" />
    </div>
  );
};

export default ProjectCard;
