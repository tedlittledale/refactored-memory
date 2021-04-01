import React from "react";
import styled from "styled-components";
import { withProp } from "styled-tools";
import { defaultBodyText } from "../styles/globals/app";

const Wrapper = styled("header")`
  h1 {
    ${defaultBodyText};
    white-space: nowrap;
    padding: 32px 0 32px 20px;
    position: relative;
    z-index: ${({ theme }) => theme.zindexes.high};
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 31x 0 31px 40px;
    }
  }
`;

const Header = ({}) => {
  return (
    <Wrapper>
      <h1>Scandinavian Adventures</h1>
    </Wrapper>
  );
};

export default Header;
