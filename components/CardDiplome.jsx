import { graduation } from "@/Images";
import Image from "next/image";

export const CardDiplome = ({ title, description, year, style }) => {
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
        <div className="text-gray-600  text-sm p-4 ">{description}</div>
        <div className="text-gray-600  text-sm p-4 ">{year}</div>
      </div>
    </div>
  );
};
