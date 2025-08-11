import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <>
      <div className="white f3">{`${name.toUpperCase()}, your current entry count is...`}</div>
      <div className="white f2">{`${entries}`}</div>
    </>
  );
};

export default Rank;
