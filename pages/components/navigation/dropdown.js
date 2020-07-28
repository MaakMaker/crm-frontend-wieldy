import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Dropdown from '../../../routes/components/navigation/Dropdown'

export default Page(() => (
  <>
    <Head>
      <title>Dropdown</title>
    </Head>
    <>
      <Dropdown/>
    </>
  </>
));
