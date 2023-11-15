"use client";

import { phone_ } from "@/Images";
import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";
import "aos/dist/aos.css";
export default function Page() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
    });
    AOS.refresh();
  }, []);
  return (
    <main className="flex h-full flex-col items-center justify-between py-5 bg-blue-200 ">
      <div className="w-full p-10">
        <div className="text-center pb-10">
          <h2 className="text-2xl font-bold">Mon contact</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div data-aos="fade-down" className="basis-1/2 ">
            <h3 className="text-xl  text-gray-700 font-bold ">
              Je suis toujours disponible si mon profile vous interesse
            </h3>
            <div className="py-4">
              <h4 className="font-medium text-lg text-gray-600 py-2">
                Listes des mon contacts
              </h4>
              <div className="text-md font-normal text-gray-700 md:leading-8 ">
                <div className="flex flex-col ">
                  <div className=" text-md px-3 font-normal ">
                    Mobile :
                    <a
                      href="tel:+261346055929"
                      className="text-blue-600 visited:text-purple-600 px-2"
                    >
                      034 60 559 29
                    </a>
                  </div>
                  <div className=" text-md px-3 font-normal ">
                    {" "}
                    Email :
                    <a
                      href="mailto:nandry556@mail.com"
                      className="text-blue-600 visited:text-purple-600 px-2"
                    >
                      nandry556@mail.com
                    </a>
                  </div>
                  <div className=" text-md px-3 font-normal ">
                    Facebook :
                    <a
                      href="https://www.facebook.com/nandry.multiplix"
                      className="text-blue-600 visited:text-purple-600 px-2"
                      target="_blank"
                    >
                      Herinandrianina Andriamihaingo
                    </a>
                  </div>
                  <div className=" text-md px-3 font-normal ">
                    Linkedin :
                    <a
                      href="https://www.linkedin.com/in/herinandrianina-randriamihaingo-566007254/"
                      className="text-blue-600 visited:text-purple-600 px-2"
                      target="_blank"
                    >
                      Herinandrianina RANDRIAMIHAINGO
                    </a>
                  </div>
                </div>
              </div>
              <h4 className="font-medium text-lg py-2 text-gray-600">Autres</h4>
              <div className="text-md font-normal text-gray-700 md:leading-8 ">
                <div className="flex flex-col ">
                  <div className=" text-md px-3 font-normal ">
                    Githubs :
                    <a
                      href="https://github.com/Benandry"
                      className="text-blue-600 visited:text-purple-600 px-2"
                      target="_blank"
                    >
                      Compte github
                    </a>
                  </div>
                  <div className=" text-md px-3 font-normal ">
                    {" "}
                    GitLab :
                    <a
                      href="https://gitlab.com/Herinandrianina"
                      className="text-blue-600 visited:text-purple-600 px-2"
                      target="_blank"
                    >
                      Compte gitlab
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="basis-1/2  ">
            <div className="">
              <Image src={phone_.src} width={450} height={500} alt="My phone" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
