import React from "react";
import styled from "styled-components";

const NavBarWrap = styled.div`
  display: grid;
  grid: 1fr / 1fr 1fr;
  width: 100%;
`;
const NavBar = ({ children }) => {
  return <NavBarWrap>{children}</NavBarWrap>;
};

export default NavBar;
