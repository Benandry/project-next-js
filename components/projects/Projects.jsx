"use client";
import React from "react";
import TitlePage from "../TitlePage";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import CardProject from "../CardProject";
const Projects = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
    });
    AOS.refresh();
  }, []);
  return (
    <section id="projects">
      <main className="flex flex-col items-center justify-between py-10 ">
        <div className="w-full">
          <TitlePage icon={faBriefcase} title="Mes projets" />
        </div>
        <div className="px-3  md:mx-20 ">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 flex-wrap">
            <CardProject />
            <CardProject />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Projects;
