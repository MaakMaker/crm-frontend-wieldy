import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Button from '../../../routes/components/general/Button'

export default Page(() => (
  <>
    <Head>
      <title>Button</title>
    </Head>
    <>
      <Button/>
    </>
  </>
));
