import React from "react";
import styled from "styled-components";

const LayoutWrap = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  align-content: center;
  justify-content: center;
  > div {
    display: grid;
    align-content: start;
    justify-items: start;
    /* max-width: 1080px;
    overflow: hidden; */
  }
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrap>
      <div>{children}</div>
    </LayoutWrap>
  );
};

export default Layout;
