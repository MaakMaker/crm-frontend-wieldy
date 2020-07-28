import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Upload from '../../../routes/components/dataEntry/Upload'

export default Page(() => (
  <>
    <Head>
      <title>Upload</title>
    </Head>
    <>
      <Upload/>
    </>
  </>
));
