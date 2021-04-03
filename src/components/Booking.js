import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import { useProductContext } from "../context/state";
import currencySymbols from "../utils/currencySymbols";
import BookingHero from "./BookingHero";
import BookingForm from "./BookingForm";
import Button from "./Button";

import Minus from "../icons/Minus";
import Plus from "../icons/Plus";

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

  const { getByPlaceId, updateCart } = useProductContext();
  const place = getByPlaceId(placeId);
  const { title, price, body } = place;

  const [booked, setBooked] = useState(false);

  const bookPlace = () => {
    if (!booked) {
      setBooked(true);
      updateCart(placeId);
    }
  };

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
        <BookingForm price={price} />
        <Button buttonOnly onClick={bookPlace} disabled={!!booked}>
          {booked ? "Added to cart" : "Book experience"}
        </Button>
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
