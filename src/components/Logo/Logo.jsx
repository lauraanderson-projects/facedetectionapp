import React from "react";
import Tilt from "react-parallax-tilt";
import "./logo.css"; // Import the CSS file for styling

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt>
        <img
          src="src/components/Logo/la_logo_simple.png"
          alt="Logo"
          style={{ width: "100px" }}
          className="Tilt"
        />
      </Tilt>
    </div>
  );
};

export default Logo;
