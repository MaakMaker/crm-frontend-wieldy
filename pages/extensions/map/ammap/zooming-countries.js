import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import ZoomingCountries from '../../../../routes/extensions/map/ammap/ZoomingCountries'

export default Page(() => (
  <>
    <Head>
      <title>Ammap-ZoomingCountries</title>
    </Head>
    <>
      <ZoomingCountries/>
    </>
  </>
));
