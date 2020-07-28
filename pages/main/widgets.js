import Head from 'next/head';
import Page from '../../app/hoc/securedPage';
import CircularProgress from "../../app/components/CircularProgress";
import dynamic from "next/dynamic";
import React from "react";

const Widgets = dynamic(() => import('../../routes/main/Widgets'), {
  loading: () => <CircularProgress/>,
});

export default Page(() => (
  <>
    <Head>
      <title>Widgets</title>
    </Head>
    <>
      <Widgets/>
    </>
  </>
));
