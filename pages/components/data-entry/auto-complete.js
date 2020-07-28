import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import AutoComplete from '../../../routes/components/dataEntry/AutoComplete'

export default Page(() => (
  <>
    <Head>
      <title>AutoComplete</title>
    </Head>
    <>
      <AutoComplete/>
    </>
  </>
));
