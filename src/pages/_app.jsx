/* eslint-disable react/prop-types */

import Head from 'next/head';

import 'src/styles/index.css';

const AppForReddit = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="dns-prefetch" href="https://a.thumbs.redditmedia.com" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default AppForReddit;
