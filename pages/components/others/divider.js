import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Divider from '../../../routes/components/others/Divider'

export default Page(() => (
  <>
    <Head>
      <title>Divider</title>
    </Head>
    <>
      <Divider/>
    </>
  </>
));
