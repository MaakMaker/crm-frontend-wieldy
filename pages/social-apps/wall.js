import Head from 'next/head';
import Page from '../../app/hoc/securedPage';
import asyncComponent from "../../util/asyncComponent";
import "../../routes/socialApps/social-apps.css";

const Wall = asyncComponent(() => import('../../routes/socialApps/Wall'));

export default Page(() => (
  <>
    <Head>
      <title>Wall</title>
    </Head>
    <>
      <Wall/>
    </>
  </>
));
