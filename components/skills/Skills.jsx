"use client";
import { CardDiplome } from "@/components/CardDiplome";
import { CardOther } from "@/components/CardOther";
import TitlePage from "@/components/TitlePage";
import { DIPLOMES, DIPLOMES_OTHERS } from "@/constants/data";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
    });
    AOS.refresh();
  }, []);
  return (
    <section id="formation">
      <main className="flex flex-col items-center justify-between py-10">
        <div className="w-full">
          <TitlePage
            icon={faGraduationCap}
            title="Formations professionnelle"
          />
          <div className="flex flex-col md:flex-row justify-center  gap-4 w-full px-3 md:px-20">
            {DIPLOMES.map(({ title, parcour, year, style }, index) => {
              return (
                <CardDiplome
                  key={index}
                  index={index}
                  title={title}
                  parcour={parcour}
                  year={year}
                  style={style}
                />
              );
            })}
          </div>
          <div className="text-center p-10">
            <TitlePage icon={faGraduationCap} title="Autre formations" />
          </div>
          <div className="flex flex-col md:flex-row justify-center  gap-4 w-full px-2 md:px-20">
            {DIPLOMES_OTHERS.map(({ title, link, imgSrc, style }, index) => {
              return (
                <CardOther
                  key={index}
                  title={title}
                  link={link}
                  imageSrc={imgSrc}
                  style={style}
                />
              );
            })}
          </div>
        </div>
      </main>
    </section>
  );
}
