import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import ForgotPassword from '../../../routes/customViews/userAuth/ForgotPassword'

export default Page(() => (
  <>
    <Head>
      <title>ForgotPassword</title>
    </Head>
    <>
      <ForgotPassword/>
    </>
  </>
));
