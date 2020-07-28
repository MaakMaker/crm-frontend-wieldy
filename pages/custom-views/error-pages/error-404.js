import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Error404 from '../../../routes/customViews/extraPages/404'

export default Page(() => (
  <>
    <Head>
      <title>404 Error</title>
    </Head>
    <>
      <Error404/>
    </>
  </>
));
