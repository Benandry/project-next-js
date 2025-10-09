'use client';

import React from "react";
import dynamic from "next/dynamic";
import { my_photo } from "@/Images";
import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import Shape from "@/components/Shape";

const Typewriter = dynamic(() => import('react-typewriter-effect'), { ssr: false });

const Page = () => {
  return (
    <section id="home" className="relative h-screen md:min-h-screen bg-gray-900 overflow-hidden">
    <Shape />
      <main className="container mx-auto px-4 md:px-8 h-full flex flex-col justify-center py-20 md:py-24 relative z-10 mt-5 md:mt-0">
        <div className="grid md:grid-cols-2 gap-12 items-center sm:mt-6 md:mt-16">
          {/* Texte */}
          <div className="space-y-6 md:space-y-8">
            <div className="inline-block bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 rounded-lg p-1">
              <h1 className="text-base sm:text-lg md:text-3xl font-semibold bg-gray-900 rounded-lg px-4 py-2 text-white text-center">
                👋 Bienvenue sur mon portfolio
              </h1>
            </div>

            <h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400">
              <span className="block text-2xl  md:text-2xl lg:text-4xl">
                <Typewriter
                    startDelay={200}
                    cursorColor="#00FFD1"
                    multiText={['Eloi Charly RANDRIAMIHAINGO']}
                    multiTextDelay={2000}
                    typeSpeed={100}
                    deleteSpeed={50}        
                    loop={true}            
                  />

              </span>
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-4xl mt-2 text-gray-300">
                Créateur de solutions digitales robustes 
              </span>
              <span className="block text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-400 mt-2 md:mt-4">
              avec <span className="text-emerald-400">Symfony </span>
                et <span className="text-cyan-400">React</span>
              </span>
            </h2>

         <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-full md:max-w-2xl">
          Passionné par la technologie, je conçois et développe des projets innovants alliant performance, créativité et expérience utilisateur. Mon objectif : transformer chaque idée en un produit numérique fiable et impactant.
        </p>
            <div className="flex flex-wrap gap-4 mt-6 md:mt-8">
              <Link
                href="/contact"
                className="flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white font-semibold transition-transform duration-300 hover:scale-105 shadow-lg text-sm sm:text-base md:text-lg"
              >
                <FaEnvelope className="text-lg md:text-xl" />
                Contactez-moi
              </Link>

              <Link
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-3 rounded-full border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:text-white font-semibold transition-transform duration-300 hover:scale-105 shadow-lg text-sm sm:text-base md:text-lg"
              >
                <FaDownload className="text-lg md:text-xl" />
                Télécharger CV
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center group cursor-pointer">
            <div className="relative w-72 sm:w-80 md:w-full max-w-md aspect-square overflow-hidden rounded-2xl 
                            bg-gradient-to-tr from-emerald-400/20 via-cyan-500/20 to-indigo-500/20 
                            backdrop-blur-sm transition-transform duration-500 transform-gpu
                            hover:scale-105 hover:shadow-xl">
              <Image
                src={my_photo}
                alt="Eloi Charly RANDRIAMIHAINGO - Développeur Fullstack"
                width={600}
                height={600}
                priority
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
            </div>

            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 
                            rounded-2xl opacity-20 hover:opacity-30 blur-3xl transition-opacity duration-500" />
          </div>
        </div>

        <div className="absolute left-0 bottom-20 w-full h-1/3 bg-gradient-to-t from-gray-900/80 to-transparent -z-10" />
      </main>
    </section>
  );
};

export default Page;
