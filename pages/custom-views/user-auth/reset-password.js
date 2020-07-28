import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import ResetPassword from '../../../routes/customViews/userAuth/ResetPassword'

export default Page(() => (
  <>
    <Head>
      <title>ResetPassword</title>
    </Head>
    <>
      <ResetPassword/>
    </>
  </>
));
