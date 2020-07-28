import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Collapse from '../../../routes/components/dataDisplay/Collapse'

export default Page(() => (
  <>
    <Head>
      <title>Collapse</title>
    </Head>
    <>
      <Collapse/>
    </>
  </>
));
