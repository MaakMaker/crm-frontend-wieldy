import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Strip from '../../../routes/customViews/listType/Strip'

export default Page(() => (
  <>
    <Head>
      <title>Strip List</title>
    </Head>
    <>
      <Strip/>
    </>
  </>
));
