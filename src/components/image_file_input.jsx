import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`;

const Loader = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 3px solid grey;
  border-top: 3px solid pink;
  animation: ${spin} 2s linear infinite;
`;

const SInput = styled.input`
  display: none;
`;

const ImageFileInput = ({ imageUploader, onFileChange, name }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const onButtonClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (e) => {
    setLoading(true);
    const uploaded = await imageUploader.upload(e.target.files[0]);
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div>
      <SInput
        type="file"
        accept="image/*"
        name="file"
        ref={inputRef}
        onChange={onChange}
      />
      {!loading && (
        <button onClick={onButtonClick}>{name || "No Files"}</button>
      )}
      {loading && <Loader></Loader>}
    </div>
  );
};

export default ImageFileInput;
