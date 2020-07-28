import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Breadcrumb from '../../../routes/components/navigation/Breadcrumb'

export default Page(() => (
  <>
    <Head>
      <title>Breadcrumb</title>
    </Head>
    <>
      <Breadcrumb/>
    </>
  </>
));
