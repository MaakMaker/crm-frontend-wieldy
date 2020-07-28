import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Error500 from '../../../routes/customViews/extraPages/500'

export default Page(() => (
  <>
    <Head>
      <title>500 Error</title>
    </Head>
    <>
      <Error500/>
    </>
  </>
));
