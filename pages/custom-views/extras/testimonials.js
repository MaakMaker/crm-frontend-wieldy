import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Testimonials from '../../../routes/customViews/extras/Testimonials'

export default Page(() => (
  <>
    <Head>
      <title>Testimonials</title>
    </Head>
    <>
      <Testimonials/>
    </>
  </>
));
