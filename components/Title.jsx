import React from "react";
import PropTypes from "prop-types";

export const Title = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 mb-20">
      <h2 className="my-8 text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
        {title}
      </h2>
    </div>
  );
};
Title.propTypes = {
  title: PropTypes.string.isRequired,
};
