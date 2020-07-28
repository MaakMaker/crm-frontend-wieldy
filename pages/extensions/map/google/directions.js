import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import Directions from '../../../../routes/extensions/map/googlemap/Directions'

export default Page(() => (
  <>
    <Head>
      <title>Google Map - Directions</title>
    </Head>
    <>
      <Directions/>
    </>
  </>
));
