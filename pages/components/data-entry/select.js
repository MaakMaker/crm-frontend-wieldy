import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Select from '../../../routes/components/dataEntry/Select'

export default Page(() => (
  <>
    <Head>
      <title>Select</title>
    </Head>
    <>
      <Select/>
    </>
  </>
));
