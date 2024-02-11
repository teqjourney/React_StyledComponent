import React from "react";
import styled, { CSSProperties } from "styled-components";

const StyledWrapper = styled.div`
  border-radius: 15px;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 20px;
  background-color: #0083ca;
  border: 1px solid #0083ca;
  text-transform: uppercase;
  height: 50px;
`;

type CustomButtonProps = {
  text: string;
  style?: CSSProperties;
};

export const CustomButton: React.FC<CustomButtonProps> = ({ text }) => {
  return <StyledWrapper style={{ width: "100%" }}>{text}</StyledWrapper>;
};
