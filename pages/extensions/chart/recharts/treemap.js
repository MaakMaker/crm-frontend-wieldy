import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import Treemap from '../../../../routes/extensions/charts/recharts/Treemap'

export default Page(() => (
  <>
    <Head>
      <title>Treemap Chart</title>
    </Head>
    <>
      <Treemap/>
    </>
  </>
));
