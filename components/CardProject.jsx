import { briefcase } from "@/Images";
import Image from "next/image";
import React from "react";

const CardProject = () => {
  return (
    <div className="border border-gray-500">
      <div className="p-4">
        {" "}
        <h4> Shopify Reporting</h4>
      </div>
      <div className="flex flex-col items-center">
        <div className="m-2">
          <Image src={briefcase.src} width={300} height={200} />
        </div>
        <div className="text-gray-600 text-sm p-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
          doloribus.
        </div>
      </div>
    </div>
  );
};

export default CardProject;
