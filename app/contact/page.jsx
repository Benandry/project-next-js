"use client";

import { phone_ } from "@/Images";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex h-screen flex-col items-center justify-between py-5 bg-blue-200 ">
      <div className="w-full">
        <div className="text-center p-10">
          <h2 className="text-2xl font-bold">Mon contact</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-3  justify-center items-center px-2 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="col-span-2 border border-gray-400 px-5 py-5">
              <div className="flex flex-row justify-center gap-4 items-center">
                <div className="text-gray-500  flex flex-col">
                  <h3 className="text-xl  font-bold uppercase">
                    Je suis toujours dispo
                  </h3>
                  <div className=" py-4">
                    <p className="font-medium">Listes des mon contacts</p>
                    <ul className="flex flex-col px-3 ">
                      <li className="text-sm">
                        Mobile :
                        <a
                          href="tel:+261346055929"
                          className="text-blue-600 visited:text-purple-600 px-2"
                        >
                          034 60 559 29
                        </a>
                      </li>
                      <li className="text-sm">
                        {" "}
                        Email :
                        <a
                          href="mailto:nandry556@mail.com"
                          className="text-blue-600 visited:text-purple-600 px-2"
                        >
                          nandry556@mail.com
                        </a>
                      </li>
                      <li className="text-sm">
                        Facebook :
                        <a
                          href="https://www.facebook.com/nandry.multiplix"
                          className="text-blue-600 visited:text-purple-600 px-2"
                          target="_blank"
                        >
                          Herinandrianina Andriamihaingo
                        </a>
                      </li>
                      <li className="text-md">
                        Linkedin :
                        <a
                          href="https://www.linkedin.com/in/herinandrianina-randriamihaingo-566007254/"
                          className="text-blue-600 visited:text-purple-600 px-2"
                          target="_blank"
                        >
                          Herinandrianina RANDRIAMIHAINGO
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="">
                  <Image
                    src={phone_.src}
                    width={400}
                    height={500}
                    alt="My phone"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
