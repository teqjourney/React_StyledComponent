import React from "react";
import styled, { CSSProperties } from "styled-components";
import UploadImg from "../assets/images/upload.png";

const StyledWrapper = styled.div`
  border-radius: 15px;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: bold;
  font-size: 20px;
  background-color: #fdb74024;
  border: 1px solid #fdb74024;
  text-transform: uppercase;
  height: 50px;
`;

type UploadFileButtonProps = {
  text: string;
  style?: CSSProperties;
};
export const UploadFileButton: React.FC<UploadFileButtonProps> = ({ text }) => {
  return (
    <StyledWrapper style={{ width: "100%" }}>
      <img src={UploadImg} />
      <span>Upload File</span>
    </StyledWrapper>
  );
};
