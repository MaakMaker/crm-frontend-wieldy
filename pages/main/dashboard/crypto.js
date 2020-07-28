import React from "react";
import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import dynamic from "next/dynamic";
import CircularProgress from "../../../app/components/CircularProgress";

const Crypto = dynamic(() => import('../../../routes/main/Dashboard/Crypto'), {
  loading: () => <CircularProgress/>,
});

export default Page(() => (
  <>
    <Head>
      <title>Crypto Dashborad</title>
    </Head>
    <>
      <Crypto/>
    </>
  </>
));
