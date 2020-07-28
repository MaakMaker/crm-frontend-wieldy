import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Default from '../../../routes/extraComponents/timeLine/DefaultWithIcon'

export default Page(() => (
  <>
    <Head>
      <title>Default With Icon Timeline</title>
    </Head>
    <>
      <Default/>
    </>
  </>
));
