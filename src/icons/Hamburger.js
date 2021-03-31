import React from "react";
import styled from "styled-components";

const HamburgerWrap = styled.div`
  rect {
    fill: var(--color-content);
  }
`;

const Hamburger = () => {
  return (
    <HamburgerWrap>
      <svg
        width="21"
        height="12"
        viewBox="0 0 21 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.895996" y="10" width="20.0533" height="2" />
        <rect x="0.895996" y="5" width="20.0533" height="2" />
        <rect x="0.895996" width="20.0533" height="2" />
      </svg>
    </HamburgerWrap>
  );
};

export default Hamburger;
