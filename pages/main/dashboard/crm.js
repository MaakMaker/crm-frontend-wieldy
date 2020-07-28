import React from 'react';
import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import dynamic from "next/dynamic";
import CircularProgress from "../../../app/components/CircularProgress";
const CRM = dynamic(() => import('../../../routes/main/Dashboard/CRM'),{
  loading: () => <CircularProgress />,
});

export default Page(() => (
  <React.Fragment>
    <Head>
      <title>CRM Dashborad</title>
    </Head>
    <React.Fragment>
      <CRM/>
    </React.Fragment>
  </React.Fragment>
));
