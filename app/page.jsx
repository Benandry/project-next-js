"use client";
import React from "react";
import { my_photo } from "@/Images";
import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaEnvelope } from "react-icons/fa";

const Page = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gray-900">
      <main className="container mx-auto px-4 h-full flex flex-col justify-center py-20 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 xl:gap-24 items-center">
          <div className="space-y-6 md:space-y-8 relative z-10">
            <div className="inline-block bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 rounded-lg p-1">
              <h1 className="text-lg text-center md:text-3xl font-semibold bg-gray-900 rounded-lg px-4 py-2 text-white">
                👋 Bienvenue sur mon portfolio
              </h1>
            </div>

            <h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400">
              <span className="text-4xl md:text-7xl block">
                Eloi Charly RANDRIAMIHAINGO
              </span>
              <span className="text-2xl md:text-5xl block mt-2 text-gray-300">
                Développeur Fullstack
              </span>
              <span className="text-xl md:text-2xl font-medium text-gray-400 mt-4 block">
                Spécialisé en <span className="text-emerald-400">Symfony</span>{" "}
                et <span className="text-cyan-400">React</span>
              </span>
            </h2>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
              Je crée des applications web performantes et évolutives avec une
              passion pour l&apos;expérience utilisateur et les architectures
              robustes.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/contact"
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white font-semibold transition-all duration-300 hover:scale-105"
              >
                <FaEnvelope className="text-xl" />
                Contactez-moi
              </Link>

              <Link
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:text-white font-semibold transition-all duration-300 hover:scale-105"
              >
                <FaDownload className="text-xl" />
                Télécharger CV
              </Link>
            </div>
          </div>

          <div className="relative group flex justify-center">
            <div className="relative w-full max-w-lg aspect-square overflow-hidden rounded-2xl bg-gradient-to-tr from-emerald-400/20 via-cyan-500/20 to-indigo-500/20 backdrop-blur-sm">
              <Image
                src={my_photo}
                alt="Eloi Charly RANDRIAMIHAINGO - Développeur Fullstack"
                width={600}
                height={600}
                priority
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
            </div>

            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 rounded-2xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity duration-300" />
          </div>
        </div>

        <div className="absolute left-0 bottom-20 w-full h-1/3 bg-gradient-to-t from-gray-900/80 to-transparent -z-10" />
      </main>
    </section>
  );
};

export default Page;
