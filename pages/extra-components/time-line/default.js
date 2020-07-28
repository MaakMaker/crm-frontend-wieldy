import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Default from '../../../routes/extraComponents/timeLine/Default'

export default Page(() => (
  <>
    <Head>
      <title>Default Timeline</title>
    </Head>
    <>
      <Default/>
    </>
  </>
));
