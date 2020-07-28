import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import CurvedLines from '../../../../routes/extensions/map/ammap/CurvedLines'

export default Page(() => (
  <>
    <Head>
      <title>Ammap-CurvedLines</title>
    </Head>
    <>
      <CurvedLines/>
    </>
  </>
));
