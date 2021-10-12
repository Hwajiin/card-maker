import React from "react";

const ImageFileInput = () => {
  return (
    <div>
      {/* <button>{"No file" || fileName}</button> */}

      <input type="file" accept="image/*" />
    </div>
  );
};

export default ImageFileInput;
