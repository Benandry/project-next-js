"use client";

import { phone_ } from "@/Images";
import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";
import "aos/dist/aos.css";
import TitlePage from "@/components/TitlePage";
export default function Contact() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
    });
    AOS.refresh();
  }, []);
  return (
    <section id="contact">
      {" "}
      <main className="flex flex-col items-center justify-between py-10 h-screen">
        <div className="w-full">
          <TitlePage title="Mon contact" />
          <div className="flex flex-col md:flex-row justify-center items-center md:px-20">
            <div data-aos="fade-down" className="basis-1/2 ">
              <h3 className="text-xl  text-gray-700 font-bold ">
                Je suis toujours disponible si mon profil vous intéresse
              </h3>
              <div className="py-4">
                <div className="flex justify-between flex-col md:flex-row">
                  <div className="basis-1/2">
                    <h4 className="font-semibold text-md text-gray-600 py-2">
                      Listes des mon contacts
                    </h4>
                    <div className="text-md font-normal text-gray-700 md:leading-10 ">
                      <div className="flex flex-col ">
                        <div className=" text-sm px-3 font-normal ">
                          Mobile :
                          <a
                            href="tel:+261346055929"
                            className="text-blue-600 visited:text-purple-600 px-2"
                          >
                            034 60 559 29
                          </a>
                        </div>
                        <div className=" text-sm px-3 py-2 py-2font-normal ">
                          {" "}
                          Email :
                          <a
                            href="mailto:nandry556@mail.com"
                            className="text-blue-600 visited:text-purple-600 px-2"
                          >
                            nandry556@mail.com
                          </a>
                        </div>
                        <div className=" text-sm px-3 py-2 font-normal ">
                          Facebook :
                          <a
                            href="https://www.facebook.com/nandry.multiplix"
                            className="text-blue-600 visited:text-purple-600 px-2"
                            target="_blank"
                          >
                            Herinandrianina Andriamihaingo
                          </a>
                        </div>
                        <div className=" text-sm px-3 py-2 font-normal ">
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
                  </div>
                  <div className="basis-1/2">
                    <h4 className="font-medium text-lg py-2 text-gray-600">
                      Autres
                    </h4>
                    <div className="text-md font-normal text-gray-700 md:leading-8 ">
                      <div className="flex flex-col ">
                        <div className=" text-sm px-3 font-normal ">
                          Githubs :
                          <a
                            href="https://github.com/Benandry"
                            className="text-blue-600 visited:text-purple-600 px-2"
                            target="_blank"
                          >
                            Compte github
                          </a>
                        </div>
                        <div className=" text-sm px-3 py-2 font-normal ">
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
              </div>
            </div>
            <div data-aos="fade-up" className="basis-1/2  hidden md:block">
              <div className="">
                <Image
                  src={phone_.src}
                  width={450}
                  height={500}
                  alt="My phone"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
