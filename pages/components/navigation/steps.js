import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Steps from '../../../routes/components/navigation/Steps'

export default Page(() => (
  <>
    <Head>
      <title>Steps</title>
    </Head>
    <>
      <Steps/>
    </>
  </>
));
