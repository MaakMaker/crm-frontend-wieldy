import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Cards from '../../../routes/components/dataDisplay/Cards'

export default Page(() => (
  <>
    <Head>
      <title>Cards</title>
    </Head>
    <>
      <Cards/>
    </>
  </>
));
