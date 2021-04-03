import React from "react";
import styled from "styled-components";

import { useProductContext } from "../context/state";
import currencySymbols from "../utils/currencySymbols";
import Button from "./Button";
import { take } from "ramda";
import { defaultHeading } from "../styles/globals/app";

const FeaturedWrap = styled.section`
  padding: ${({ theme }) =>
    `${theme.spacing.default} ${theme.spacing.sidePadding}`};
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing.default};
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid: 1fr / 437fr 743fr;
    grid-gap: ${({ theme }) => theme.spacing.sidePadding};
  }
`;

const FeaturedItem = styled.div`
  display: grid;
  height: 100%;
  > div {
    padding: ${({ theme }) => `15px ${theme.spacing.sidePadding}`};
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 26px 30px 37px;
    }
    ul,
    p {
      margin: 0 0 31px;
    }
    .price {
      margin-bottom: 16px;
    }
  }
  > div:first-child {
    height: 320px;
    background-image: url("${({ bgsmall }) => bgsmall}");
    background-size: cover;
    display: grid;
    align-items: end;

    h2 {
      color: var(--color-content-darkbg);
      width: 60%;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      height: 418px;
      background-image: url("${({ bglarge }) => bglarge}");
      h2 {
        width: 50%;
      }
    }
  }

  > button {
    width: 100%;
    align-self: end;
  }
`;

const Featured = ({}) => {
  const { featured } = useProductContext();

  const [_, ...remaining] = featured;
  return (
    /* use ramdajs take function to safely limit featured to two items */
    <FeaturedWrap>
      {take(2, remaining).map(
        ({ title, id, body, price, media: { small, large } }) => (
          <FeaturedItem key={id} bglarge={large.url} bgsmall={small.url}>
            <div>
              <h2>{title}</h2>
            </div>
            <div>
              {body.split("– ").length > 1 ? (
                <ul>
                  {body.split("– ").map((text) => text && <li>- {text}</li>)}
                </ul>
              ) : (
                <p>{body}</p>
              )}
              {price && (
                <p className="price">
                  From {currencySymbols[price.currencyCode]}
                  {price.value} {price.unit}
                </p>
              )}
            </div>
            <Button href={`/book/${id}`}>Book Experience</Button>
          </FeaturedItem>
        )
      )}
    </FeaturedWrap>
  );
};

export default Featured;
