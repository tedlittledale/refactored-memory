import React from "react";
import styled from "styled-components";
import { defaultHeading } from "../styles/globals/app";

const ButtonWrap = styled.button`
  display: grid;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  padding: 19px 0 18px;
  border: none;
  outline: none;
  font-family: var(--font-heading-stack);
  background: ${({ light }) =>
    light ? "var(--color-white)" : "var(--color-black)"};
  color: ${({ light }) =>
    light ? "var(--color-black)" : "var(--color-white)"};
`;

const Button = ({ children, handleClick, light = false }) => {
  return (
    <ButtonWrap onClick={handleClick} light={light}>
      {children}
    </ButtonWrap>
  );
};

export default Button;
