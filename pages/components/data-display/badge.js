import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Badge from '../../../routes/components/dataDisplay/Badge'

export default Page(() => (
  <>
    <Head>
      <title>Badge</title>
    </Head>
    <>
      <Badge/>
    </>
  </>
));
