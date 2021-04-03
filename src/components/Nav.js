import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

import Hamburger from "../icons/Hamburger";
import Close from "../icons/Close";
import Basket from "../icons/Basket";
import { useProductContext } from "../context/state";

const NavWrap = styled.nav`
  display: ${({ isOpen }) => (isOpen ? "grid" : "none")};
  height: 100vh;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${({ theme }) => theme.zindexes.medium};
  background: var(--color-background);
  padding: ${({ theme }) => theme.spacing.sidePadding};
  align-items: center;
  justify-self: end;
  ul {
    position: relative;
  }
  li:nth-child(${({ navItems }) => navItems}) {
    border: none;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 ${({ theme }) => theme.spacing.default} 0 0;
    display: grid;
    height: auto;
    position: relative;
    ul {
      justify-self: end;
      display: grid;
      grid: 1fr / auto auto auto auto auto;
      grid-gap: ${({ theme }) => theme.spacing.default};
    }
  }
`;

const NavItem = styled.li`
  font-family: var(--font-heading-stack);
  a {
    text-decoration: none;
  }
  padding: 26px 0;
  border-bottom: 1px solid var(--color-borders);
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-family: var(--font-body-stack);
    font-weight: 400;
    border: none;
    padding: 31px 0;
    a {
      color: var(--color-content-lighter);
    }
  }
`;

const BasketItem = styled.li`
  position: absolute;
  right: 0px;
  bottom: 10px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 26px 0;
    position: static;
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
  z-index: ${({ theme }) => theme.zindexes.highest};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const NavData = [
  { name: "Experiences", link: "/experiences" },
  { name: "Company", link: "/company" },
  { name: "Support", link: "/support" },
  { name: "Bookings", link: "/bookings" }
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { itemsInCart } = useProductContext();
  console.log({ itemsInCart });
  return (
    <div>
      <span hidden id="navigation-label">
        Main navigation
      </span>
      <MenuToggle
        id="menu-toggle"
        aria-label="Main menu"
        aria-expanded={isOpen ? "true" : "false"}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <Close /> : <Hamburger />}
      </MenuToggle>
      <NavWrap
        aria-label="Main navigation"
        isOpen={isOpen}
        navItems={NavData.length}
      >
        <ul>
          {NavData.map(({ name, link }) => (
            <NavItem key={name.replace(/ /g, "")}>
              <Link href={link}>
                <a>{name}</a>
              </Link>
            </NavItem>
          ))}
          <BasketItem>
            <Link href="/basket">
              <a>
                <Basket empty={!itemsInCart.length} />
              </a>
            </Link>
          </BasketItem>
        </ul>
      </NavWrap>
    </div>
  );
};

export default Nav;
