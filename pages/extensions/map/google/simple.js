import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import Simple from '../../../../routes/extensions/map/googlemap/Simple'

export default Page(() => (
  <>
    <Head>
      <title>Google Map - Simple</title>
    </Head>
    <>
      <Simple/>
    </>
  </>
));
