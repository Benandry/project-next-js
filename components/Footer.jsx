import { CTN, LINK_, TECH } from "@/constants/data";
import BlockFooter from "@/helpers/BlockFooter";
import {
  faFacebookSquare,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between pt-10 ">
      <div className="w-full bg-blue-400">
        <hr />
        <div className="flex justify-between items-center bg-white p-3">
          <div className="text-gray-600 font-semibold text-xs md:text-lg">
            Connecter moi sur les réseaux sociaux :
          </div>
          <div className="text-gray-600 font-semibold">
            <FontAwesomeIcon icon={faFacebookSquare} className="px-2" />
            <FontAwesomeIcon icon={faLinkedinIn} className="px-2" />
            <FontAwesomeIcon icon={faEnvelopeCircleCheck} className="px-2" />
            <FontAwesomeIcon icon={faTwitter} className="px-2" />
          </div>
        </div>
        <hr />
        <div className="p-3">
          <div className="flex gap-6 flex-col md:flex-row justify-between py-6 text-center md:text-start ">
            <BlockFooter description={["RANDRIAMIHAINGO"]} __index={0} />
            <BlockFooter title="Links" description={LINK_} />
            <BlockFooter title="Technologie" description={TECH} />
            <BlockFooter title="Contact" description={CTN} />
          </div>
        </div>
        <hr />
        <div className=" bg-white p-2">
          <div className="text-gray-600 font-semibold text-center">
            &copy; Copyright 2023
          </div>
        </div>
        <hr />
      </div>
    </footer>
  );
};

export default Footer;
