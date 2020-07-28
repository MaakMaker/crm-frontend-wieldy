import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import GeoLocation from '../../../../routes/extensions/map/googlemap/GeoLocation'

export default Page(() => (
  <>
    <Head>
      <title>Google Map - GeoLocation</title>
    </Head>
    <>
      <GeoLocation/>
    </>
  </>
));
