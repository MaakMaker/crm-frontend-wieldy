import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import Traffic from '../../../../routes/extensions/map/googlemap/Traffic'

export default Page(() => (
  <>
    <Head>
      <title>Google Map - Traffic</title>
    </Head>
    <>
      <Traffic/>
    </>
  </>
));
