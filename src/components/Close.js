import React from "react";
import styled from "styled-components";
import Link from "next/link";

import CloseIcon from "../icons/Close";

const CloseWrap = styled.div`
  justify-self: end;
  align-self: center;
  width: 16px;
  height: 16px;
  margin-right: 22px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-right: ${({ theme }) => theme.spacing.default};
  }
`;

const Close = ({ children, href = "/", light = false, buttonOnly = false }) => (
  <CloseWrap>
    <Link href="/">
      <a>
        <CloseIcon />
      </a>
    </Link>
  </CloseWrap>
);

export default Close;
