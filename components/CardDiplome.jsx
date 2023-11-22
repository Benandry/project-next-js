import { graduation } from "@/Images";
import Image from "next/image";

export const CardDiplome = ({ title, parcour, year, style, index }) => {
  return (
    <div
      data-aos={style}
      className=" mbasis-1/4 md:basis-1/3 shrink rounded  bg-blue-200 shadow-md shadow-blue-200   "
    >
      <div className="flex flex-col justify-center">
        <h1 className="text-center py-5 text-gray-600 font-semibold text-lg">
          {title}
        </h1>
        <div className="text-gray-400 text-sm p-4 ">
          <Image
            src={graduation.src}
            width={500}
            height={500}
            className="rounded"
            alt={title}
          />
        </div>
        <div className="text-gray-600  text-md px-4 py-1 ">
          <h3 className="font-medium">
            Titre : <span className="font-semibold ">{title}</span>{" "}
          </h3>
        </div>
        <div className="text-gray-600  text-md px-4 py-1 ">
          <h3 className="font-medium ">
            {index === 2 ? "Série " : "Parcours"} :
            <span className="font-semibold ">{parcour}</span>{" "}
          </h3>
        </div>
        <div className="text-gray-600  text-sm p-4 font-semibold ">
          <h3 className="font-medium">
            Année scolaire : <span className="font-semibold ">{year}</span>{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};
