import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LinkContact = ({ icon, link, title, content }) => {
  return (
    <div className=" text-sm px-3 py-2 font-normal  ">
      <FontAwesomeIcon icon={icon} />
      <span className="px-2">{title}</span> :
      <a
        href={link}
        className="text-blue-600 visited:text-purple-600 px-2"
        target="_blank"
      >
        {content}
      </a>
    </div>
  );
};

export default LinkContact;
