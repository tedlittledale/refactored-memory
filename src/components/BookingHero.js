import React from "react";
import styled from "styled-components";

import { useProductContext } from "../context/state";
import currencySymbols from "../utils/currencySymbols";
import Button from "./Button";
import { defaultHeading } from "../styles/globals/app";

const BookingHeroWrap = styled.div`
  background-image: url("${({ bg }) => bg}");
  background-size: cover;
  height: 375px;
  width: 100%;
  display: grid;
`;

const BookingHero = ({ place }) => {
  const {
    media: { large, small }
  } = place;
  return <BookingHeroWrap bg={large ? large.url : small.url} />;
};

export default BookingHero;
