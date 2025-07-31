import React from "react";

const Navigation = ({ onRouteChange }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <h2
        onClick={() => onRouteChange("signin")}
        className="f6 link dim white pa3 pointer"
      >
        Sign Out
      </h2>
    </nav>
  );
};

export default Navigation;
