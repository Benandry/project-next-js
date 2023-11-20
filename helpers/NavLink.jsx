import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const NavLink = ({ icon, link, root }) => {
  return (
    <div className="flex justify-center items-center gap-3 ">
      <div className="text_md">
        <FontAwesomeIcon icon={icon} style={{ color: "white" }} />
      </div>
      <div className="px-2">
        <Link
          href={root}
          className={`text-white border-b-2 border-transparent hover:border-b-gray-100 `}
        >
          {link}
        </Link>
      </div>
    </div>
  );
};

export default NavLink;
