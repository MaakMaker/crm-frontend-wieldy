import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Menu from '../../../routes/components/navigation/Menu'

export default Page(() => (
  <>
    <Head>
      <title>Menu</title>
    </Head>
    <>
      <Menu/>
    </>
  </>
));
