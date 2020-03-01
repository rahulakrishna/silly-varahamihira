import React, { useCallback } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";

const Zone = styled.div`
  width: 100%;
  height: 100px;
  border: 3px dashed blueviolet;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Upload = () => {
  const onDrop = useCallback(acceptedFiles => {
    console.log({ acceptedFiles });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <Zone {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? "Drop" : "Click"}
    </Zone>
  );
};

export default Upload;
