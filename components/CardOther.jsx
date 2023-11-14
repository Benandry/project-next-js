import Image from "next/image";

export const CardOther = ({ title, link, imageSrc, style }) => {
  return (
    <div
      data-aos={style}
      className=" mbasis-1/4 md:basis-1/3 shrink rounded  bg-blue-100 shadow-md shadow-blue-100 "
    >
      <div className="flex flex-col justify-center">
        <div className="text-gray-400 text-sm p-4 ">
          <Image
            src={imageSrc.src}
            width={500}
            height={500}
            className="rounded"
            alt={title}
          />
        </div>
        <div className="text-white text-sm p-4 ">
          <a
            href={link}
            target="_blank"
            className="text-gray-600 visited:text-purple-600 ..."
          >
            {title}
          </a>
        </div>
      </div>
    </div>
  );
};
