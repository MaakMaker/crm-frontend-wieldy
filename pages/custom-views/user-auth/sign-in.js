import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import SignIn from '../../../routes/customViews/userAuth/SignIn'

export default Page(() => (
  <>
    <Head>
      <title>SignIn</title>
    </Head>
    <>
      <SignIn/>
    </>
  </>
));
