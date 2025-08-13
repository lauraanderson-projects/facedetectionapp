import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <>
      <div className="white f3 ma4 mt0">{`${name.toUpperCase()}, your current entry count is: #${entries}`}</div>
    </>
  );
};

export default Rank;
