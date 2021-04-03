import React from "react";
import styled from "styled-components";

import { useProductContext } from "../context/state";
import currencySymbols from "../utils/currencySymbols";
import Button from "./Button";
import { defaultBodyText } from "../styles/globals/app";

import Carousel from "./Carousel";

const CarouselSectionWrap = styled.div`
  background: var(--color-altbackground);
  padding: ${({ theme }) =>
    `36px ${theme.spacing.sidePadding} ${theme.spacing.default}`};
  text-align: center;
  width: 100%;
  overflow: hidden;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) =>
      `31px ${theme.spacing.default} ${theme.spacing.default}`};
  }

  > h2 {
    margin-bottom: 11px;
    font-family: var(--font-stack-body);
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 23px;
  }
  > p {
    margin: 0 20px 46px;
  }
`;

const Place = styled.div`
  text-align: left;
  width: 275px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
  > div:first-child {
    height: 173px;
    background-image: url("${({ bg }) => bg}");
    background-color: no-repeat;
    background-size: cover;
  }
  > div:last-child {
    color: var(--color-content-darkbg);
    background: var(--color-black);
    padding: 26px 20px 30px;
  }
  h3 {
    font-family: var(--font-stack-body);
    ${defaultBodyText};
    margin-bottom: 12px;
  }
  p {
    margin-bottom: 27px;
  }
  button {
    width: 100%;
  }
`;

const CarouselSection = ({}) => {
  const { carousel: carouselItems } = useProductContext();

  console.log({ carouselItems });
  return (
    /* use ramdajs take function to safely limit featured to two items */
    <CarouselSectionWrap>
      <h2>Adventure awaits out there</h2>
      <p>Get out and experience Scandinavian way of living</p>
      <Carousel itemSize={275}>
        {carouselItems.map(({ title, price, id, media: { small } }) => (
          <Place bg={small.url}>
            <div></div>
            <div>
              <h3>{title}</h3>
              {price && (
                <p className="price">
                  From {currencySymbols[price.currencyCode]}
                  {price.value} {price.unit}
                </p>
              )}
              <Button light href={`/book/${id}`}>
                Book Experience
              </Button>
            </div>
          </Place>
        ))}
      </Carousel>
    </CarouselSectionWrap>
  );
};

export default CarouselSection;
