import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import CK from '../../../routes/extraComponents/editors/CK'

export default Page(() => (
  <>
    <Head>
      <title>CK Editor</title>
    </Head>
    <>
      <CK/>
    </>
  </>
));
