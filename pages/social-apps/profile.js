import Head from 'next/head';
import Page from '../../app/hoc/securedPage';
import asyncComponent from "../../util/asyncComponent";
import "../../routes/socialApps/social-apps.css";

const Profile = asyncComponent(() => import('../../routes/socialApps/Profile'));

export default Page(() => (
  <>
    <Head>
      <title>Profile</title>
    </Head>
    <>
      <Profile/>
    </>
  </>
));
