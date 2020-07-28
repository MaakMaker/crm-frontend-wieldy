import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Transfer from '../../../routes/components/dataEntry/Transfer'

export default Page(() => (
  <>
    <Head>
      <title>Transfer</title>
    </Head>
    <>
      <Transfer/>
    </>
  </>
));
