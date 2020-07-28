import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import InputNumber from '../../../routes/components/dataEntry/InputNumber'

export default Page(() => (
  <>
    <Head>
      <title>InputNumber</title>
    </Head>
    <>
      <InputNumber/>
    </>
  </>
));
