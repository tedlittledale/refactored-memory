import React from "react";
import styled from "styled-components";

const LayoutWrap = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid: 1fr/ 1fr;
  align-items: start;
  justify-items: center;
  > div {
    width: 95%;
  }
`;

const Layout = ({ children }) => {
  return <LayoutWrap>{children}</LayoutWrap>;
};

export default Layout;
