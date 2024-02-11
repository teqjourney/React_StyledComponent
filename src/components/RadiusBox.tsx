import React, { CSSProperties, ReactNode } from "react";
import styled from "styled-components";

type RadiusBoxProps = {
  children: ReactNode;
  style?: CSSProperties;
};

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 15px;
  box-shadow: 0px 4px 9px 2px #0000001a;
  padding: 20px;
`;

export const RadiusBox: React.FC<RadiusBoxProps> = ({ children, style }) => {
  return <StyledWrap style={style}>{children}</StyledWrap>;
};
