import React from "react";
import styled from "styled-components";

import Button from "./Button";

import { useProductContext } from "../context/state";

const CartWrap = styled.div`
  padding: ${({ theme }) => theme.spacing.default};
`;

const Buttons = styled.div`
  margin: ${({ theme }) => theme.spacing.default} 0;
  display: grid;
  grid: 1fr/ 200px 200px;
  grid-gap: ${({ theme }) => theme.spacing.sidePadding};
`;

const Cart = () => {
  const { itemsInCart, emptyCart } = useProductContext();
  return (
    <CartWrap>
      <h2>Cart</h2>
      <p>You have {itemsInCart.length} items in your cart</p>

      {!!itemsInCart.length && (
        <>
          <h3>Items</h3>
          <ul>
            {itemsInCart.map((id) => (
              <li key={id}>{id}</li>
            ))}
          </ul>
        </>
      )}
      <Buttons>
        <Button buttonOnly disabled={!itemsInCart.length}>
          Checkout
        </Button>
        <Button buttonOnly onClick={emptyCart} disabled={!itemsInCart.length}>
          Clear cart
        </Button>
      </Buttons>
    </CartWrap>
  );
};

export default Cart;
