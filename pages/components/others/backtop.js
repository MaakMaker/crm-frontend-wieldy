import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import BackTop from '../../../routes/components/others/BackTop'

export default Page(() => (
  <>
    <Head>
      <title>BackTop</title>
    </Head>
    <>
      <BackTop/>
    </>
  </>
));
