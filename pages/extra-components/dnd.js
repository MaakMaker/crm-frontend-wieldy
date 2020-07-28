import Head from 'next/head';
import Page from '../../app/hoc/securedPage';
import DragnDrop from '../../routes/extraComponents/DragnDrop'

export default Page(() => (
  <>
    <Head>
      <title>Drag n Drop </title>
    </Head>
    <>
      <DragnDrop/>
    </>
  </>
));
