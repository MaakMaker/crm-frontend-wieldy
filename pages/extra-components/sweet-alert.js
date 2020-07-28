import Head from 'next/head';
import Page from '../../app/hoc/securedPage';
import SweetAlert from '../../routes/extraComponents/SweetAlert'

export default Page(() => (
  <>
    <Head>
      <title>SweetAlert </title>
    </Head>
    <>
      <SweetAlert/>
    </>
  </>
));
