import React from "react";
import styled from "styled-components";

const LayoutWrap = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  align-content: start;
  justify-items: start;
`;

const Layout = ({ children }) => {
  return <LayoutWrap>{children}</LayoutWrap>;
};

export default Layout;
