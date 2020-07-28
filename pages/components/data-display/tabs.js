import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Tabs from '../../../routes/components/dataDisplay/Tabs'

export default Page(() => (
  <>
    <Head>
      <title>Tabs</title>
    </Head>
    <>
      <Tabs/>
    </>
  </>
));
