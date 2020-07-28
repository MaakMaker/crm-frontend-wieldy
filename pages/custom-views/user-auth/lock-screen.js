import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import LockScreen from '../../../routes/customViews/userAuth/LockScreen'

export default Page(() => (
  <>
    <Head>
      <title>LockScreen</title>
    </Head>
    <>
      <LockScreen/>
    </>
  </>
));
