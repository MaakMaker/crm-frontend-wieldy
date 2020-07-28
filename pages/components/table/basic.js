import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Basic from '../../../routes/components/table/Basic'

export default Page(() => (
  <>
    <Head>
      <title>Basic</title>
    </Head>
    <>
      <Basic/>
    </>
  </>
));
