import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import Radial from '../../../../routes/extensions/charts/recharts/Radial'

export default Page(() => (
  <>
    <Head>
      <title>Radial Chart</title>
    </Head>
    <>
      <Radial/>
    </>
  </>
));
