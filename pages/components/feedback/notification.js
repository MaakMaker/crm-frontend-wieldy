import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Notification from '../../../routes/components/feedback/Notification'

export default Page(() => (
  <>
    <Head>
      <title>Notification</title>
    </Head>
    <>
      <Notification/>
    </>
  </>
));
