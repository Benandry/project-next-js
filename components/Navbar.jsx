"use client";

import { NAV_LINK } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
              {NAV_LINK.map(({ link, root }, index) => (
                <Link
                  key={index}
                  href={root}
                  className={`text-white border-b-2 border-transparent hover:border-b-gray-100 `}
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
