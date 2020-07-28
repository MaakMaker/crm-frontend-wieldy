import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import DrillDown from '../../../../routes/extensions/map/ammap/DrillDown'

export default Page(() => (
  <>
    <Head>
      <title>Ammap-DrillDown</title>
    </Head>
    <>
      <DrillDown/>
    </>
  </>
));
