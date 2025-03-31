import React from "react";

const Bar = () => {
  return (
    <>
      <div className="w-16 h-16 border-l-4 border-blue-500 border-t-4  absolute top-14 left-6 transform -translate-1/2 -translate-y-1/2"></div>
      <div className="w-16 h-16 border-r-4 border-blue-500 border-t-4  absolute top-14 right-6 transform translate-1/2 -translate-y-1/2"></div>
      <div className="w-16 h-16 border-l-4 border-blue-500 border-b-4  absolute bottom-14 left-6 transform -translate-1/2 translate-y-1/2"></div>
      <div className="w-16 h-16 border-r-4 border-blue-500 border-b-4  absolute bottom-14 right-6 transform translate-1/2 translate-y-1/2"></div>
    </>
  );
};

export default Bar;
