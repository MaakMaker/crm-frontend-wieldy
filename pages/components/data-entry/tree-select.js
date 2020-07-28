import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import TreeSelect from '../../../routes/components/dataEntry/TreeSelect'

export default Page(() => (
  <>
    <Head>
      <title>TreeSelect</title>
    </Head>
    <>
      <TreeSelect/>
    </>
  </>
));
