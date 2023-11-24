"use client";
import React from "react";
import TitlePage from "../TitlePage";
import Link from "next/link";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { faCheck, faComment } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { bulb } from "@/Images";
import { competence } from "@/constants/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
    });
    AOS.refresh();
  }, []);
  return (
    <section id="about">
      <main className="flex flex-col items-center justify-between py-10 ">
        <div className="w-full">
          <TitlePage icon={faComment} title="À propos de moi" />
        </div>
        <div className="px-3 md:border md:border-gray-600 md:shadow-md shadow-gray-400 rounded-md md:mx-20 ">
          <div className="flex flex-col md:flex-row justify-center items-center m-10   ">
            <div className="overflow-hidden hidden md:block">
              <div className="px-3">
                <Image
                  src={bulb.src}
                  width={500}
                  height={700}
                  alt="Bulb image"
                />
              </div>
            </div>
            <div className="md:px-14">
              <p className="text-start text-sm md:text-md text-gray-600 font-normal leading-7 ">
                {" "}
                Je suis{" "}
                <span className="font-semibold italic text-blue-400">
                  {" "}
                  RANDRIAMIHAINGO Herinandrianina Eloi Charly{" "}
                </span>
                , et je suis passionné par{" "}
                <span className="font-semibold"> développement web</span> avec
                de framework
                <span className="font-semibold text-blue-400">
                  {" "}
                  Symfony et React JS{" "}
                </span>{" "}
                . Mon parcours dans le développement web a été jalonné par des
                expériences significatives.
              </p>
              <div className="py-3">
                <h3 className="text-gray-600 text-xl font-semibold">
                  {" "}
                  Mes Qualifications{" "}
                </h3>
              </div>
              <div className="px-5 leading-8 md:leading-6  text-sm">
                {competence.map(({ title }, index) => {
                  return (
                    <div key={index} className="text-gray-600 ">
                      <FontAwesomeIcon icon={faCheck} className="pr-5" />
                      {title}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
