import Head from 'next/head';
import Page from '../../app/hoc/securedPage';
import asyncComponent from "../../util/asyncComponent";

const Mail = asyncComponent(() => import('../../routes/inbuiltApps/Mail'));

export default Page(() => (
  <>
    <Head>
      <title>Mail</title>
    </Head>
    <>
      <Mail/>
    </>
  </>
));
