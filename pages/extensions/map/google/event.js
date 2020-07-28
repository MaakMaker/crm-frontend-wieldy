import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import Event from '../../../../routes/extensions/map/googlemap/Event'

export default Page(() => (
  <>
    <Head>
      <title>Google Map - Event</title>
    </Head>
    <>
      <Event/>
    </>
  </>
));
