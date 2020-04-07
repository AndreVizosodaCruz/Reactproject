import React from 'react'
import Head from 'next/head'

/* STYLES */
import '../styles/resetCss.css';
import '../styles/fonts.css';
import '../styles/global.css';

export default function MyApp(props) {

  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <Head>
        <title>RedAdviser</title>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  )
}