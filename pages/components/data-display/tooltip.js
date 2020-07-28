import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Tooltip from '../../../routes/components/dataDisplay/Tooltip'

export default Page(() => (
  <>
    <Head>
      <title>Tooltip</title>
    </Head>
    <>
      <Tooltip/>
    </>
  </>
));
