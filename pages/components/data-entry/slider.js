import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Slider from '../../../routes/components/dataEntry/Slider'

export default Page(() => (
  <>
    <Head>
      <title>Slider</title>
    </Head>
    <>
      <Slider/>
    </>
  </>
));
