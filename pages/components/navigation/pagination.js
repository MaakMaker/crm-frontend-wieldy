import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Pagination from '../../../routes/components/navigation/Pagination'

export default Page(() => (
  <>
    <Head>
      <title>Pagination</title>
    </Head>
    <>
      <Pagination/>
    </>
  </>
));
