import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import PopupInfo from '../../../../routes/extensions/map/googlemap/PopupInfo'

export default Page(() => (
  <>
    <Head>
      <title>Google Map - PopupInfo</title>
    </Head>
    <>
      <PopupInfo/>
    </>
  </>
));
