import React from "react";
import styled from "styled-components";

const StyledText = styled.span`
  text-transform: uppercase;
  color: #fdb740;
  font-weight: bold;
`;

type TitleProps = {
  type?: string;
  text: string;
};
export const Title: React.FC<TitleProps> = ({ type, text }) => {
  return (
    <StyledText
      style={{
        fontSize: type && type === "subtitle" ? "24px" : "40px",
        padding: type && type === "subtitle" ? "12px" : "20px",
      }}
    >
      {text}
    </StyledText>
  );
};
