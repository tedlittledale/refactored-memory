import React from "react";
import styled from "styled-components";
import Link from "next/link";

const ButtonWrap = styled.a`
  display: inline-grid;
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
  &:disabled {
    background: rgba(0, 0, 0, 0.5);
  }
  cursor: pointer;
`;

const Button = ({
  children,
  onClick = () => {},
  disabled = false,
  href = "/",
  light = false,
  buttonOnly = false
}) => {
  return buttonOnly ? (
    <ButtonWrap as="button" light={light} onClick={onClick} disabled={disabled}>
      {children}
    </ButtonWrap>
  ) : (
    <Link href={href}>
      <ButtonWrap light={light}>{children}</ButtonWrap>
    </Link>
  );
};

export default Button;
