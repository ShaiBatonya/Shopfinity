import React from "react";

const Heading = ({ heading }) => {
  return (
    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight border-b-4 border-purple-500 pb-4">
      {heading}
    </div>
  );
};

export default Heading;
