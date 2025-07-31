import React from "react";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="center">
      <p className="f3 white">
        {"Detect faces in your images. Give it a try!"}
      </p>
      <div className="form center pa4 br3 shadow-5">
        <input
          className="f4 pa2 w-70 center"
          type="text"
          placeholder="Enter image URL"
          onChange={onInputChange}
        />
        <button
          className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
          onClick={onButtonSubmit}
        >
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
