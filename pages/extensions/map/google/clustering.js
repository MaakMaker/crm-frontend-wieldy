import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import Clustering from '../../../../routes/extensions/map/googlemap/Clustering'

export default Page(() => (
  <>
    <Head>
      <title>Google Map - Clustering</title>
    </Head>
    <>
      <Clustering/>
    </>
  </>
));
