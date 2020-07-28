import React from "react";
import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import dynamic from "next/dynamic";
import CircularProgress from "../../../app/components/CircularProgress";

const Listing = dynamic(() => import('../../../routes/main/Dashboard/Listing'), {
  loading: () => <CircularProgress/>,
});

export default Page(() => (
  <>
    <Head>
      <title>Listing Dashborad</title>
    </Head>
    <>
      <Listing/>
    </>
  </>
));
