import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import Composed from '../../../../routes/extensions/charts/recharts/Composed'

export default Page(() => (
  <>
    <Head>
      <title>Composed Chart</title>
    </Head>
    <>
      <Composed/>
    </>
  </>
));
