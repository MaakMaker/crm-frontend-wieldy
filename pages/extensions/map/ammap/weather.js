import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import Weather from '../../../../routes/extensions/map/ammap/Weather'

export default Page(() => (
  <>
    <Head>
      <title>Ammap-Weather</title>
    </Head>
    <>
      <Weather/>
    </>
  </>
));
