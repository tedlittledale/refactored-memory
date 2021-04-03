import React, { useState, useEffect } from "react";
import styled from "styled-components";
import currencySymbols from "../utils/currencySymbols";

import Minus from "../icons/Minus";
import Plus from "../icons/Plus";

const BookingBlock = styled.div`
  display: grid;
  grid: 1fr / 40px 80px 40px;
  grid-gap: 10px;
  height: 40px;
  margin-bottom: 36px;
  button {
    background: var(--color-black);
    border: none;
  }
  div {
    border: 1px solid var(--color-black);
    display: grid;
    align-items: center;
    justify-content: center;
  }
`;

const BookingForm = ({ price }) => {
  const [total, setTotal] = useState(0);
  const [totalAdults, setTotalAdults] = useState(0);
  const [totalChildren, setTotalChildren] = useState(0);

  useEffect(() => {
    setTotal(price.value * (totalAdults + totalChildren));
  }, [totalAdults, totalChildren]);

  return (
    <>
      <h3>Adults</h3>
      <BookingBlock>
        <button onClick={() => setTotalAdults(Math.max(0, totalAdults - 1))}>
          <Minus />
        </button>
        <div>{totalAdults}</div>
        <button onClick={() => setTotalAdults(totalAdults + 1)}>
          <Plus />
        </button>
      </BookingBlock>
      <h3>Children</h3>
      <BookingBlock>
        <button
          onClick={() => setTotalChildren(Math.max(0, totalChildren - 1))}
        >
          <Minus />
        </button>
        <div>{totalChildren}</div>
        <button onClick={() => setTotalChildren(totalChildren + 1)}>
          <Plus />
        </button>
      </BookingBlock>
      <p>
        Total {currencySymbols[price.currencyCode]}
        {total}
      </p>
    </>
  );
};

export default BookingForm;
