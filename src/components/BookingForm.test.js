import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "../styles/theme";
import { AppWrapper } from "../context/state";
import currencySymbols from "../utils/currencySymbols";

import BookingForm from "./BookingForm";

const price = {
  value: 65,
  currencyCode: "GBP",
  unit: "per person"
};

afterEach(cleanup);

test("<BookingForm />", () => {
  const { debug, getByTestId } = render(
    <AppWrapper>
      <ThemeProvider theme={theme}>
        <BookingForm price={price} />
      </ThemeProvider>
    </AppWrapper>
  );
  const total = getByTestId("total");
  expect(total.textContent).toBe(
    `Total ${currencySymbols[price.currencyCode]}0`
  );
  const addAdultBtn = getByTestId("addAdult");
  const removeAdultBtn = getByTestId("removeAdult");
  const addChildBtn = getByTestId("addChild");
  const removeChildBtn = getByTestId("removeChild");
  const totalAdults = getByTestId("totalAdults");
  const totalChildren = getByTestId("totalChildren");

  //test addult buttons
  fireEvent.click(addAdultBtn);
  expect(total.textContent).toBe(
    `Total ${currencySymbols[price.currencyCode]}${price.value * 1}`
  );
  expect(totalAdults.textContent).toBe("1");
  fireEvent.click(addAdultBtn);
  expect(total.textContent).toBe(
    `Total ${currencySymbols[price.currencyCode]}${price.value * 2}`
  );
  expect(totalAdults.textContent).toBe("2");
  fireEvent.click(removeAdultBtn);
  expect(total.textContent).toBe(
    `Total ${currencySymbols[price.currencyCode]}${price.value * 1}`
  );
  expect(totalAdults.textContent).toBe("1");
  fireEvent.click(removeAdultBtn);
  expect(total.textContent).toBe(
    `Total ${currencySymbols[price.currencyCode]}${price.value * 0}`
  );
  expect(totalAdults.textContent).toBe("0");
  //test child buttons
  fireEvent.click(addChildBtn);
  expect(total.textContent).toBe(
    `Total ${currencySymbols[price.currencyCode]}${price.value * 1}`
  );
  expect(totalChildren.textContent).toBe("1");
  fireEvent.click(addChildBtn);
  expect(total.textContent).toBe(
    `Total ${currencySymbols[price.currencyCode]}${price.value * 2}`
  );
  expect(totalChildren.textContent).toBe("2");
  fireEvent.click(removeChildBtn);
  expect(total.textContent).toBe(
    `Total ${currencySymbols[price.currencyCode]}${price.value * 1}`
  );
  expect(totalChildren.textContent).toBe("1");
});
