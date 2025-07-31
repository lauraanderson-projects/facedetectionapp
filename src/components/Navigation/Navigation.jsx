import React from "react";

const Navigation = ({ onRouteChange, ifSignedIn }) => {
  // Conditional rendering based on the user's sign-in status
  if (ifSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <h2
          onClick={() => onRouteChange("signout")}
          className="f6 link dim white pa3 pointer"
        >
          Sign Out
        </h2>
      </nav>
    );
  } else {
    // If the user is not signed in, show the Sign In option
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
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
      </nav>
    );
  }
};

export default Navigation;
