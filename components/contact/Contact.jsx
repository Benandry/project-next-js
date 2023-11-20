"use client";

import { phone_ } from "@/Images";
import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";
import "aos/dist/aos.css";
import TitlePage from "@/components/TitlePage";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import LinkContact from "@/helpers/LinkContact";
import { CONTACT_, GitLink } from "@/constants/data";
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
          <TitlePage icon={faPhone} title="Mon contact" />
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
                        {CONTACT_.map(
                          ({ icon, content, link, title }, index) => {
                            return (
                              <LinkContact
                                key={index}
                                icon={icon}
                                content={content}
                                link={link}
                                title={title}
                              />
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/2">
                    <h4 className="font-medium text-lg py-2 text-gray-600">
                      Autres
                    </h4>
                    <div className="text-md font-normal text-gray-700 md:leading-8 ">
                      <div className="flex flex-col ">
                        {GitLink.map(
                          ({ icon, content, link, title }, index) => {
                            return (
                              <LinkContact
                                key={index}
                                icon={icon}
                                content={content}
                                link={link}
                                title={title}
                              />
                            );
                          }
                        )}
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
