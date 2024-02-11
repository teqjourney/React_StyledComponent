import { NavBar } from "./navbar";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const StyledWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Layout = () => {
  return (
    <StyledWrap>
      <NavBar />
      <Outlet/>
    </StyledWrap>
  );
};
