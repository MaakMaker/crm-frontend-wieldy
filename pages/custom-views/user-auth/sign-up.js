import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import SignUp from '../../../routes/customViews/userAuth/SignUp'

export default Page(() => (
  <>
    <Head>
      <title>SignUp</title>
    </Head>
    <>
      <SignUp/>
    </>
  </>
));
