import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import TimePicker from '../../../routes/components/dataEntry/TimePicker'

export default Page(() => (
  <>
    <Head>
      <title>TimePicker</title>
    </Head>
    <>
      <TimePicker/>
    </>
  </>
));
