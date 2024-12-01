import React from "react";

const Badge = ({ text }) => {
  return (
    <div
      className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xs font-semibold uppercase rounded-full px-4 py-1 shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
      role="status"
      aria-label={text}
    >
      {text}
    </div>
  );
};

export default Badge;
