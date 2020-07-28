import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Rate from '../../../routes/components/dataEntry/Rate'

export default Page(() => (
  <>
    <Head>
      <title>Rate</title>
    </Head>
    <>
      <Rate/>
    </>
  </>
));
