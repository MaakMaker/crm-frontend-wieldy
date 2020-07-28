import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Timeline from '../../../routes/components/dataDisplay/Timeline'

export default Page(() => (
  <>
    <Head>
      <title>Timeline</title>
    </Head>
    <>
      <Timeline/>
    </>
  </>
));
