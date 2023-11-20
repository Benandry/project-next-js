"use client";

import { NAV_LINK } from "@/constants/data";
import { usePathname } from "next/navigation";
import NavLink from "@/helpers/NavLink";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="w-full fixed top-0 left-0 right-0 bg-gray-900 p-5 z-10 ">
      <nav className="flex justify-between items-center px-14 h-17">
        <div className="basis-1/3 brand text-white">
          <a href="/#home">Logo</a>
        </div>
        <div className="basis-2/3">
          <div className="flex justify-center flex-col ">
            <div className="flex justify-around  ">
              {NAV_LINK.map(({ link, root, icon }, index) => (
                <NavLink key={index} link={link} root={root} icon={icon} />
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
