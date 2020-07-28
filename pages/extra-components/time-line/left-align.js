import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import LeftAligned from '../../../routes/extraComponents/timeLine/LeftAligned'

export default Page(() => (
  <>
    <Head>
      <title>Left Aligned Timeline</title>
    </Head>
    <>
      <LeftAligned/>
    </>
  </>
));
