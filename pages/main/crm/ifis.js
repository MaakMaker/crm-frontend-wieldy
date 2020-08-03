import React from 'react';
import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import asyncComponent from "../../../util/asyncComponent";
import IntlMessages from '../../../util/IntlMessages';
import IFI from '../../../routes/main/CRM/IFI';

// const IFI = asyncComponent(() => import('../../../routes/main/CRM/IFI'));

export default Page(() => (
  <div>
    <Head>
      <title>International Financial Institutes</title>
    </Head>
    <div>
      <IFI />
    </div>
  </div>
));
