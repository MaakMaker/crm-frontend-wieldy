import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import Drawing from '../../../../routes/extensions/map/googlemap/Drawing'

export default Page(() => (
  <>
    <Head>
      <title>Google Map - Drawing</title>
    </Head>
    <>
      <Drawing/>
    </>
  </>
));
