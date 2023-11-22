"use client";
import React from "react";
import { my_photo } from "@/Images";
import AOS from "aos";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import "aos/dist/aos.css";
const Homepage = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
    });
    AOS.refresh();
  }, []);
  return (
    <section id="home">
      <main className="flex h-full flex-col items-center justify-between py-10">
        <div className="w-full">
          <div className="flex flex-col mt-20 md:mt-2 md:flex-row items-center justify-center md:px-20  ">
            <div
              data-aos="fade-down"
              data-aos-anchor-placement="center-bottom"
              className="flex-none basis-1/2 "
            >
              <h3 className="text-white font-medium z-2">
                {" "}
                <span className="bg-gray-700 px-10 py-1 rounded">
                  Hello voici mon portfolio
                </span>
              </h3>
              <div className="text-gray-700">
                <h4 className="text-2xl font-bold py-6">
                  {" "}
                  Je suis developpeur Fullstack
                </h4>
                <div className="text-2xl ">
                  <h5 className="font-semibold">Symfony et Next Js</h5>
                </div>
              </div>
              <div className="py-4">
                <div className="flex justify-start items-center gap-6 z-10">
                  <Link href="/#contact">
                    <div className=" rounded w-36 text-center hover:bg-transparent hover:text-gray-500 hover:border hover:border-gray-600 bg-blue-400 text-white p-2">
                      Mon contact{" "}
                    </div>
                  </Link>
                  <Link href="/">
                    <div className=" rounded border border-gray-700  w-36 text-center hover:border-none hover:bg-blue-400 hover:text-white p-2">
                      {" "}
                      CV{" "}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="flex-none basis-1/2 overflow-hidden rounded-full xl:rounded-none z-0"
            >
              <Image
                src={my_photo.src}
                width={500}
                height={500}
                alt=" My photo"
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Homepage;
