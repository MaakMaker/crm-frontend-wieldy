import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Anchor from '../../../routes/components/others/Anchor'

export default Page(() => (
  <>
    <Head>
      <title>Anchor</title>
    </Head>
    <>
      <Anchor/>
    </>
  </>
));
