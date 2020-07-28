import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Spin from '../../../routes/components/feedback/Spin'

export default Page(() => (
  <>
    <Head>
      <title>Spin</title>
    </Head>
    <>
      <Spin/>
    </>
  </>
));
