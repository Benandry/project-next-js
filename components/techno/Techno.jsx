"use client";
import CardStack from "@/components/CardStack";
import OtherCard from "@/components/OtherCard";
import TitlePage from "@/components/TitlePage";
import {
  FRAMEWORKS_BACK,
  STACK_BACK,
  STACK_FRONT,
  FRAMEWORKS_FRONT,
} from "@/constants/data";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { faCode } from "@fortawesome/free-solid-svg-icons";
export default function Techno() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
    });
    AOS.refresh();
  }, []);
  return (
    <section id="tech">
      <main className="flex flex-col items-center justify-between py-10 ">
        <div className="w-full">
          <TitlePage icon={faCode} title="Techno utilisée" />
          <div className="flex flex-col md:flex-row justify-center  gap-4 w-full px-2 md:px-20">
            <CardStack
              style="zoom-in-down"
              title="Backend"
              techno={STACK_BACK}
              framework={FRAMEWORKS_BACK}
            />
            <CardStack
              style="fade-up"
              title="Frontend"
              techno={STACK_FRONT}
              framework={FRAMEWORKS_FRONT}
            />

            <OtherCard style="zoom-in-up" />
          </div>
        </div>
      </main>
    </section>
  );
}
