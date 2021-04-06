import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "../styles/theme";
import { AppWrapper } from "../context/state";
import products from "../../data/products";

import CarouselSection from "./CarouselSection";

afterEach(cleanup);

test("<BookingForm />", () => {
  const { debug, getAllByTestId } = render(
    <AppWrapper>
      <ThemeProvider theme={theme}>
        <CarouselSection />
      </ThemeProvider>
    </AppWrapper>
  );
  debug();
  const items = getAllByTestId("carousel-item");
  const { carousel } = products;
  expect(items).toHaveLength(carousel.items.length);
});
