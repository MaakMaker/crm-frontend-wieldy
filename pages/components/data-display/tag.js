import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Tag from '../../../routes/components/dataDisplay/Tag'

export default Page(() => (
  <>
    <Head>
      <title>Tag</title>
    </Head>
    <>
      <Tag/>
    </>
  </>
));
