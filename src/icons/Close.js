import React from "react";
import styled from "styled-components";

const CloseWrap = styled.div`
  rect {
    fill: var(--color-content);
  }
`;

const Close = () => {
  return (
    <CloseWrap>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="19.0254"
          height="2.00267"
          transform="matrix(0.708048 0.706164 -0.708048 0.706164 2.39502 0.575378)"
          fill="black"
        />
        <rect
          width="19.0254"
          height="2.00267"
          transform="matrix(0.708048 -0.706164 0.708048 0.706164 0.977051 14.0104)"
          fill="black"
        />
      </svg>
    </CloseWrap>
  );
};

export default Close;
