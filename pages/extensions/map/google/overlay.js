import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import Overlay from '../../../../routes/extensions/map/googlemap/Overlay'

export default Page(() => (
  <>
    <Head>
      <title>Google Map - Overlay</title>
    </Head>
    <>
      <Overlay/>
    </>
  </>
));
