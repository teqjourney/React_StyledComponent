import React from "react";
import styled, { CSSProperties } from "styled-components";
import Logo from "../assets/images/Logo.png";
import { NavLink } from "react-router-dom";

const StyledWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;
  font-weight: bold;
  background-color: #180037;
  min-width: 280px;
  min-height: calc(100vh - 80px);
  padding: 40px;
  gap: 12px;
  font-size: 20px;

  @media (max-width: 768px) {
    width: 240px;
    min-height: calc(100vh - 60px);
    padding: 30px;
    gap: 10px;
    font-size: 18px;
  }
  @media (max-width: 600px) {
    width: 200px;
    min-height: calc(100vh - 40px);
    padding: 20px;
    gap: 10px;
    font-size: 18px;
  }
  @media (max-width: 480px) {
    width: 160px;
    min-height: calc(100vh - 32px);
    padding: 16px;
    gap: 8px;
    font-size: 16px;
  }
`;

const StyledLogo = styled.div`
  display: flex;
  background: url(${Logo}) no-repeat center;
  height: 89px;
  background-size: contain;
  @media (max-width: 768px) {
    height: 70px;
  }
  @media (max-width: 600px) {
    height: 60px;
  }
  @media (max-width: 480px) {
    height: 40px;
  }
`;

type LinkProps = {
  to: String;
  title: String;
};
const Link: React.FC<LinkProps> = ({ to, title }) => {
  return (
    <NavLink
      to={`/${to}`}
      style={({ isActive, isPending }) => {
        return {
          color: isActive ? "#FDB740" : "white",
          textTransform: "uppercase",
          textDecoration: "none",
        };
      }}
    >
      {title}
    </NavLink>
  );
};

const HelpLink = () => {
  const getStyles = ({
    isActive,
    isPending,
  }: {
    isActive: boolean;
    isPending: boolean;
  }) => {
    let styles = {
      color: isActive ? "#FDB740" : "white",
      textTransform: "uppercase",
      textDecoration: "none",
      position: "absolute",
      fontSize: "40px",
      bottom: "20px",
      right: "20px",
    };
    return styles as CSSProperties;
  };

  return (
    <NavLink to={"/help"} style={getStyles}>
      ?
    </NavLink>
  );
};
export const NavBar = () => {
  return (
    <StyledWrap>
      <StyledLogo />
      <Link to="" title="Home" />
      <Link to="settings" title="Settings" />
      <HelpLink />
    </StyledWrap>
  );
};
