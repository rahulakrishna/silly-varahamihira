import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';

const Zone = styled.div`
  width: 100%;
  height: 100px;
  border: 3px dashed blueviolet;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Upload = ({ setContent }) => {
  const onDrop = useCallback(
    acceptedFiles => {
      console.log({ acceptedFiles });
      acceptedFiles.forEach(file => {
        const reader = new FileReader();
        reader.onabort = () => console.log('aborted');
        reader.onerror = () => toast('Some Error Occured');
        reader.onload = () => {
          console.log('here');
          const binarystr = reader.result;
          console.log({ binarystr });
          setContent(binarystr);
        };
        reader.readAsText(file);
      });
    },
    [setContent]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <Zone {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? 'Drop' : 'Click'}
    </Zone>
  );
};

export default Upload;
