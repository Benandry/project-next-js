import React from "react";

const BlockFooter = ({ title, description, __index }) => {
  return (
    <div className="text-white ">
      <h2 className="text-xl font-semibold pb-3 md:text-center"> {title} </h2>
      <div className="flex flex-col justify-between">
        <div className="px-4">
          {description.map((info, index) => {
            return (
              <div key={index} className="mt-2 text-sm ">
                {__index === 0 ? (
                  <span className="font-semibold text-xl"> {info} </span>
                ) : (
                  <span> {info} </span>
                )}
              </div>
            );
          })}{" "}
        </div>
      </div>
    </div>
  );
};

export default BlockFooter;
