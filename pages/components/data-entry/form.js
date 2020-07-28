import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Form from '../../../routes/components/dataEntry/Form'

export default Page(() => (
  <>
    <Head>
      <title>Form</title>
    </Head>
    <>
      <Form/>
    </>
  </>
));
