import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Progress from '../../../routes/components/feedback/Progress'

export default Page(() => (
  <>
    <Head>
      <title>Progress</title>
    </Head>
    <>
      <Progress/>
    </>
  </>
));
