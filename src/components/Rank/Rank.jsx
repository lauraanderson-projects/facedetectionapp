import React from "react";
import "./Rank.css"; // Assuming you have a CSS file for styling

const Rank = ({ name, entries }) => {
  return (
    <>
      <div className="white f3 ma4 rank">{`${name.toUpperCase()}, your current entry count is: #${entries}`}</div>
    </>
  );
};

export default Rank;
