import Head from 'next/head';
import Page from '../../app/hoc/securedPage';
import asyncComponent from "../../util/asyncComponent";

const Contact = asyncComponent(() => import('../../routes/inbuiltApps/Contact'));

export default Page(() => (
  <>
    <Head>
      <title>Contact</title>
    </Head>
    <>
      <Contact/>
    </>
  </>
));
