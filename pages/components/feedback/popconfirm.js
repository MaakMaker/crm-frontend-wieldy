import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import PopConfirm from '../../../routes/components/feedback/PopConfirm'

export default Page(() => (
  <>
    <Head>
      <title>PopConfirm</title>
    </Head>
    <>
      <PopConfirm/>
    </>
  </>
));
