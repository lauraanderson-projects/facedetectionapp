import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <div className="form ph4 pb3 pt4 br3 shadow-5">
        <div className="center">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            placeholder="Enter image URL..."
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
        <div
          className="f6"
          style={{
            textAlign: "left",
            color: "rgb(144, 147, 176)",
            paddingTop: "10px",
          }}
        >
          Example: https://example.com/1.jpg
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
