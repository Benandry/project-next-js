import React from "react";
import PropTypes from "prop-types";

export const Title = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 mb-8 md:mb-16 lg:mb-20">
      <h2
        className="mx-8 text-4xl md:text-7xl  font-black text-transparent bg-gradient-to-r
       from-teal-400 to-blue-500 bg-clip-text text-center"
      >
        {title}
      </h2>
      <p className="text-white font-thin">{subtitle}</p>
    </div>
  );
};
Title.propTypes = {
  title: PropTypes.string.isRequired,
};
