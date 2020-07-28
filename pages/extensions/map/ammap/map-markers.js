import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import MapMarkers from '../../../../routes/extensions/map/ammap/MapMarkers'

export default Page(() => (
  <>
    <Head>
      <title>Ammap-MapMarkers</title>
    </Head>
    <>
      <MapMarkers/>
    </>
  </>
));
