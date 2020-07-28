import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Popover from '../../../routes/components/dataDisplay/Popover'

export default Page(() => (
  <>
    <Head>
      <title>Popover</title>
    </Head>
    <>
      <Popover/>
    </>
  </>
));
