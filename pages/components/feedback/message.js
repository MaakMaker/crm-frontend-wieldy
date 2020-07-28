import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Message from '../../../routes/components/feedback/Message'

export default Page(() => (
  <>
    <Head>
      <title>Message</title>
    </Head>
    <>
      <Message/>
    </>
  </>
));
