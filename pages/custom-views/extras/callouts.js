import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Callouts from '../../../routes/customViews/extras/Callouts'

export default Page(() => (
  <>
    <Head>
      <title>Callouts</title>
    </Head>
    <>
      <Callouts/>
    </>
  </>
));
