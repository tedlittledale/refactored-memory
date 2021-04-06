import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { useProductContext } from "../context/state";
import currencySymbols from "../utils/currencySymbols";
import Button from "./Button";
import BgImage from "./BgImage";
import { defaultHeading } from "../styles/globals/app";

const HeroWrap = styled.main`
  height: calc(100vh - 82px);
  width: 100%;
  color: var(--color-content-darkbg);
  padding: ${({ theme }) =>
    `214px  ${theme.spacing.sidePadding} ${theme.spacing.sidePadding} ${theme.spacing.sidePadding}`};
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => `214px  70px ${theme.spacing.sidePadding} 70px`};
  }
  position: relative;
  background-image: url("${({ bg }) => bg}");
  background-size: cover;
`;

const Content = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zindexes.medium};
  h2 {
    width: 60%;
    margin-bottom: 11px;
    font-family: var(--font-body-stack);
    ${defaultHeading};

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-weight: normal;
      font-family: var(--font-heading-stack);
    }
  }
  p {
    margin-bottom: 16px;
  }
`;

const Hero = ({}) => {
  const {
    featured: [hero]
  } = useProductContext();
  const {
    title,
    id,
    media: { large },
    price
  } = hero;

  return (
    <HeroWrap bg={large.url} bgHeight={large.height} data-testid="hero">
      <Content>
        <h2>{title}</h2>
        {price && (
          <p>
            From {currencySymbols[price.currencyCode]}
            {price.value} {price.unit}
          </p>
        )}
        <Button light href={`/book/${id}`}>
          Book Experience
        </Button>
      </Content>
    </HeroWrap>
  );
};

export default Hero;
