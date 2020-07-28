import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Modal from '../../../routes/components/feedback/Modal'

export default Page(() => (
  <>
    <Head>
      <title>Modal</title>
    </Head>
    <>
      <Modal/>
    </>
  </>
));
