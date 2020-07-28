import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Data from '../../../routes/components/table/Data'

export default Page(() => (
  <>
    <Head>
      <title>Data</title>
    </Head>
    <>
      <Data/>
    </>
  </>
));
