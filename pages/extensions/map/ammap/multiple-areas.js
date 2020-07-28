import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import MultipleAreas from '../../../../routes/extensions/map/ammap/MultipleAreas'

export default Page(() => (
  <>
    <Head>
      <title>Ammap-MultipleAreas</title>
    </Head>
    <>
      <MultipleAreas/>
    </>
  </>
));
