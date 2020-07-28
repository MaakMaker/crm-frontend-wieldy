import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import Styled from '../../../../routes/extensions/map/googlemap/Styled'

export default Page(() => (
  <>
    <Head>
      <title>Google Map - Styled</title>
    </Head>
    <>
      <Styled/>
    </>
  </>
));
