import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Switches from '../../../routes/components/dataEntry/Switches'

export default Page(() => (
  <>
    <Head>
      <title>Switches</title>
    </Head>
    <>
      <Switches/>
    </>
  </>
));
