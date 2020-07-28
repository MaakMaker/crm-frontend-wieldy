import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import CapitalsMap from '../../../../routes/extensions/map/ammap/CapitalsMap'

export default Page(() => (
  <>
    <Head>
      <title>Ammap-CapitalsMap</title>
    </Head>
    <>
      <CapitalsMap/>
    </>
  </>
));
