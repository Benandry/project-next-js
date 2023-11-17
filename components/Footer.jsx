import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between pt-10 bg-blue-400">
      <div className="w-full">
        <hr />
        <div className="flex justify-end items-center">
          <div className="text-white">Contact</div>
        </div>
        <hr />
        <div className="py-3">
          <div className="flex">
            <div className="px-6">
              <h2 className="text-white font-semibold"> A propos </h2>
              <div className="flex flex-col">
                <div className="text-white"> RANDRIAMIHAINGO </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
