import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Mention from '../../../routes/components/dataEntry/Mention'

export default Page(() => (
  <>
    <Head>
      <title>Mention</title>
    </Head>
    <>
      <Mention/>
    </>
  </>
));
