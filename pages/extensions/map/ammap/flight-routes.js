import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import FlightRoutes from '../../../../routes/extensions/map/ammap/FlightRoutes'

export default Page(() => (
  <>
    <Head>
      <title>Ammap-FlightRoutes</title>
    </Head>
    <>
      <FlightRoutes/>
    </>
  </>
));
