import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Header from "../../src/components/Header";
import Layout from "../../src/components/Layout";
import Booking from "../../src/components/Booking";
import NavBar from "../../src/layouts/NavBar";

const Book = () => {
  const router = useRouter();
  const { placeId } = router.query;
  return (
    <>
      <Head>
        <title>{placeId}</title>
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
        </NavBar>
        <Booking />
      </Layout>
    </>
  );
};

export default Book;

export async function getStaticProps() {
  return {
    props: {}
  };
}
/* ensure static pages are generated for all places */
export async function getStaticPaths() {
  const products = (await import("../../data/products")).default;
  const { featured } = products;
  const carousel = products?.carousel?.items;
  const paths = [...featured, ...carousel].map(({ id }) => ({
    params: { placeId: id }
  }));
  return {
    paths,
    fallback: false
  };
}
