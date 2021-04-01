import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { getSnapshot } from "mobx-state-tree";
import { observer } from "mobx-react-lite";

import { withPaths } from "../src/utils/store";
import Header from "../src/components/Header";
import Layout from "../src/components/Layout";
import Nav from "../src/components/Nav";
import Hero from "../src/components/Hero";
import NavBar from "../src/layouts/NavBar";
import { initializeStore } from "../store";
import products from "../data/products";

const Home = () => {
  return (
    <>
      <Head>
        <title>Scandanavian Adventures</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@_superted" />
        <meta property="og:url" content="https://countdown.tedspace.me/" />
        <meta property="og:title" content="Scandanavian Adventures" />
        <meta property="og:description" content="Example Description" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dc1yk89ve/image/upload/v1611689943/Screenshot_2021-01-26_at_19.38.28_ouuy8y.png"
        />
        <link rel="icon" href="animated-favicon.gif" type="image/gif"></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Layout>
        <NavBar>
          <Header />
          <Nav />
        </NavBar>
        <Hero />
      </Layout>
    </>
  );
};

export default Home;
