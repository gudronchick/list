import React from "react";

const Circle = ({ donePercent }) => {
  return (
    <svg
      width="20"
      height="20"
      viewport="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        r="8"
        cx="10"
        cy="10"
        fill="transparent"
        stroke="lightblue"
        strokeWidth="2"
      ></circle>
      <circle
        r="8"
        cx="10"
        cy="10"
        fill="transparent"
        stroke="gold"
        strokeDasharray={Math.PI * 8 * 2}
        strokeDashoffset={((100 - donePercent) / 100) * Math.PI * (8 * 2)}
        strokeWidth="2"
        transform="rotate(-90 10 10)"
      ></circle>
    </svg>
  );
};

export default Circle;
