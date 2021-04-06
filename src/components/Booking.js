import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import { useProductContext } from "../context/state";
import currencySymbols from "../utils/currencySymbols";
import BookingHero from "./BookingHero";
import BookingForm from "./BookingForm";

const BookingWrap = styled.div`
  display: grid;
  width: 100%;
  align-items: start;
`;

const BookingContent = styled.div`
  padding: 35px 29px;
  margin-bottom: 27px;
  h2 {
    margin-bottom: 20px;
  }
  h3 {
    margin-bottom: 7px;
    font-weight: normal;
  }
  > button {
    width: 100%;
    margin: 34px 0 56px;
  }
`;

const Booking = () => {
  const router = useRouter();
  const { placeId } = router.query;

  const { getByPlaceId } = useProductContext();
  const place = getByPlaceId(placeId);
  const { title, price, body } = place;

  return (
    <BookingWrap>
      <BookingHero place={place} />
      <BookingContent>
        <h2>{title}</h2>
        {price && (
          <p>
            From {currencySymbols[price.currencyCode]}
            {price.value} {price.unit}
          </p>
        )}
        <BookingForm price={price} placeId={placeId} />
        {body && (
          <>
            {body.split("– ").length > 1 ? (
              <ul>
                {body.split("– ").map((text) => text && <li>- {text}</li>)}
              </ul>
            ) : (
              <p>{body}</p>
            )}
          </>
        )}
      </BookingContent>
    </BookingWrap>
  );
};

export default Booking;
