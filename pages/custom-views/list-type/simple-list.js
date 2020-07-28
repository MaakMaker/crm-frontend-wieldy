import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Sample from '../../../routes/customViews/listType/Sample'

export default Page(() => (
  <>
    <Head>
      <title>Sample List</title>
    </Head>
    <>
      <Sample/>
    </>
  </>
));
