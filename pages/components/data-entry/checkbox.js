import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Checkbox from '../../../routes/components/dataEntry/Checkbox'

export default Page(() => (
  <>
    <Head>
      <title>Checkbox</title>
    </Head>
    <>
      <Checkbox/>
    </>
  </>
));
