import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Affix from '../../../routes/components/navigation/Affix'

export default Page(() => (
  <>
    <Head>
      <title>Affix</title>
    </Head>
    <>
      <Affix/>
    </>
  </>
));
