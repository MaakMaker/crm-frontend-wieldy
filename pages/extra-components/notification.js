import Head from 'next/head';
import Page from '../../app/hoc/securedPage';
import Notification from '../../routes/extraComponents/Notification'

export default Page(() => (
  <>
    <Head>
      <title>Notification </title>
    </Head>
    <>
      <Notification/>
    </>
  </>
));
