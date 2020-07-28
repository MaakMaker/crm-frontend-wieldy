import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import Calendar from '../../../routes/components/dataDisplay/Calendar'

export default Page(() => (
  <>
    <Head>
      <title>Calendar</title>
    </Head>
    <>
      <Calendar/>
    </>
  </>
));
