import { my_photo } from "@/Images";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between py-5 bg-blue-200 ">
      <div className="w-full">
        <div className=" p-10">
          <div className="flex flex-col md:flex-row items-center justify-center ">
            <div className="flex-none basis-1/2 ">
              <h3 className="text-gray-500 font-medium">
                {" "}
                Hello voici mon portfolio
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
                <div className="flex justify-start items-center gap-6">
                  <Link href="/contact">
                    <div className="border rounded border-gray-700 w-36 text-center hover:bg-blue-400 hover:text-white p-2">
                      Mon contact{" "}
                    </div>
                  </Link>
                  <Link href="/">
                    <div className="border border-gray-700  w-36 text-center hover:bg-blue-400 hover:text-white p-2">
                      {" "}
                      CV{" "}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-none basis-1/2 border rounded-full overflow-hidden border-gray-600">
              <Image
                src={my_photo.src}
                loading="lazy"
                width={600}
                height={800}
                objectFit="cover"
                alt=" My photo"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
