import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Card from '../../../routes/customViews/listType/Card'

export default Page(() => (
  <>
    <Head>
      <title>Card List</title>
    </Head>
    <>
      <Card/>
    </>
  </>
));
