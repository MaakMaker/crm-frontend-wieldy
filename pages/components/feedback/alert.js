import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Alert from '../../../routes/components/feedback/Alert'

export default Page(() => (
  <>
    <Head>
      <title>Alert</title>
    </Head>
    <>
      <Alert/>
    </>
  </>
));
