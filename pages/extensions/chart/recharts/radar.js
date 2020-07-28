import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import Radar from '../../../../routes/extensions/charts/recharts/Radar'

export default Page(() => (
  <>
    <Head>
      <title>Radar Chart</title>
    </Head>
    <>
      <Radar/>
    </>
  </>
));
