import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Input from '../../../routes/components/dataEntry/Input'

export default Page(() => (
  <>
    <Head>
      <title>Input</title>
    </Head>
    <>
      <Input/>
    </>
  </>
));
