import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Icon from '../../../routes/components/general/Icon'

export default Page(() => (
  <>
    <Head>
      <title>Icon</title>
    </Head>
    <>
      <Icon/>
    </>
  </>
));
