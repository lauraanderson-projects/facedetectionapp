import React from "react";

const Footer = () => {
  return (
    <footer className="f7" style={{ textAlign: "center", color: "white" }}>
      <p>
        This project was coded by{" "}
        <a
          className="f7 link dim white pointer"
          href="https://www.linkedin.com/in/laura-anderson-067953/"
          target="_blank"
          rel="noreferrer"
        >
          Laura Anderson
        </a>{" "}
        and is open sourced on{" "}
        <a
          className="f7 link dim white pointer"
          href="https://github.com/lauraanderson-projects/facedetectionapp"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
