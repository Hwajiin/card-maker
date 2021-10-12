import React from "react";

const ImageFileInput = () => {
  return (
    <div>
      {/* <button>{"No file" || fileName}</button> */}
      <form>
        <input type="file" accept="image/*" />
      </form>
    </div>
  );
};

export default ImageFileInput;
