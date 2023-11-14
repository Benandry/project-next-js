"use client";
import { CardDiplome } from "@/components/CardDiplome";
import { CardOther } from "@/components/CardOther";
import { DIPLOMES, DIPLOMES_OTHERS } from "@/constants/data";
import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
    });
    AOS.refresh();
  }, []);
  return (
    <main className="flex flex-col items-center justify-between py-10">
      <div className="w-full">
        <div className="text-center p-10">
          <h2 className="text-2xl font-bold">Formations professionnelle</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center  gap-4 w-full px-2 md:px-40">
          {DIPLOMES.map(({ title, description, year, style }, index) => {
            return (
              <CardDiplome
                key={index}
                title={title}
                description={description}
                year={year}
                style={style}
              />
            );
          })}
        </div>
        <div className="text-center p-10">
          <h2 className="text-2xl font-bold">Autre formations</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center  gap-4 w-full px-2 md:px-40">
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
  );
}
