import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Radio from '../../../routes/components/dataEntry/Radio'

export default Page(() => (
  <>
    <Head>
      <title>Radio</title>
    </Head>
    <>
      <Radio/>
    </>
  </>
));
