import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import Bubbles from '../../../../routes/extensions/map/ammap/Bubbles'

export default Page(() => (
  <>
    <Head>
      <title>Ammap-Bubbles</title>
    </Head>
    <>
      <Bubbles/>
    </>
  </>
));
