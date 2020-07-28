import Head from 'next/head';
import Page from '../../app/hoc/securedPage';
import Shuffles from '../../routes/extraComponents/Shuffles'

export default Page(() => (
  <>
    <Head>
      <title>Shuffles </title>
    </Head>
    <>
      <Shuffles/>
    </>
  </>
));
