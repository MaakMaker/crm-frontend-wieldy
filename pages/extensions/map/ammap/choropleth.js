import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import Choropleth from '../../../../routes/extensions/map/ammap/Choropleth'

export default Page(() => (
  <>
    <Head>
      <title>Ammap-Choropleth</title>
    </Head>
    <>
      <Choropleth/>
    </>
  </>
));
