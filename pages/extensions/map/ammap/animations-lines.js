import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import AnimationsLines from '../../../../routes/extensions/map/ammap/AnimationsLines'

export default Page(() => (
  <>
    <Head>
      <title>Ammap-AnimationsLines</title>
    </Head>
    <>
      <AnimationsLines/>
    </>
  </>
));
