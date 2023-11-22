"use client";

import { NAV_LINK } from "@/constants/data";
import NavLink from "@/helpers/NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isDisplay, setIsDisplay] = useState(false);

  const handleClickButtonMenu = () => {
    setIsDisplay((prev) => (prev = !prev));
  };

  const toggleMenuMobile = () => {
    return (
      <div className="block md:hidden ">
        <div className="relative w-full  ">
          <div className=" fixed  right-0 bg-gray-700 p-5 z-30  w-5/6 h-full shadow-md shadow-blue-200 text-white ">
            <div className="relative pt-28  h-full">
              <div className="absolute bottom-4 right-0">
                {NAV_LINK.map(({ link, root, icon }, index) => (
                  <div
                    className="flex justify-center items-center gap-2 py-5"
                    key={index}
                  >
                    <div className="px-2">
                      <Link
                        href={root}
                        className={`text-white border-b-2 border-transparent hover:border-b-gray-100 `}
                        onClick={handleClickButtonMenu}
                      >
                        <FontAwesomeIcon
                          icon={icon}
                          style={{ color: "white", fontSize: "23px" }}
                        />
                        <span className="px-3 my-2">{link}</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <header className="w-full fixed top-0 left-0 right-0 bg-gray-900 p-5 z-40">
        <nav className="flex justify-between items-center pl-14 md:px-14 h-17">
          <div className="md:basis-1/3 brand text-white">
            <a href="/#home">Logo</a>
          </div>
          <div className="basis-2/3 hidden md:block">
            <div className="flex justify-center flex-col ">
              <div className="flex justify-around  ">
                {NAV_LINK.map(({ link, root, icon }, index) => (
                  <NavLink key={index} link={link} root={root} icon={icon} />
                ))}
              </div>
            </div>
          </div>
          <div className="block md:hidden">
            <button className="menu-icon" onClick={handleClickButtonMenu}>
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: "white", fontSize: "30px" }}
              />
            </button>
          </div>
        </nav>
      </header>
      {/* Mobile menu */}
      {isDisplay && toggleMenuMobile()}
    </>
  );
};

export default Navbar;
