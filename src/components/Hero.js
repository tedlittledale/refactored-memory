import React from "react";
import styled from "styled-components";

import { useProductContext } from "../context/state";
import currencySymbols from "../utils/currencySymbols";
import Button from "./Button";
import { defaultHeading } from "../styles/globals/app";

const HeroWrap = styled.main`
  height: calc(100vh - 80px);
  width: 100%;
  background-image: url("${({ bg }) => bg}");
  background-size: cover;
  color: var(--color-content-darkbg);
  padding: 214px 20px 20px 20px;
  /* More flexible grid version */
  /*
  display: grid;
  align-content: center;
  padding: 20px; 
  */
  h2 {
    width: 60%;
    margin-bottom: 11px;
    ${defaultHeading};
    font-family: var(--font-body-stack);
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
    media: { large, small },
    price
  } = hero;
  console.log({ hero, currencySymbols });
  return (
    <HeroWrap bg={large.url}>
      <div>
        <h2>{title}</h2>
        {price && (
          <p>
            From {currencySymbols[price.currencyCode]}
            {price.value} {price.unit}
          </p>
        )}
        <Button light>Book Experience</Button>
      </div>
    </HeroWrap>
  );
};

export default Hero;
