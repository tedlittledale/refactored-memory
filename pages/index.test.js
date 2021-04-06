import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "../src/styles/theme";
import { AppWrapper } from "../src/context/state";
import NavBar from "../src/layouts/NavBar";
import Header from "../src/components/Header";
import Layout from "../src/components/Layout";
import Hero from "../src/components/Hero";
import Featured from "../src/components/Featured";
import Nav from "../src/components/Nav";
import CarouselSection from "../src/components/CarouselSection";

afterEach(cleanup);

test("<BookingForm />", () => {
  const { debug, getByTestId } = render(
    <AppWrapper>
      <ThemeProvider theme={theme}>
        <Layout>
          <NavBar>
            <Header />
            <Nav />
          </NavBar>
          <Hero />
          <Featured />
          <CarouselSection />
        </Layout>
      </ThemeProvider>
    </AppWrapper>
  );
  const nav = getByTestId("nav");
  const hero = getByTestId("hero");
  const featured = getByTestId("featured");
  const carousel = getByTestId("carousel");
  expect(nav).toBeTruthy();
  expect(hero).toBeTruthy();
  expect(featured).toBeTruthy();
  expect(carousel).toBeTruthy();
});
