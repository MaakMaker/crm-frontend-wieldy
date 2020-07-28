import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Carousel from '../../../routes/components/dataDisplay/Carousel'

export default Page(() => (
  <>
    <Head>
      <title>Carousel</title>
    </Head>
    <>
      <Carousel/>
    </>
  </>
));
