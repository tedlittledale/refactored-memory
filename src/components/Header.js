import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { withProp } from "styled-tools";
import { defaultHeading } from "../styles/globals/app";

const Wrapper = styled("header")`
  justify-self: start;
  h1 {
    ${defaultHeading};
    white-space: nowrap;
    padding: 32px 0 32px ${({ theme }) => theme.spacing.sidePadding};
    position: relative;
    z-index: ${({ theme }) => theme.zindexes.high};
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 31px 0 31px ${({ theme }) => theme.spacing.default};
    }
  }
  a {
    text-decoration: none;
    font-family: inherit;
  }
`;

const Header = ({}) => {
  return (
    <Wrapper>
      <Link href="/">
        <a>
          <h1>Scandinavian Adventures</h1>
        </a>
      </Link>
    </Wrapper>
  );
};

export default Header;
