import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import Patterns from '../../../../routes/extensions/map/ammap/Patterns'

export default Page(() => (
  <>
    <Head>
      <title>Ammap-Patterns</title>
    </Head>
    <>
      <Patterns/>
    </>
  </>
));
