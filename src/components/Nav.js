import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

import Hamburger from "../icons/Hamburger";
import Close from "../icons/Close";
import { defaultHeading } from "../styles/globals/app";

const NavWrap = styled.nav`
  display: ${({ isOpen }) => (isOpen ? "grid" : "none")};
  height: 100vh;
  width: 100vw;
  background: var(--color-background);
  padding: 20px;
  align-items: center;
`;

const NavItem = styled.li`
  ${defaultHeading};
  font-family: var(--font-heading-stack);
  a {
    text-decoration: none;
  }
  padding: 26px 0;
  border-bottom: 1px solid var(--color-borders);
  width: 100%;
  &:last-child {
    border: none;
  }
`;

const MenuToggle = styled.button`
  border: none;
  position: absolute;
  width: 20px;
  top: 34px;
  right: 19px;
  outline: none;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <span hidden id="navigation-label">
        Main navigation
      </span>
      <MenuToggle
        id="menu-toggle"
        aria-label="Main menu"
        aria-expanded="false"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <Close /> : <Hamburger />}
      </MenuToggle>
      <NavWrap aria-label="Main navigation" isOpen={isOpen}>
        <ul>
          <NavItem>
            <Link href="/experiences">
              <a>Experiences</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/company">
              <a>Company</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/support">
              <a>Support</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/bookings">
              <a>Bookings</a>
            </Link>
          </NavItem>
        </ul>
      </NavWrap>
    </>
  );
};

export default Nav;
