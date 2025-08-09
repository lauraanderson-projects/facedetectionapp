import React from "react";
import logo from "./la_logo_simple.png"; // Assuming you have a logo image

const Navigation = ({ onRouteChange, ifSignedIn }) => {
  // Conditional rendering based on the user's sign-in status
  if (ifSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="logo-container">
          <img
            src={logo}
            style={{ width: "50px", height: "50px" }}
            alt="Logo"
            className="logo pa3"
          />
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <h2
            onClick={() => onRouteChange("signout")}
            className="f6 link dim white pa3 pointer"
          >
            Sign Out
          </h2>
        </div>
      </nav>
    );
  } else {
    // If the user is not signed in, show the Sign In option
    return (
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="logo-container">
          <img
            src={logo}
            style={{ width: "50px", height: "50px" }}
            alt="Logo"
            className="logo pa3"
          />
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <h2
              onClick={() => onRouteChange("signin")}
              className="f6 link dim white pa3 pointer"
            >
              Sign In
            </h2>
            <h2
              onClick={() => onRouteChange("register")}
              className="f6 link dim white pa3 pointer"
            >
              Register
            </h2>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navigation;
