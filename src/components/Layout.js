import React from "react";
import styled from "styled-components";

const LayoutWrap = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  align-content: start;
  justify-content: center;
  grid: 1fr / 1fr;
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrap>
      <div>{children}</div>
    </LayoutWrap>
  );
};

export default Layout;
