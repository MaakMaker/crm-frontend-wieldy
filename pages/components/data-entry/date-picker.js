import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import DatePicker from '../../../routes/components/dataEntry/DatePicker'

export default Page(() => (
  <>
    <Head>
      <title>DatePicker</title>
    </Head>
    <>
      <DatePicker/>
    </>
  </>
));
