import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Tree from '../../../routes/components/dataDisplay/Tree'

export default Page(() => (
  <>
    <Head>
      <title>Tree</title>
    </Head>
    <>
      <Tree/>
    </>
  </>
));
