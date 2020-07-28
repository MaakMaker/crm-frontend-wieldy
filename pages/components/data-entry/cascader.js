import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
  import Cascader from '../../../routes/components/dataEntry/Cascader'

export default Page(() => (
  <>
    <Head>
      <title>Cascader</title>
    </Head>
    <>
      <Cascader/>
    </>
  </>
));
