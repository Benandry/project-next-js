"use client";

import { Title } from "@/components/Title";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { projects } from "../constant/data";

// Importation de Swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProjectCard from "@/components/projectCard";

export default function ProjectsPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 py-20 px-4 md:px-8"
    >
      <div className="container mx-auto mt-8">
        <Title
          title="Projets Récents"
          subtitle="Transformer les idées en réalité numérique, un projet à la fois"
        />

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="mt-10"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard index={index} project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
