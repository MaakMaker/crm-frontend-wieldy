import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import StreetView from '../../../../routes/extensions/map/googlemap/StreetView'

export default Page(() => (
  <>
    <Head>
      <title>Google Map - StreetView</title>
    </Head>
    <>
      <StreetView/>
    </>
  </>
));
