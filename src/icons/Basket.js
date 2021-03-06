import React from "react";
import styled from "styled-components";

const BasketWrap = styled.div`
  path {
    stroke: var(--color-content);
  }
  path.dot {
    stroke: var(--color-red);
    fill: var(--color-red);
  }
`;

const Basket = ({ empty = true }) => {
  return (
    <BasketWrap>
      <svg
        width="19"
        height="24"
        viewBox="0 0 19 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1.39933 9.5935C1.6096 7.27525 3.55316 5.5 5.88093 5.5H13.1188C15.4466 5.5 17.3901 7.27525 17.6004 9.59351L18.4167 18.5935C18.6557 21.2285 16.5809 23.5 13.9351 23.5H5.0646C2.41883 23.5 0.344001 21.2285 0.582999 18.5935L1.39933 9.5935Z" />
        <path d="M13 5C13 2.79086 11.433 1 9.5 1C7.567 1 6 2.79086 6 5" />
        {!empty && (
          <path
            className="dot"
            d="M9.5 18C11.433 18 13 16.433 13 14.5C13 12.567 11.433 11 9.5 11C7.567 11 6 12.567 6 14.5C6 16.433 7.567 18 9.5 18Z"
          />
        )}
      </svg>
    </BasketWrap>
  );
};

export default Basket;
