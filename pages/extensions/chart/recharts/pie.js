import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
  import Pie from '../../../../routes/extensions/charts/recharts/Pie'

export default Page(() => (
  <>
    <Head>
      <title>Pie Chart</title>
    </Head>
    <>
      <Pie/>
    </>
  </>
));
