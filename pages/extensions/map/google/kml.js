import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import KML from '../../../../routes/extensions/map/googlemap/KML'

export default Page(() => (
  <>
    <Head>
      <title>Google Map - KML</title>
    </Head>
    <>
      <KML/>
    </>
  </>
));
