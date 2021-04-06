import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "./styles/theme";
import { AppWrapper } from "./context/state";
import NavBar from "./layouts/NavBar";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Nav from "./components/Nav";
import CarouselSection from "./components/CarouselSection";

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
