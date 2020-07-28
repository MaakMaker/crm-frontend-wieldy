import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import List from '../../../routes/components/dataDisplay/List'

export default Page(() => (
  <>
    <Head>
      <title>List</title>
    </Head>
    <>
      <List/>
    </>
  </>
));
