import Head from 'next/head';
import Page from '../../app/hoc/securedPage';
import dynamic from "next/dynamic";
import CircularProgress from "../../app/components/CircularProgress";
import React from "react";

const Layouts = dynamic(() => import('../../routes/main/Layouts'), {
  loading: () => <CircularProgress/>,
});


export default Page(() => (
  <>
    <Head>
      <title>Layouts</title>
    </Head>
    <>
      <Layouts/>
    </>
  </>
));
