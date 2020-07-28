import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import Scatter from '../../../../routes/extensions/charts/recharts/Scatter'

export default Page(() => (
  <>
    <Head>
      <title>Scatter Chart</title>
    </Head>
    <>
      <Scatter/>
    </>
  </>
));
