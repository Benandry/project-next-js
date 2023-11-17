"use client";
import React from "react";
import TitlePage from "../TitlePage";
import Link from "next/link";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
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
          <TitlePage title="À propos de moi" />
        </div>
        <div data-aos="zoom-out-down" className="px-14">
          <p className="text-center text-gray-600 font-normal ">
            {" "}
            Je m'appelle{" "}
            <span className="font-semibold italic text-blue-400">
              {" "}
              RANDRIAMIHAINGO Herinandrianina Eloi Charly{" "}
            </span>
            , et je suis passionné par{" "}
            <span className="font-semibold"> développement web</span> avec de
            framework
            <span className="font-semibold text-blue-400">
              {" "}
              Symfony et Next JS{" "}
            </span>{" "}
            . Mon parcours dans le développement web a été jalonné par des
            expériences significatives.
          </p>
          <div className="flex justify-center py-7">
            <Link href="/#contact">
              <div className="text-center rounded w-36  hover:bg-transparent hover:text-gray-500 hover:border hover:border-gray-600 bg-blue-400 text-white p-2">
                Mon contact{" "}
              </div>
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
