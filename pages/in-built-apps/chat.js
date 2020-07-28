import Head from 'next/head';
import Page from '../../app/hoc/securedPage';
import asyncComponent from "../../util/asyncComponent";
import "../../routes/inbuiltApps/Chat/index.css";

const Chat = asyncComponent(() => import('../../routes/inbuiltApps/Chat'));

export default Page(() => (
  <>
    <Head>
      <title>Chat</title>
    </Head>
    <>
      <Chat/>
    </>
  </>
));
